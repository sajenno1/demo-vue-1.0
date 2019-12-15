
<template>
    <div class="new-view">
        <p @click="hello">a New View </p>
        <button-counter></button-counter>
        <v-btn color="primary" @click="toggleShow">TOGGLE_SHOW<i class="v-icon notranslate fas fa-lock" theam></i></v-btn>
        <div :style="{fontSize: postFontSize + 'em'}">
            <blog-post 
                :title=title 
                :content=content 
                :isShow=isShow
                :fontsize=fontsize
                v-on:enlarge-text = 'postFontSize += $event.wi'>
            </blog-post>
        </div>
        <v-btn @click="fontsize += 1">content enlarge-text</v-btn>

    </div>
</template>


<script>
import mixin_part from '@/mixins/mixin'
import ButtonCounter from '@/components/ButtonCounter'
import BlogPost from "@/components/BlogPost"
export default {
    components: {
        'button-counter': ButtonCounter,
        'blog-post': BlogPost
    },
    mixins: [mixin_part],
    methods: {
        hello() {
            console.log('you are using a method from @/views/NewView')
        }
    },
    data() {
        return {
            title: '标题',
            content: '内容',
            isShow: false,
            fontsize: 20,
            postFontSize: 1
        }
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow;
        }
    }
}
</script>
