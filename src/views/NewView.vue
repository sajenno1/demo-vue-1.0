
<template>
    <div class="new-view">
        <p @click="hello">a New View </p>
    </div>
</template>


<script>
import mixin_part from '@/mixins/mixin'
export default {
    mixins: [mixin_part],
    methods: {
        hello() {
            console.log('you are using a method from @/views/NewView')
        }
    }
}
</script>
