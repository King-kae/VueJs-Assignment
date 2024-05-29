<script>
import { computed, defineProps, onMounted, ref } from "vue";
import{ useRouter } from "vue-router"

const props = defineProps(["id", "name"]);

const router = useRouter()

// const id = computed(() => props.id)
const name = computed(() => props.name)

const githubRepo = ref(null)



const getRepo = async (name) => {
    try {
        const repo = await axios.get(`https://api.github.com/repos/${name}`, {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })
        return await repo.json()
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    getRepo(name.value).then((repo) => {
        console.log(repo)
        githubRepo.value = repo.data
    })

})

// getRepo().then((repo) => {
//     console.log(repo)
//     githubRepo.value = repo.data
// })
</script>


<template>
    <section>
        <h1>{{ githubRepo.name }}</h1>
        <p>{{ githubRepo.description }}</p>
        <p>{{ githubRepo.language }}</p>
        <p>{{ githubRepo.stargazers_count }}</p>
        <p>{{ githubRepo.forks_count }}</p>
        <p>{{ githubRepo.open_issues_count }}</p>
    </section>
