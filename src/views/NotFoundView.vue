<script setup>
// import { defineProps } from "vue"


defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>

<template>
    <h1>404</h1>
    <h3>The {{ resource }} cannot be found</h3>
    <router-link :to="{ name: 'home'}">Go back to home page</router-link>
</template>