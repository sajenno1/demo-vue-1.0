<template>
    <div>
        <h3>{{ title }}</h3>
        <div v-show="isShow" :style="{'fontSize':fontsize+'px'}">{{ content }}</div>
        <v-btn color="primary" @click="$emit('enlarge-text')">enlarge-text</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        'title': String,
        'content': String,
        'isShow': Boolean,
        'fontsize': { type:Number, default: 16 }
    }
}
</script>