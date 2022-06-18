<template>
    <div class="navbar-right container">
        <div class="row justify-content-center">
            <NavBarButton linkName="home" src="http://101.35.183.71:5288/static/image/icon/home.png" />
            <NavBarButton linkName="album" src="http://101.35.183.71:5288/static/image/icon/photo.png" />
            <NavBarButton linkName="checkin" src="http://101.35.183.71:5288/static/image/icon/notes.png" />
            <NavBarButton linkName="404" src="http://101.35.183.71:5288/static/image/icon/user.png" />
        </div>
    </div>
</template>

<script>
import NavBarButton from './NavBarButton.vue'

export default {
    name: "NavBar",
    components: {
        NavBarButton,
    },
    setup() {
    }
}
</script>

<style scoped>
.navbar-right {
    margin-bottom: 20px;
    padding: 10px;
    text-align: right;
}
</style>
