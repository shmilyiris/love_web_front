<template>

<section class="container-fluid">
    <div class="row">
        <div v-if="$store.state.photo.imgsArr != null" class="col-md-12" id="container">
            <PhotoItem 
                v-for="image in $store.state.photo.imgsArr" 
                :key="image.id" 
                :image="image" 
                @showPic="showPic" />
        </div>
    </div>
</section>

<ModalItem v-if="$store.state.photo.imgsArr != null" ref="mychild" :image=$store.state.photo.imgsArr[curIdx] />

</template>

<script>
import PhotoItem from '../components/PhotoItem.vue'
import ModalItem from '../components/ModalItem.vue'
import { useStore } from 'vuex'

export default {
    name: 'PhotoAlbumView',
    components: {
        PhotoItem,
        ModalItem,
    },
    methods: {
        showPic(id) {
            this.showing_pic = true;
            this.curIdx = id - 1;
            this.$refs.mychild.showImage();
        },
        hidePic() {
            this.showing_pic = false;
        }
    },
    setup() {
        const store = useStore();
        store.dispatch("getPhoto");

        return {
            curIdx: 0, // 当前展示的图片序号
            showing_pic: false, // 是否正在展示图片
        };
    },
}

</script>

<style scoped>
#container{
    -webkit-column-width:354px; /*Safari and Chrome*/
    -moz-column-width:354px; /*Firefox*/
    -o-column-width:354px; /*Opera*/
    -ms-column-width:354px; /*IE*/
    column-width:354px;
}
#container>div{
    width:354px; /*宽度根据实际情况调节，应与上面一致*/
    overflow:auto; /*防止内容溢出导致布局错位*/
}
</style>