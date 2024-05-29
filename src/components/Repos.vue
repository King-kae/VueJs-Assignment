<script setup>
import axios from 'axios'
import RepoList from './RepoList.vue'
import { ref, onMounted, reactive, computed } from 'vue'
// import {getRepos} from "../utils/api";
const githubRepos = reactive({
    repos: [],
    totalPages: 0,
    curreentPage: 1
})

// const props = defineProps(['page'])

const page = computed(() => props.page)


const getRepos = async () => {
    try {
        const repos = await axios.get('https://api.github.com/users/King-kae/repos', {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })
        return await repos
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    getRepos().then((repos) => {
        console.log(repos)
        githubRepos.repos = repos.data
    })
})


</script>

<template>
    <section class="container mx-auto py-12">
        <h2 class="text-3xl font-bold text-center">Popular Repositories</h2>
        <div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h3 class="text-xl font-bold">Vue</h3>
                <p class="mt-4">
                    Vue.js is a progressive JavaScript framework for building user interfaces. It is designed
                    from the ground up to be incrementally adoptable.
                </p>
                <!-- <p>{{ githubRepos }}</p> -->
                <a href="" class="mt-4 text-blue-500">Learn more</a>
                <RepoList :repos="githubRepos.repos" />
            </div>
        </div>
    </section>
</template>
