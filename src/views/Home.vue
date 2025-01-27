<template>
Hello world
</template>
<script>
export default {
    mounted() {
        // Sets page title from the route meta
        document.title = this.$route.meta.title;
    }
}
</script>