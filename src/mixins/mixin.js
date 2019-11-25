const mixin = {
    data() {
        return {
            msg: 'hello here is Mixin',
            msg2: 'you are using a method from @/mixins/mixin.js'
        }
    },
    created() {
        console.log(this.msg)
    },
    methods:{
        hello() {
            console.log(this.msg2)
        }
    }
}

export default mixin;