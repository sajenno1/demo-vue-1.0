// 1. 过滤器使用..(src/utils/filter.js___src/main.js___src/views/About.vue)

// 2. vue异步组件
{
    // a. vue-router配置路由 , 使用vue的异步组件实现按需加载

        /* 
        { 
            path: '/home',
            name: 'Home', 
            component: resolve => require(['@/components/home'],resolve) 
        } 
        */
    // b. webpack 的 require.ensure()   ★★★★★    懒加载，性能优，推荐使用    ★★★★★   

        // vue-router配置路由，使用webpack的require.ensure，也可实现

        // require.ensure（）接受三个参数：

        // 语法: require.ensure(dependencies: String[], callback: function([require]), [chunkName: String]) 

        // dependencies: 依赖的模块数组
        // callback: 回调函数，该函数调用时会传一个require参数
        // chunkName: 模块名，用于构建时生成文件时命名使用
        /*
            { 
                path: '/home',
                name: 'home',
                component: r => require.ensure([], () => r(require('@/components/home')), 'chunk') 
                // r就是resolve
                // 'chunk' 表示包名，相同的 chunk 名 会被打包到一起
            }
        */

    // c. 甚至，可以在加载过程中执行 loading 图

        /*
            {
            path: '/hello',
            name: 'Hello',
            component (r){ 
                console.log('切换')
                // 开始加载 loading
                require.ensure([], (require) => { 
                    r(require('@/components/HelloWorld')) 
                }) 
                console.log('切换完成')
                // 关闭 loading
            }
        */    
}
    
// 3.Mixin 混入...
{
    //作用：复用  
    //遵循就近原则，有冲突使用组件内的数据(方法)

    // mixin.js
    /*
        const mixin = {
            data() {
            return {
                hello: 'hello Mixin'
            }
            },
            created() {
            console.log('在mixin中vue的data、生命周期、方法等都可以使用');
            },
            methods: {
            hello() {
                console.log(this.hello);
            }
            }
        }
        export default mixin;
    */

    // 1. 局部使用 在xxx.vue中
    /*
        
        <script>
        import mixin from '@/mixin/mixin';
        export default {
        mixins: [mixin]
        }
        </script>
    */
    // 2.全局使用 main.js
    /*
        import mixin from '@/mixin/mixin';
        Vue.Mixin(mixin)
    */
}
