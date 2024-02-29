<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold text-green-400">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl text-green-400">Ooooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">GO Home...</button>
    </div>
</template>

<script setup>
        defineProps(['error'])

        const handleClearError= () => clearError({redirect : '/'})
</script>

<style scoped>

</style>