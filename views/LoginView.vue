<template>
    <div class="card shadow-lg">
        <div class="card-body">
            <div class="row justify-content-md-center" v-if="!$store.state.user.is_login">
                <div class="col-3">
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="username" class="form-label">用户名</label>
                            <input v-model="username" type="text" class="form-control" id="username">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">密码</label>
                            <input v-model="password" type="password" class="form-control" id="password">
                        </div>
                        <div class="error-message">{{ error_message }}</div>
                        <button type="submit" class="btn btn-primary">登录</button>
                    </form>
                </div>
            </div>

            <div v-else style="text-align: center;">
                <h2>{{$store.state.user.username}} 你好！</h2>

                <h3 v-if="$store.state.user.is_super" style="color:green">你是超级用户！有权对网站内容修改</h3>
                <h3 v-else style="color:red">你不是超级用户，无法对本网站内容进行修改</h3>

                <button class="btn btn-danger logout-btn" @click="logout">退出登录</button>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import router from '@/router/index'


export default {
    name: "RegisterView",
    setup() {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let error_message = ref('');

        const login = () => {
            store.dispatch("login", {
                username: username.value,
                password: password.value,
                success() {
                    router.push({'name': "home"});
                },
                error() {
                    error_message.value = "用户名或密码错误";
                }
            });
        }

        const logout = () => {
            store.commit('logout');
        }

        return {
            username,
            password,
            error_message,
            login,
            logout,
        }

    },
}
</script>

<style scoped>
.btn {
    width: 100%;
}

.logout-btn {
    width: 30%;
    margin: 20px;
}

.error-message {
  color: red;
}
</style>