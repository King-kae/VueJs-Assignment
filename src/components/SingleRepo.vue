<script setup>
defineProps(['repo'])
</script>


<template>
    <div>
        <h1>{{ repo.name }}</h1>
        <p>{{ repo.description }}</p>
        <!-- <p>{{ repo.language }}</p> -->
        <p>{{ repo.stargazers_count }}</p>
        <p>{{ repo.forks_count }}</p>
        <p>{{ repo.open_issues_count }}</p>
    </div>
</template>