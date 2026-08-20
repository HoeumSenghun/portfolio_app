import { spawnSync } from 'node:child_process'

/**
 * Amplify / Vercel → next build
 * Cloudflare Workers Builds → OpenNext (creates .open-next for wrangler deploy)
 */
const isCloudflare =
  process.env.CF_PAGES === '1' ||
  process.env.WORKERS_CI === '1' ||
  process.env.CLOUDFLARE === '1' ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA) ||
  Boolean(process.env.WORKERS_CI_COMMIT_SHA) ||
  // Cloudflare Workers Builds image
  process.env.HOME === '/opt/buildhome'

const command = isCloudflare
  ? 'npx opennextjs-cloudflare build'
  : 'npx next build'

console.log(`[build] platform=${isCloudflare ? 'cloudflare' : 'node'} → ${command}`)

const result = spawnSync(command, {
  shell: true,
  stdio: 'inherit',
  env: process.env,
})

process.exit(result.status ?? 1)
