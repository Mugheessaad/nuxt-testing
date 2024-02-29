<template>
    <div >
        <div class="grid grid-cols-3 gap-5">
            <div v-for="p in products.products" :key="p.id">
            <!-- <h1>{{ p.id }}</h1> -->
                 <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout : 'products'
    })

    const { data : products } = await useFetch('https://dummyjson.com/products')
</script>

<style  scoped>

</style>