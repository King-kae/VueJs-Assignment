<script setup>
import axios from 'axios'
import Pagination from './RepoPagination.vue'
import RepoList from './RepoList.vue'
import { ref, onMounted, reactive, computed, watchEffect } from 'vue'
import { parseLinkHeader, extractPageNumber } from '@/stores/index'

const githubRepos = reactive({
  repos: [],
  links: null,
  totalPages: 0,
  currentPage: 1
})

const props = defineProps(['page'])

const page = computed(() => props.page)

const hasHextPage = computed(() => {
  const totalPages = githubRepos.totalPages
  return page.value < totalPages
})

console.log(githubRepos.totalPages)

const getRepos = async (options = {}) => {
  try {
    const repos = await axios.get('https://api.github.com/users/King-kae/repos', {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 6,
        ...options
      }
    })
    return await repos
  } catch (err) {
    console.log(err)
  }
}

// const reposPerPage = 6
// const indexOfFirstRepo = (page - 1) * reposPerPage;
// const indexOfLastRepo = page * reposPerPage;
// const pageLength = Math.ceil(repos.length / reposPerPage);

// const props = defineProps(['page'])



function fetchRepos(page) {
  getRepos({ page:page.value }).then((repos) => {
    console.log(page.value)
    githubRepos.repos = repos.data
    githubRepos.links = repos.headers.link
    // githubRepos.currentPage = page
  })
}

onMounted(() => {
  watchEffect(() => {
    getRepos({ page: page.value }).then((repos) => {
    console.log(page.value)

    // console.log(repos.headers.link)
    const parsedLink = parseLinkHeader(repos.headers.link)
    githubRepos.totalPages = extractPageNumber(parsedLink?.last || page)
    githubRepos.repos = repos.data
    githubRepos.link = repos.headers.link
  })
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
        <p v-if="!githubRepos">Loading...</p>
        <div v-if="githubRepos.repos">
          <!-- <h1>{{ githubRepos.username }}</h1> -->
          <!-- <img :src="githubRepos.avatar_url" alt="" /> -->
        </div>
        <a href="" class="mt-4 text-blue-500">Learn more</a>
        <RepoList :repos="githubRepos.repos" :totalPages="githubRepos.totalPages" />
        <div class="pagination">
          <router-link
            id="page-prev"
            :to="{ name: 'repos', 
            query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
          >
            &#60;&#60;
          </router-link>

          <router-link
            id="page-next"
            :to="{ name: 'repos', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
          >
            &#60;&#60;
          </router-link>
          <Pagination :totalPages="githubRepos.totalPages" @fetchRepo="(n) => fetchRepos(n)" />

        </div>
      </div>
    </div>
  </section>
</template>
