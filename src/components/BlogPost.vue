<template>
    <div>
        <h3>{{ title }}</h3>
        <div v-show="isShow" :style="{'fontSize':fontsize+'px'}">{{ content }}</div>
        <v-btn color="primary" @click="$emit('enlarge-text',{si: 0.1, wi: -0.1})">enlarge-text(son)</v-btn>
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