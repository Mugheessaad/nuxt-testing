<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.images[0]" alt="" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7"> {{ product.title }}</h2>
                <p class="text-xl font-bold my-7 text-green-500" >Price - $ {{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description : </h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex justify-between ">
                    <i class="material-icons w-1/2">ad_shopping_cart</i>
                    <p class="ms-3 me-16 w-1/2">Add to cart</p>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])

</script>

<style  scoped>
    img{
        max-width: 400px;
    }
</style>