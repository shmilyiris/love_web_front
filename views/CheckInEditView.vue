<template>
<div class="card">
    <div class="card-body">
        <form @submit.prevent="postEventById1">
            <div class="mb-3">
                <label for="category" class="form-label">类别</label>
                <input v-model="curEvent.category" type="text" class="form-control" id="category" disabled>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">内容</label>
                <input v-model="curEvent.content" type="text" class="form-control" id="content">
            </div>
            <div class="mb-3">
                <label for="label" class="form-label">标签</label>
                <select name="label" id="label" class="form-select" v-model="curEvent.label">
                    <option value="" selected></option>

                    <option v-if="curEvent.category == '景点'" value="北京">北京</option>
                    <option v-if="curEvent.category == '景点'" value="武汉">武汉</option>

                    <option v-if="curEvent.category == '影视'" value="漫威">漫威</option>
                    <option v-if="curEvent.category == '影视'" value="X战警">X战警</option>
                    <option v-if="curEvent.category == '影视'" value="科幻">科幻</option>
                    <option v-if="curEvent.category == '影视'" value="悬疑">悬疑</option>
                    <option v-if="curEvent.category == '影视'" value="动作">动作</option>
                    <option v-if="curEvent.category == '影视'" value="喜剧">喜剧</option>
                    <option v-if="curEvent.category == '影视'" value="美剧">美剧</option>
                    <option v-if="curEvent.category == '影视'" value="柯南">柯南</option>
                    <option v-if="curEvent.category == '影视'" value="剧情">剧情</option>
                    <option v-if="curEvent.category == '影视'" value="其他">其他</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="info" class="form-label">详细描述</label>
                <textarea v-model="curEvent.info" class="form-control" id="info" placeholder="写点什么吧.."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">完成打卡！</button> 
        </form>
    </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import router from '@/router/index'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'

export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        const eventid = parseInt(route.params.eventid);
        let curEvent = ref('');
        // let content = ref('');
        // let label = ref('');
        // let info = ref('');
        
        onMounted(() => {
            store.dispatch('getEventById', {
                eventid: eventid,
                success(event) {
                    // router.push({'name': 'checkin'});
                    curEvent.value = event;
                },
                error() {

                }
            });
        });

        const postEventById1 = () => {
            // console.log(content.value, label.value, info.value);
            store.dispatch('postEventById', {
                eventid: eventid,
                content: curEvent.value.content,
                label: curEvent.value.label,
                info: curEvent.value.info,
                success() {
                    router.push({'name': 'checkin'});
                },
                error() {

                }
            });
        }
        

        return {
            eventid,
            curEvent,
            postEventById1
        }
    },
}
</script>

<style scoped>
.btn {
    width: 100%;
}
</style>