import plugin from './plugin'
// @ts-ignore
import { createVueApp } from '../lib/vue.runtime.esm.js'
export function createApp(rootComponent: unknown, rootProps = null) {
  return createVueApp(rootComponent, rootProps).use(plugin)
}
// @ts-ignore
export * from '../lib/vue.runtime.esm.js'
export * from '@dcloudio/uni-vue/src/apiLifecycle'
