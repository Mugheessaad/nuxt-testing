<template>
    <ProductDetails :product = "product"/> 
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://dummyjson.com/products/' + id ;
    
    const {data : product } = await useFetch(uri);

    if(!product.value){
        throw createError({statusCode: 69 , statusMessage : 'You Phuckin Idiot' , fatal : true})
    }

    definePageMeta({
        layout : 'products'
    })
</script>

<style scoped>

</style>