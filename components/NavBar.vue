<template>
    <div class="navbar-right container">
        <div class="row justify-content-center">
            <NavBarButton linkName="home" src="http://101.35.183.71:5288/static/image/icon/home.png" />
            <div class="col-3 col-sm-2 col-lg-1">
                <img 
                    class="img-fluid img-thumbnail album-button" 
                    src="http://101.35.183.71:5288/static/image/icon/photo.png"
                    @touchstart="gotouchstart" @touchmove="gotouchmove" @touchend="gotouchend"
                    @mousedown="gotouchstart" @mouseleave="gotouchmove" @mouseup="gotouchend"
                >
            </div>
            <NavBarButton linkName="checkin" src="http://101.35.183.71:5288/static/image/icon/notes.png" />
            <NavBarButton linkName="login" src="http://101.35.183.71:5288/static/image/icon/user.png" />
        </div>
    </div>
</template>

<script>
import NavBarButton from './NavBarButton.vue'
import router from '@/router/index'
import { useStore } from 'vuex'

export default {
    name: "NavBar",
    components: {
        NavBarButton,
    },
    methods: {
        gotouchstart() {

            window.isClick = true;
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                if (this.store.state.user.is_login && this.store.state.user.is_super)
                    router.push({'name': 'photo-post'});
                window.isClick = false;
            }, 1000); // 长按两秒触发
        },

        gotouchend() {
            clearTimeout(this.timeOut);

            if (window.isClick) {
                router.push({'name': 'album'});
            }
        },

        gotouchmove() {
            clearTimeout(this.timeOut);
            window.isClick = false;
        }
    },
    // 项目销毁前清除定时器
    beforeUnmount() {
        clearTimeout(this.timeOut)
    },
    setup() {
        const store = useStore();
        return {
            store,
        }
    }
}
</script>

<style scoped>
.navbar-right {
    margin-bottom: 20px;
    padding: 10px;
    text-align: right;
}

.album-button {
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    display: inline-block;
}

.album-button {
    border-radius: 50%;
    border: 3px solid black;
}

.album-button:hover {
    transform: scale(1.06);
    transition: 1.1s;
    cursor: pointer;
}
</style>
