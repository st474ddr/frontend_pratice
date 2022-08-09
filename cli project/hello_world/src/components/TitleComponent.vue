<template>
    <h1>{{ compTitle }}</h1>
</template>

<script>
export default {
    name: 'titleComponent',
    props: {
        compTitle: {
            type: String,
            requried: true,
            default: 'Hello World'
        }
    }
    // data() {
    //     return {
    //         title: 'Hello Vue!'
    //     }
    // }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>