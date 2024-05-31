<template>
    <div>
        <h1>Network Error</h1>
        <p>There was an error fetching data from the server. Please try again later.</p>
        <a href="#" @click="$router.go(-1)">Reload</a>
    </div>
</template>