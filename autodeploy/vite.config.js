import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import packageJson from './package.json'

// Get access to git commit hash and build time
const getCommitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch (e) {
    return 'dev-build'
  }
}

const commitHash = getCommitHash()
const buildTime = new Date().toLocaleString()
const appVersion = packageJson.version

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
    __BUILD_TIME__: JSON.stringify(buildTime),
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
  plugins: [react()],
})
