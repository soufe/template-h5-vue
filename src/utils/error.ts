/**
 * 全局异常处理
 * @param {
 * } error
 * @param {*} vm
 */

function isPromise (ret: any) {
  return (ret && typeof ret.then === 'function' && typeof ret.catch === 'function')
}

const errorHandler = (error: any, vm: any, info: any) => {
  console.error('抛出全局异常')
  console.error(vm)
  console.error(error)
  console.error(info)
}

function registerActionHandle (actions: any) {
  Object.keys(actions).forEach(key => {
    const fn = actions[key]
    actions[key] = function (...args: any) {
      const ret = fn.apply(this, args)
      if (isPromise(ret)) {
        return ret.catch(errorHandler)
      } else { // 默认错误处理
        return ret
      }
    }
  })
}

const registerVuex = (instance: any) => {
  if (instance.$options.store) {
    const actions = instance.$options.store._actions || {}
    if (actions) {
      const tempActions: any = {}
      Object.keys(actions).forEach(key => {
        tempActions[key] = actions[key][0]
      })
      registerActionHandle(tempActions)
    }
  }
}

const registerVue = (instance: any) => {
  if (instance.$options.methods) {
    const actions = instance.$options.methods || {}
    if (actions) {
      registerActionHandle(actions)
    }
  }
}

const GlobalError = {
  install: (Vue: any, options: any) => {
    /**
     * 全局异常处理
     * @param {
     * } error
     * @param {*} vm
     */
    Vue.config.errorHandler = errorHandler
    Vue.mixin({
      beforeCreate () {
        registerVue(this)
        registerVuex(this)
      }
    })
    Vue.prototype.$throw = errorHandler
  }
}

export default GlobalError
