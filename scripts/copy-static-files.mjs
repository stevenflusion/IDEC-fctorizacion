import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const filesToCopy = [
  ['public/.htaccess', 'out/.htaccess'],
]

for (const [source, target] of filesToCopy) {
  const sourcePath = resolve(source)
  const targetPath = resolve(target)

  await mkdir(dirname(targetPath), { recursive: true })
  await copyFile(sourcePath, targetPath)
}
