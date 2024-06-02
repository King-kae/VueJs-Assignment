<script setup>
defineProps(['repo'])
</script>


<template>
    <div class="mx-auto flex flex-col justify-center items-center">
        <h1>Name: {{ repo.name }}</h1>
        <p> Description: {{ repo.description }}</p>
        <!-- <p>{{ repo.language }}</p> -->
        <p>Star: {{ repo.stargazers_count }}</p>
        <p>Fork: {{ repo.forks_count }}</p>
        <p>Issues: {{ repo.open_issues_count }}</p>
        <a class="text-indigo-600" :href="repo.html_url">Open in Github</a>

    </div>
</template>