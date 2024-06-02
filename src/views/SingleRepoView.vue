<script setup>
import { computed, onMounted, ref } from "vue";
import{ useRouter } from "vue-router"
import SingleRepo from "@/components/SingleRepo.vue"
import axios from "axios"
import { ArrowLeftCircleIcon } from "@heroicons/vue/20/solid"

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
    <main class="py-5">
        <section v-if="githubRepo">
            <div class="my-10 flex items-center justify-start gap-x-6">      
                <a @click="router.go(-1)" class="rounded-md bg-indigo-600 px-3.5 hover:cursor-pointer flex items-center py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> <ArrowLeftCircleIcon class="h-8 w-auto" />Back to list </a>
            </div>
        <SingleRepo :repo="githubRepo" :class="py-8"/>
    </section>
    </main>
</template>
