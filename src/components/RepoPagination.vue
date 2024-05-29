<script setup>
    import { range } from "@utils/index.js"
    import { defineProps } from "vue"

    defineProps({
        totalPages: {
            type: Number,
            required: true,
            default: 0
        }
    })
</script>


<template>
    <section>
        <!-- <ul>
            <li v-for="page in range(1, totalPages)" :key="page">
                <router-link
                    :to="{ name: 'Repos', query: { page } }"
                >
                    {{ page }}
                </router-link>
            </li>
        </ul> -->

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="page in range(1, totalPages + 1)" :key="page">
                    <button @click="$emit(getRepo, page)">{{ page }}</button>
                </li>
            </ul>
        </nav>
    </section>
            
</template>