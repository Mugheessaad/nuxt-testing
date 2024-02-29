<template>
    <div class="card text-center">
        <img :src="product.thumbnail" alt="image" class="thumb">
        <p class="font-bold text-gay-500 n-4">{{ product.title }}</p>
        <p class="n-4 truncate">{{ product.description }}</p>
        <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">Show Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
        const { product } = defineProps(['product'])
</script>

<style  scoped>
    .thumb{
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>