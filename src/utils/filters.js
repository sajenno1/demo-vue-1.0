// 公共过滤器...  
// 1.导入Vue.. 
// 2.写过滤器 
// 3.导出: 到main.js  import filters from './util/filters'
import Vue from 'vue'
/**
 * 首字母大写
 */
Vue.filter('capitalize',val => {
    if (!val) return ''
    val = val.toString()
    return val.charAt(0).toUpperCase() + val.slice(1)
})

/**
 * 尾字母大写
 */
Vue.filter('tail-capitalize',val => {
    if (!val) return ''
    val = val.toString()
    return val.slice(0, val.length-1) + val.charAt(val.length-1).toUpperCase()
})

