<template>
<div class="col-md-3">
    <div class="card-body">
        <img :src=image.src class="img-fluid img-thumbnail" @click="showImage">
        <div class="card-text">
            <h4 class="caption">{{ image.cap }}❤</h4>
            <p class="text-center">{{ image.info }}</p>
        </div>
    </div>    
</div>
</template>

<script>
export default {
    props: ["image"],
    methods: {
        showImage() {
            // console.log("click Image", this.image.src);
            this.$emit("showPic", this.image.id);
        }
    },
}
</script>

<style scoped>
.card-body {
    background-color: white;
    border-radius: 3%;
    margin-bottom: 10px;
}

.caption {
    text-align: center;
    font-weight: bold;
}

img:hover {
    cursor: pointer;
    box-shadow: 1cm;
}

p {
    margin-top: 5px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: lightsalmon;
}
</style>