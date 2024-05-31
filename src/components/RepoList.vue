<script setup>
    // import { defineProps} from "vue"
    defineProps({
        repos: {
            type: Array,
            required: true,
            default() {
                return []
            }
        }
    })
</script>


<template>
    <section>
        <h1>My Repositories</h1>
        <ul>
            <li v-for="repo in repos" :key="repo.id">
                <router-link
                    :to="{ name: 'SingleRepoView', params: { id: repo.name, name: repo.owner.login } }"
                >
                    {{ repo.name }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<style scoped>

</style>