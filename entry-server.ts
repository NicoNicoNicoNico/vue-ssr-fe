import { createApp } from './src/app'
export function context() {
  const { app } = createApp()
  return app
}