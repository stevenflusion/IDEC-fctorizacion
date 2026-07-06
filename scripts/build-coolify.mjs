import { cp, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

await import('./build-static.mjs')

const outDir = resolve('out')
const distDir = resolve('dist')

await rm(distDir, { force: true, recursive: true })
await cp(outDir, distDir, { recursive: true })
