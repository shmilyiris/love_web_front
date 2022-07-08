<template>
<div class="card">
    <div class="card-body">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <form @submit.prevent="submitPhoto">
                    <h2 style="text-align:center">上传照片</h2>

                    <div class="mb-3">
                        <label for="cap" class="form-label">照片标题</label>
                        <input v-model="cap" type="text" class="form-control" id="cap">
                    </div>

                    <div class="mb-3">
                        <label for="info" class="form-label">描述内容</label>
                        <textarea v-model="info" type="text" class="form-control" id="info"></textarea>
                    </div>

                    <div class="mb-3">
                        <div id="img-output-div">
                            <img src="" id="img-output" class="img-responsive center-block">
                        </div>
                        <label for="img" class="btn btn-info">选择照片</label>
                        <input @change="onFileChange" type="file" class="form-control-file" id="img" style="display:none">
                    </div>

                    <button type="submit" class="btn btn-success">提交</button>
                </form>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import router from '@/router/index'

export default {
    name: "PhotoPostView",
    methods: {
        createImage(file) {
            let reader = new FileReader();

            reader.readAsDataURL(file);
            let img_output = document.getElementById('img-output');
            reader.onload = e => {
                img_output.setAttribute('src',  e.target.result);
            }
        }, 
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
            this.formData.append('img', files[0]);
        },
    },
    setup() {
        const store = useStore();
        let cap = ref('');
        let info = ref('');
        let formData = new FormData();

        const submitPhoto = () => {
            formData.append('cap', cap.value);
            formData.append('info', info.value);
            store.dispatch("postPhoto", {
                formData: formData,
                access: store.state.user.access,
                success() {
                    router.push({"name": "album"});
                },
                error() {
                }
            });
        }

        return {
            cap,
            info,
            formData,
            submitPhoto,
        }

    },
}
</script>


<style scoped>
#img-output-div {
    text-align: center;
    padding: 5px;
}

#img-output {
    max-height: 200px;
}
.btn {
    width: 100%;
}
</style>