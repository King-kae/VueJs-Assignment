<script setup>
    // import { defineProps} from "vue"
    defineProps({
        displayData: {
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
        <div class="col-md-4" v-for="post in displayData" v-bind:key="post.name">
            <div class="card mb-4 box-shadow post-cards">
              <div class="card-body">
                <p class="card-text">
                  <router-link
                    :to="{ name: 'SingleRepoView', params: { id: post.name, name: post.owner.login } }"
                  >
                  {{ post.name }}
                    
                  </router-link>
              </p>
              </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>