<template>

<!-- 弹窗 -->
<div id="myModal" class="myModal">
    <span class="close" @click="hideImage">&times;</span>

    
    <img class="modalContent" id="curimg" :src=image.src>

    <div id="caption">
        {{ image.cap }}❤
    </div>
    <div id="text-content">{{ image.info }}</div>
</div>

</template>

<script>
export default {
    props: ["image"],
    methods: {
        showImage() {
            document.getElementById('myModal').style.display='block';
        },

        hideImage() {
            document.getElementById('myModal').style.display='none';
            this.$emit('hideImage');
        }
    },
    created() {
    }
}
</script>

<style scoped>
/* 弹窗背景 */
.myModal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 80px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}
 
/* 图片 */
.modalContent {
    margin: auto;
    display: block;
    width: auto;
    height: 70%;
    max-width: 700px;
}
 
/* 文本内容 */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
}

#text-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: lightpink;
    font-size: 15px;
    padding: 10px 0;
}
 
/* 添加动画 */
.modalContent, #caption, #text-content { 
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}
 
@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
}
 
@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}
 
/* 关闭按钮 */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}
 
.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}
 
/* 小屏幕中图片宽度为 100% */
@media only screen and (max-width: 700px){
    .modalContent {
        width: 100%;
    }
}
</style>

