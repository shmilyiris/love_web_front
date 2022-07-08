<template>
<div class="col-3 col-sm-2 col-lg-1">
    <router-link :to="{name: `${linkName}`}">
        <img class="img-fluid img-thumbnail" :src=src>
    </router-link>
</div>
</template>

<script>
export default {
    props: ['linkName', 'src'],
}
</script>

<style scoped>
div {
    display: inline-block;
}

div img {
    border-radius: 50%;
    border: 3px solid black;
}

div:hover {
    transform: scale(1.06);
    transition: 2s;
    cursor: pointer;
}

#image_1 {
    background-color: red;
}
</style>
