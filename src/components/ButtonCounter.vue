<template>
    <v-btn color="red" @click="count++">You click me {{ count }} times.</v-btn>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>