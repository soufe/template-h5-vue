export default function client () {
  interface System {
    isWx: any;
    isAli: any;
    isIos: any;
    isAndroid: any;
  }

  const system: System = {
    isWx: false,
    isAli: false,
    isIos: false,
    isAndroid: false
  }

  const ua = navigator.userAgent
  system.isWx = /MicroMessenger/.test(ua)
  system.isAli = /AlipayClient/.test(ua)
  system.isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  system.isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1

  return {
    system
  }
}
