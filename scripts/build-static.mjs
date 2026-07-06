import { spawnSync } from 'node:child_process'

const run = (command, args, env = {}) => {
  const result = spawnSync(command, args, {
    env: {
      ...process.env,
      ...env,
    },
    shell: process.platform === 'win32',
    stdio: 'inherit',
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

const nextBin =
  process.platform === 'win32'
    ? 'node_modules\\.bin\\next.cmd'
    : 'node_modules/.bin/next'

run(nextBin, ['build'], { BUILD_TARGET: 'static', NEXT_OUTPUT: 'export' })
run('node', ['scripts/copy-static-files.mjs'])
