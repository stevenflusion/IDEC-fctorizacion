import { spawn } from "node:child_process"
import { createRequire } from "node:module"
import { existsSync } from "node:fs"
import { mkdir, writeFile } from "node:fs/promises"
import { join, relative } from "node:path"
import { pathToFileURL } from "node:url"

const idecRoot = "D:\\Clientes de programacion\\IDEC\\idec-web-info"
const nexusRoot = "D:\\Clientes de programacion\\IDEC\\nexus-corp"

const requireFromNexus = createRequire(
  pathToFileURL(join(nexusRoot, "package.json")).href
)
const { chromium } = requireFromNexus("playwright")

const today = new Date().toISOString().slice(0, 10)

const viewports = [
  { id: "desktop", width: 1440, height: 1000, isMobile: false },
  { id: "mobile", width: 390, height: 844, isMobile: true },
]

const projects = [
  {
    id: "nexus-corp",
    name: "NEXUS Corp",
    root: nexusRoot,
    webRoot: join(nexusRoot, "apps", "web"),
    baseUrl: "http://127.0.0.1:4321",
    devCommand: "npm",
    devArgs: ["run", "dev", "--", "--host", "127.0.0.1", "--port", "4321"],
    routes: [
      { path: "/", label: "inicio" },
      { path: "/servicios/", label: "servicios" },
      { path: "/nosotros/", label: "nosotros" },
      { path: "/contacto/", label: "contacto" },
      { path: "/cotizador/", label: "cotizador" },
    ],
    chatbot: {
      homePath: "/",
      inputSelector: "#nexus-chatbot-message",
      launcherLabel: "Abrir chat",
      sendLabel: "Enviar mensaje",
      whatsappText: "Continuar por WhatsApp",
      messages: [
        { id: "servicios", text: "Que servicios ofrecen?" },
        { id: "faq-documentos", text: "Que documentos necesito?" },
        { id: "contacto", text: "Quiero hablar con un asesor" },
        { id: "fallback", text: "Tengo una duda muy especifica que no se como explicar" },
      ],
    },
  },
  {
    id: "idec-web-info",
    name: "IDEC Web Info",
    root: idecRoot,
    webRoot: idecRoot,
    baseUrl: "http://127.0.0.1:5002",
    devCommand: "npm",
    devArgs: ["run", "dev"],
    routes: [
      { path: "/", label: "inicio" },
      { path: "/home/", label: "home" },
      { path: "/soluciones/", label: "soluciones" },
      { path: "/sobre-nosotros/", label: "sobre-nosotros" },
      { path: "/clients/", label: "clients" },
      { path: "/contact/", label: "contacto" },
    ],
    chatbot: {
      homePath: "/home/",
      inputSelector: "#idec-chatbot-message",
      launcherLabel: "Abrir chat",
      sendLabel: "Enviar mensaje",
      whatsappText: "Continuar por WhatsApp",
      messages: [
        { id: "servicios", text: "Que servicios de ingenieria ofrecen?" },
        { id: "faq-proceso", text: "Como funciona el diagnostico tecnico?" },
        { id: "contacto", text: "Necesito hablar con un especialista" },
        { id: "fallback", text: "Tengo una duda muy especifica que no se como explicar" },
      ],
    },
  },
]

const startedServers = []

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const toRelative = (project, filePath) => relative(project.root, filePath)

const ensureProjectDirs = async (project) => {
  const dirs = [
    "informe",
    "informe\\capturas-web",
    "informe\\capturas-web\\secciones",
    "informe\\capturas-web\\componentes",
    "informe\\capturas-chatbot",
    "informe\\capturas-chatbot\\desktop",
    "informe\\capturas-chatbot\\mobile",
    "informe\\qa",
    "informe\\build",
  ]

  for (const dir of dirs) {
    await mkdir(join(project.root, dir), { recursive: true })
  }
}

const writeJson = async (project, name, value) => {
  await writeFile(
    join(project.root, "informe", "qa", name),
    `${JSON.stringify(value, null, 2)}\n`,
    "utf8"
  )
}

const fetchStatus = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      ...options,
    })
    return {
      ok: response.ok,
      status: response.status,
      url: response.url,
      contentType: response.headers.get("content-type") ?? "",
    }
  } catch (error) {
    return {
      ok: false,
      status: 0,
      url,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

const waitForServer = async (url, timeoutMs = 90000) => {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeoutMs) {
    const status = await fetchStatus(url)

    if (status.status > 0 && status.status < 500) {
      return status
    }

    await sleep(1000)
  }

  throw new Error(`No se pudo iniciar ${url}`)
}

const startServerIfNeeded = async (project) => {
  const initialStatus = await fetchStatus(`${project.baseUrl}/`)

  if (initialStatus.status > 0 && initialStatus.status < 500) {
    return {
      started: false,
      status: initialStatus,
    }
  }

  const logPath = join(project.root, "informe", "qa", `dev-server-${today}.log`)
  const child = spawn(project.devCommand, project.devArgs, {
    cwd: project.webRoot,
    shell: process.platform === "win32",
    env: {
      ...process.env,
      HOST: "127.0.0.1",
    },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  })

  let log = ""
  child.stdout.on("data", (chunk) => {
    log += chunk.toString()
  })
  child.stderr.on("data", (chunk) => {
    log += chunk.toString()
  })

  startedServers.push({
    project,
    child,
    getLog: () => log,
    logPath,
  })

  const status = await waitForServer(`${project.baseUrl}/`)

  return {
    started: true,
    status,
  }
}

const cleanupServers = async () => {
  for (const server of startedServers) {
    if (!server.child.killed) {
      server.child.kill()
    }

    await writeFile(server.logPath, server.getLog(), "utf8")
  }
}

const withPage = async (browser, viewport, callback) => {
  const context = await browser.newContext({
    viewport: {
      width: viewport.width,
      height: viewport.height,
    },
    deviceScaleFactor: 1,
    isMobile: viewport.isMobile,
    hasTouch: viewport.isMobile,
    reducedMotion: "reduce",
  })

  const page = await context.newPage()
  await page.addInitScript(() => {
    window.__openedUrls = []

    window.open = (url) => {
      window.__openedUrls.push(String(url))
      return null
    }

    try {
      window.localStorage.clear()
      window.sessionStorage.clear()
    } catch {}
  })

  try {
    return await callback(page, context)
  } finally {
    await context.close()
  }
}

const collectPageMetrics = async (page) =>
  page.evaluate(() => {
    const links = Array.from(document.querySelectorAll("a[href]")).map(
      (link) => ({
        href: link.href,
        text: link.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) ?? "",
        target: link.getAttribute("target") ?? "",
      })
    )

    const brokenImages = Array.from(document.images)
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => ({
        src: image.currentSrc || image.src,
        alt: image.alt,
      }))

    const bodyText = document.body.innerText ?? ""

    return {
      title: document.title,
      finalUrl: location.href,
      scrollHeight: document.documentElement.scrollHeight,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      hasHorizontalOverflow:
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
      brokenImages,
      links,
      formCount: document.forms.length,
      textIssueCount: (bodyText.match(/Ã|Â|â€|�/g) ?? []).length,
    }
  })

const captureSections = async (project, page, route, viewport, manifest) => {
  const metrics = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    viewportHeight: window.innerHeight,
  }))

  const maxY = Math.max(metrics.scrollHeight - metrics.viewportHeight, 0)
  const positions = [
    { id: "hero", y: 0 },
    { id: "medio", y: Math.round(maxY / 2) },
    { id: "footer", y: maxY },
  ]

  for (const position of positions) {
    await page.evaluate((y) => window.scrollTo(0, y), position.y)
    await page.waitForTimeout(300)

    const filePath = join(
      project.root,
      "informe",
      "capturas-web",
      "secciones",
      `${route.label}-${viewport.id}-${position.id}.png`
    )

    await page.screenshot({
      path: filePath,
      fullPage: false,
      animations: "disabled",
      caret: "hide",
    })

    manifest.push({
      type: "section",
      route: route.path,
      viewport: viewport.id,
      section: position.id,
      file: toRelative(project, filePath),
    })
  }

  await page.evaluate(() => window.scrollTo(0, 0))
}

const captureComponentIfRelevant = async (
  project,
  page,
  route,
  viewport,
  manifest
) => {
  const componentCaptures = []

  if (route.path.includes("contact")) {
    const form = page.locator("form").first()

    if ((await form.count()) > 0) {
      const filePath = join(
        project.root,
        "informe",
        "capturas-web",
        "componentes",
        `${route.label}-${viewport.id}-formulario-contacto.png`
      )

      await form.screenshot({
        path: filePath,
        animations: "disabled",
        caret: "hide",
      })

      componentCaptures.push({
        type: "component",
        component: "contact-form",
        route: route.path,
        viewport: viewport.id,
        file: toRelative(project, filePath),
      })
    }
  }

  if (project.id === "nexus-corp" && route.path === "/cotizador/") {
    const wizard = page.locator('[data-testid="quote-wizard"]')

    if ((await wizard.count()) > 0) {
      const filePath = join(
        project.root,
        "informe",
        "capturas-web",
        "componentes",
        `${route.label}-${viewport.id}-cotizador-paso-inicial.png`
      )

      await wizard.screenshot({
        path: filePath,
        animations: "disabled",
        caret: "hide",
      })

      componentCaptures.push({
        type: "component",
        component: "quote-wizard",
        route: route.path,
        viewport: viewport.id,
        file: toRelative(project, filePath),
      })
    }
  }

  manifest.push(...componentCaptures)
}

const captureRoutes = async (project, browser) => {
  const qaResults = []
  const manifest = []
  const allLinks = []

  for (const viewport of viewports) {
    for (const route of project.routes) {
      await withPage(browser, viewport, async (page) => {
        const consoleErrors = []
        const pageErrors = []

        page.on("console", (message) => {
          if (message.type() === "error") {
            consoleErrors.push(message.text())
          }
        })
        page.on("pageerror", (error) => {
          pageErrors.push(error.message)
        })

        const url = new URL(route.path, project.baseUrl).toString()
        const response = await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout: 45000,
        })

        await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {})
        await page.waitForTimeout(700)

        const fullPagePath = join(
          project.root,
          "informe",
          "capturas-web",
          `${route.label}-${viewport.id}-fullpage.png`
        )

        await page.screenshot({
          path: fullPagePath,
          fullPage: true,
          animations: "disabled",
          caret: "hide",
        })

        manifest.push({
          type: "fullpage",
          route: route.path,
          viewport: viewport.id,
          file: toRelative(project, fullPagePath),
        })

        await captureSections(project, page, route, viewport, manifest)
        await captureComponentIfRelevant(project, page, route, viewport, manifest)

        const metrics = await collectPageMetrics(page)
        allLinks.push(...metrics.links)

        qaResults.push({
          route: route.path,
          viewport: viewport.id,
          status: response?.status() ?? 0,
          title: metrics.title,
          finalUrl: metrics.finalUrl,
          consoleErrors,
          pageErrors,
          hasHorizontalOverflow: metrics.hasHorizontalOverflow,
          brokenImages: metrics.brokenImages,
          formCount: metrics.formCount,
          textIssueCount: metrics.textIssueCount,
          screenshot: toRelative(project, fullPagePath),
        })
      })
    }
  }

  return {
    qaResults,
    manifest,
    allLinks,
  }
}

const testInternalLinks = async (project, allLinks) => {
  const origin = new URL(project.baseUrl).origin
  const unique = new Map()

  for (const link of allLinks) {
    if (!link.href.startsWith(origin)) {
      continue
    }

    const url = new URL(link.href)
    url.hash = ""
    unique.set(url.toString(), link.text)
  }

  const results = []

  for (const [url, text] of unique) {
    const status = await fetchStatus(url)
    results.push({
      url,
      text,
      status: status.status,
      ok: status.status >= 200 && status.status < 400,
      finalUrl: status.url,
      error: status.error,
    })
  }

  return results.sort((a, b) => a.url.localeCompare(b.url))
}

const fillAndSubmitContactForms = async (project, browser) => {
  const route = project.routes.find((item) => item.label === "contacto")

  if (!route) {
    return []
  }

  const results = []

  for (const viewport of viewports) {
    await withPage(browser, viewport, async (page) => {
      await page.goto(new URL(route.path, project.baseUrl).toString(), {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      })
      await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {})
      await page.waitForTimeout(700)

      const form = page.locator("form").first()

      if ((await form.count()) === 0) {
        results.push({
          viewport: viewport.id,
          route: route.path,
          found: false,
        })
        return
      }

      const initialValidity = await form.evaluate((node) => node.checkValidity())

      const inputs = form.locator("input")
      const inputCount = await inputs.count()

      for (let index = 0; index < inputCount; index += 1) {
        const input = inputs.nth(index)
        const type = (await input.getAttribute("type")) ?? "text"

        if (type === "hidden" || type === "checkbox" || type === "radio") {
          continue
        }

        const value = type === "email" ? "qa@empresa.com" : "+593981371278"
        await input.fill(index === 0 ? "QA Cliente" : value)
      }

      const textareas = form.locator("textarea")
      const textareaCount = await textareas.count()

      for (let index = 0; index < textareaCount; index += 1) {
        await textareas.nth(index).fill("Solicitud QA para validar el formulario.")
      }

      const selects = form.locator("select")
      const selectCount = await selects.count()

      for (let index = 0; index < selectCount; index += 1) {
        await selects.nth(index).selectOption({ index: 0 }).catch(() => {})
      }

      const finalValidity = await form.evaluate((node) => node.checkValidity())
      await form.locator('button[type="submit"], input[type="submit"]').first().click()
      await page.waitForTimeout(900)

      const openedUrls = await page.evaluate(() => window.__openedUrls ?? [])

      results.push({
        viewport: viewport.id,
        route: route.path,
        found: true,
        initialValidity,
        finalValidity,
        openedUrls,
      })
    })
  }

  return results
}

const runChatApiChecks = async (project) => {
  const endpoint = new URL("/api/chatbot/message", project.baseUrl).toString()
  const cases = [
    { id: "saludo", message: "hola" },
    { id: "servicios", message: project.id === "nexus-corp" ? "creditos de vivienda" : "ingenieria electrica" },
    { id: "contacto", message: project.id === "nexus-corp" ? "hablar con un asesor" : "hablar con un especialista" },
    { id: "fallback", message: "pregunta no clara sin contexto suficiente" },
  ]

  const results = []

  for (const item of cases) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: item.message }),
      })
      const payload = await response.json().catch(() => null)

      results.push({
        id: item.id,
        status: response.status,
        ok: response.ok,
        intent: payload?.intent,
        hasReply: typeof payload?.reply === "string" && payload.reply.length > 0,
        suggestions: Array.isArray(payload?.suggestions) ? payload.suggestions : [],
      })
    } catch (error) {
      results.push({
        id: item.id,
        status: 0,
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  return results
}

const clickByAria = async (page, label) => {
  await page.locator(`button[aria-label="${label}"]`).first().click()
}

const captureChatbotFlow = async (project, browser) => {
  const results = []
  const manifest = []

  for (const viewport of viewports) {
    await withPage(browser, viewport, async (page, context) => {
      await context.route("**/api/chatbot/message**", async (route) => {
        await sleep(900)
        await route.continue()
      })

      const consoleErrors = []
      page.on("console", (message) => {
        if (message.type() === "error") {
          consoleErrors.push(message.text())
        }
      })

      await page.goto(new URL(project.chatbot.homePath, project.baseUrl).toString(), {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      })
      await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {})
      await page.waitForTimeout(700)

      const baseDir = join(
        project.root,
        "informe",
        "capturas-chatbot",
        viewport.id
      )

      const capture = async (step, name) => {
        const filePath = join(baseDir, `${step}-${name}.png`)
        await page.screenshot({
          path: filePath,
          fullPage: false,
          animations: "disabled",
          caret: "hide",
        })
        manifest.push({
          viewport: viewport.id,
          step,
          name,
          file: toRelative(project, filePath),
        })
      }

      await capture("00", "launcher-cerrado")
      await clickByAria(page, project.chatbot.launcherLabel)
      await page.locator(project.chatbot.inputSelector).waitFor({ timeout: 10000 })
      await capture("01", "bienvenida-opciones")

      const sendMessage = async (message, id, index) => {
        await page.locator(project.chatbot.inputSelector).fill(message)
        await page.locator(`button[aria-label="${project.chatbot.sendLabel}"]`).click()

        if (index === 0) {
          await page.getByText("Escribiendo...").waitFor({ timeout: 1200 }).catch(() => {})
          await capture("02", "estado-cargando")
        }

        await page.waitForFunction(
          () => !document.body.innerText.includes("Escribiendo..."),
          null,
          { timeout: 12000 }
        ).catch(() => {})
        await page.waitForTimeout(500)
        await capture(String(index + 3).padStart(2, "0"), `respuesta-${id}`)
      }

      for (const [index, message] of project.chatbot.messages.entries()) {
        await sendMessage(message.text, message.id, index)
      }

      const whatsappLink = page.getByText(project.chatbot.whatsappText).last()
      const whatsappHref =
        (await whatsappLink.getAttribute("href").catch(() => null)) ?? ""

      await capture("07", "whatsapp-redireccion")

      results.push({
        viewport: viewport.id,
        route: project.chatbot.homePath,
        consoleErrors,
        whatsappHref,
        messagesTested: project.chatbot.messages.map((item) => item.id),
      })
    })
  }

  if (project.id === "idec-web-info") {
    await withPage(browser, viewports[0], async (page, context) => {
      await context.route("**/api/chatbot/message**", async (route) => {
        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({
            error: "No pude procesar tu mensaje en este momento.",
          }),
        })
      })

      await page.goto(new URL(project.chatbot.homePath, project.baseUrl).toString(), {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      })
      await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {})
      await clickByAria(page, project.chatbot.launcherLabel)
      await page.locator(project.chatbot.inputSelector).waitFor({ timeout: 10000 })
      await page.locator(project.chatbot.inputSelector).fill("simular error")
      await page.locator(`button[aria-label="${project.chatbot.sendLabel}"]`).click()
      await page.waitForTimeout(800)

      const filePath = join(
        project.root,
        "informe",
        "capturas-chatbot",
        "desktop",
        "08-error-api.png"
      )

      await page.screenshot({
        path: filePath,
        fullPage: false,
        animations: "disabled",
        caret: "hide",
      })

      manifest.push({
        viewport: "desktop",
        step: "08",
        name: "error-api",
        file: toRelative(project, filePath),
      })
    })
  }

  return {
    results,
    manifest,
  }
}

const summarizeProject = (project, data) => {
  const routeFailures = data.routeQa.filter(
    (item) =>
      item.status < 200 ||
      item.status >= 400 ||
      item.consoleErrors.length > 0 ||
      item.pageErrors.length > 0 ||
      item.hasHorizontalOverflow ||
      item.brokenImages.length > 0 ||
      item.textIssueCount > 0
  )
  const brokenLinks = data.linkQa.filter((item) => !item.ok)
  const apiFailures = data.chatApiQa.filter((item) => !item.ok || !item.hasReply)

  return {
    project: project.name,
    reviewedAt: new Date().toISOString(),
    routeCount: project.routes.length,
    screenshots: data.manifest.length + data.chatbotManifest.length,
    routeFailures,
    brokenLinks,
    apiFailures,
    contactFormIssues: data.formQa.filter((item) => item.found === false),
    status:
      routeFailures.length === 0 &&
      brokenLinks.length === 0 &&
      apiFailures.length === 0
        ? "passed"
        : "review",
  }
}

const main = async () => {
  for (const project of projects) {
    await ensureProjectDirs(project)
  }

  const serverResults = []

  for (const project of projects) {
    const server = await startServerIfNeeded(project)
    serverResults.push({
      project: project.id,
      baseUrl: project.baseUrl,
      started: server.started,
      status: server.status,
    })
  }

  const browser = await chromium.launch({ headless: true })

  try {
    for (const project of projects) {
      const routeData = await captureRoutes(project, browser)
      const linkQa = await testInternalLinks(project, routeData.allLinks)
      const formQa = await fillAndSubmitContactForms(project, browser)
      const chatApiQa = await runChatApiChecks(project)
      const chatbotData = await captureChatbotFlow(project, browser)

      const data = {
        serverResults: serverResults.filter((item) => item.project === project.id),
        routeQa: routeData.qaResults,
        linkQa,
        formQa,
        chatApiQa,
        chatbotQa: chatbotData.results,
        manifest: routeData.manifest,
        chatbotManifest: chatbotData.manifest,
      }

      const summary = summarizeProject(project, data)

      await writeJson(project, "qa-results.json", data.routeQa)
      await writeJson(project, "link-results.json", data.linkQa)
      await writeJson(project, "form-results.json", data.formQa)
      await writeJson(project, "chatbot-results.json", {
        api: data.chatApiQa,
        visual: data.chatbotQa,
      })
      await writeJson(project, "screenshot-manifest.json", [
        ...data.manifest,
        ...data.chatbotManifest,
      ])
      await writeJson(project, "summary.json", summary)
    }
  } finally {
    await browser.close()
    await cleanupServers()
  }

  for (const project of projects) {
    const summaryPath = join(project.root, "informe", "qa", "summary.json")
    console.log(`${project.name}: ${summaryPath}`)
  }
}

main().catch(async (error) => {
  await cleanupServers()
  console.error(error)
  process.exitCode = 1
})
