import $ from 'jquery'
import jwt_decode from 'jwt-decode'

const ModulePhoto = {
    state: {
        imgsArr: null,
    },
    getters: {},
    mutations: {
        updatePhotos(state, photos) {
            state.imgsArr = photos;
        }
    },
    actions: {
        postPhoto(context, data) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");

            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/photo/photo-view/",
                type: "POST",
                data: data.formData,
                headers: {
                    'Authorization': "Bearer " + access,
                },
                processData: false,
                contentType: false,
                success(resp) {
                    if (resp.result == 'success') data.success();
                    else data.error();
                },
                error() {
                    data.error();
                }
            });
        },

        getPhoto(context) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");

            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/photo/photo-view/",
                type: "GET",
                data: {
                    user_id: jwt_decode(access).user_id,
                },
                headers: {
                    'Authorization': "Bearer " + access,
                },
                success(resp) {
                    context.commit('updatePhotos', JSON.parse(resp.photos));   
                },
                error() {
                    
                }
            });


            
        }
    },
}

export default ModulePhoto;