<template>
    <!-- Nothing goes here -->
</template>
<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                required: true
            },
        },
        mounted() {
            document.title = this.title;

        }
    }
</script>
