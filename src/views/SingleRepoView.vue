<script setup>
import { computed, onMounted, ref } from "vue";
import{ useRouter } from "vue-router"
import SingleRepo from "@/components/SingleRepo.vue"
import axios from "axios"


const props = defineProps(["id"]);

const router = useRouter()

const id = computed(() => props.id)
// const name = computed(() => props.name)

const githubRepo = ref(null)



const getRepo = async (repo) => {
    try {
        const repoData = await axios.get(`https://api.github.com/repos/King-kae/${repo}`, {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })
        return await repoData
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    getRepo(id.value).then((repo) => {
        console.log(repo.data)
        githubRepo.value = repo.data
    })

})

// getRepo().then((repo) => {
//     console.log(repo)
//     githubRepo.value = repo.data
// })
</script>


<template>
    <section v-if="githubRepo">
        <div>
            <button @click="router.go(-1)">Back to list</button>
            <a :href="githubRepo.html_url">Open in Github</a>
        </div>
      <h1>{{ id }}</h1>
        <!-- <h1>{{ githubRepo.name }}</h1> -->
        <p>{{ githubRepo.language }}</p>
        <SingleRepo :repo="githubRepo" />
    </section>
</template>
