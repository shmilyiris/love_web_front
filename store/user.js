import jwt_decode from 'jwt-decode';
import $ from 'jquery'
// import store from '.';

const ModuleUser = {
    state: {
        username: localStorage.getItem('username') == null ? "" : localStorage.getItem('username'),
        is_login: localStorage.getItem('access') == null ? false : true,
        is_super: true,
        id: "",
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh'),
    },
    getters: {
    },
    mutations: {
        updateAccess(state, access) {
            state.access = access;
            state.is_login = true;

            localStorage.setItem('access', state.access);
            console.log("call update Access");
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.access = "";
            state.refresh = "";
            state.is_login = false;

            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('username');
        },
        updateUser(state, user) {
            state.is_login = true;
            state.is_super = true;
            state.id = user.id;
            state.username = user.username;
            state.access = user.access;
            state.refresh = user.refresh;

            localStorage.setItem('access', state.access);
            localStorage.setItem('refresh', state.refresh);
            localStorage.setItem('username', state.username);
        }, 
        confirm_access_valid() {
            // 防止当前令牌过期
            
            let access = localStorage.getItem('access');
            let refresh = localStorage.getItem('refresh');

            $.ajax({
                // getinfo 测试access是否过期
                url: "http://101.35.183.71:5288/johnson_iris/getinfo/",
                type: "GET",
                headers: {
                    'Authorization': "Bearer " + access,
                },
                error() {
                    // 若令牌过期，刷新access
                    $.ajax({
                        url: "http://101.35.183.71:5288/johnson_iris/api/token/refresh/",
                        type: "POST",
                        data: {
                            refresh
                        },
                        success(resp) {
                            // 获取新鲜的access
                            localStorage.setItem('access', resp.access);
                        }
                    });
                }
            });
        }

    },
    actions: {

        login(context, data) {
            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/api/token/",
                type: "post",
                data: {
                    username: data.username,
                    password: data.password,
                },
                // dataType: 'json',
                success(resp) {
                    const {access, refresh} = resp;
                    const access_obj = jwt_decode(access);
                    
                    // refresh token every 5 minutes
                    setInterval(() => {
                        $.ajax({
                            url: "http://101.35.183.71:5288/johnson_iris/api/token/refresh/",
                            type: "post",
                            data: {
                                refresh
                            },
                            success(resp) {
                                context.commit("updateAccess", resp.access);
                            }
                        });
                    }, 4.5 * 60 * 1000);
                    
                    // get info via user_id property
                    $.ajax({
                        url: "http://101.35.183.71:5288/johnson_iris/getinfo/",
                        type: "GET",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        headers: {
                            'Authorization': "Bearer " + access,
                        },
                        success(resp) {
                            context.commit("updateUser",{
                                ...resp,
                                access: access, 
                                refresh: refresh,
                            });
                            data.success();
                        },
                    });
                },
                error() {
                    data.error();
                }
            });
        },
    },
    modules: {

    },
}

export default ModuleUser;