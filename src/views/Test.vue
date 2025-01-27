<template>Test Page</template>
<script>
export default {
    mounted() {
        document.title = this.$route.meta.title;
    }
}
</script>