// 1. 过滤器使用...("@/utils/filter.js","@/main.js","@/views/About.vue")

// 2. vue异步组件...("@/router.js")
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
    
// 3. Mixin 混入...("@/mixins/mixin.js","@/views/NewView.vue")
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

// 4. this.$nextTick(callback) 
//      解决为了在数据变化之后等待 Vue 完成更新 DOM。可以在数据变化之后立即使用 Vue.nextTick(callback)。
//      这样回调函数将在 DOM 更新完成后被调用。
{
    /*
        Vue.component('example', {
        template: '<span>{{ message }}</span>',
        data: function () {
            return {
            message: '未更新'
            }
        },
        methods: {
            updateMessage: function () {
            this.message = '已更新'
            console.log(this.$el.textContent) // => '未更新'
            this.$nextTick(function () {
                console.log(this.$el.textContent) // => '已更新'
            })
            }
        }
        })
    */
}

// 5. Components props类型检测...("@/components/BlogPost.vue","@/views/NewView.vue")
{
    // 组件通信..父监听子触发的事件.   
    // 父： v-on:事件名="...[$evnet]"  子：v-on:click="$emit('事件名' [, 参数])"
    // 1).
    //  父组件 监听子组件触发的事件 event-name ("enlarge-text")
    {
        /*
            <blog-post
            ...
            v-on:enlarge-text="postFontSize += 0.1"
            ></blog-post>
        */
        // 子组件通过调用内建的 $emit 方法 并传入事件名称来触发一个事件 event-name ("enlarge-text")
        /*
            <button v-on:click="$emit('enlarge-text')">
                Enlarge text
            </button>
        */
        // 
        // 有了这个 v-on:enlarge-text="postFontSize += 0.1" 监听器，父级组件就会接收该事件并更新 postFontSize 的值。
    }
    // 2).
    // 使用事件抛出一个值
    {
        // 可以使用 $emit 的第二个参数来提供这个值
        /*
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge text
            </button>
        */
       // 父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值
       /*
            <blog-post
            ...
            v-on:enlarge-text="postFontSize += $event"
            ></blog-post>
       */
       // 或者，如果这个事件处理函数是一个方法，那么这个值将会作为第一个参数传入这个方法
    }
}

// 6. .env 根据环境读取变量配置
{
    // npm run serve 默认会使用.env.dev文件 (.env.development)
    // npm run build:dev 默认会使用.env.dev文件 (.env.development)
    // npm run build:test 默认会使用.env.test文件 (.env.test)
    // npm run build:prod 默认会使用.env.prod文件 (.env.production)
    // 变量命名格式: VUE_APP_NAME  VUE_APP_是规定的命名格式,NAME是自定义的名, 例:VUE_APP_URL=http://api.com
    // 通过:process.env.variableName获取环境变量
    /*
        data():{
            return{
                url:process.env.VUE_APP_URL
            }
        }
    */
    

}

// 7. vuex 状态管理 ---- 数据驱动, 数据发生改变 通知并且更新view ("@/store/*","@/main.js")
{
    // 使用前提- 大型项目, 否则显得繁琐冗余
    // 在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex:
    // △注: vuex 依赖于 promise 不支持IE..
    /*  
        @/store/index.js:
        import Vue from 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
        ...
        @/main.js:
        import store from '@/store'
        ...

        new Vue({
            ...
            store,
            ...
        })
    */
    /*
        @/store/index.js:
        // 状态
        const state = {
            count: 0
        }
        // 行为
        const actions = {
            increment ({ commit }) {
                commit( 'increment' )
            }
        }
        // 改变
        const mutations = {
            'increment' (state) {
                state.count++
            }
        }
        // 导出
        export default new Vuex.Store({
            state,
            actions,
            mutations
        })
    */ 
    // 提交载荷（Payload）
    // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
    /*
        // 行为
        const actions = {
            increment ({ commit }, playload) {
                commit( 'increment', playload )
            }
        }
        // 改变
        const mutations = {
            'increment' (state, playload) {
                state.count += playload
            }
        }
    */
    // ...

}