<template>
    <div class="card shadow-lg">
        <div class="card-body">

            <div class="pb-2 to-do-input" v-if="$store.state.user.is_login && $store.state.user.is_super">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2 d-flex flex-row align-items-center to-do-category">
                        <select v-model="category" class="form-select-sm col-md-12" aria-label="Default select example">
                            <option selected value="美食">美食</option>
                            <option value="景点">景点</option>
                            <option value="影视">影视</option>
                        </select>
                    </div>

                    <div class="col-md-8">
                        <input v-model="content" type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                        placeholder="输入事项..">
                        <a href="#!" data-mdb-toggle="tooltip" title="Set due date"></a>    
                    </div>
                    
                    <div class="col-md-2 d-flex flex-row align-items-center">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                添加选项
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <div class="dropdown-item dropdown-item-append" @click="postEvent(false)">添加</div>
                                </li>
                                
                                <li>
                                    <div class="dropdown-item dropdown-item-append-finish" @click="postEvent(true)">添加并完成</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>

                  <div class="error-message">{{ error_message }}</div>
                </div>
              </div>
            </div>

            
            <section class="container-fluid to-do-content">
                <div class="row">

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">美食🍔</div>
                            <div class="card-body" v-if="$store.state.event.events_food.length > 0">
                                <CheckInItem v-for="i in $store.state.event.events_food" :key="i.id" :item=i />                                                               
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">景点🌅</div>
                            <div class="card-body" v-if="$store.state.event.events_view.length > 0">
                                <CheckInItem v-for="i in $store.state.event.events_view" :key="i.id" :item=i />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">影视▶</div>
                            <div class="card-body" v-if="$store.state.event.events_video.length > 0">
                                <CheckInItem v-for="i in $store.state.event.events_video" :key="i.id" :item=i />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
</template>

<script>
import CheckInItem from '../components/CheckInItem'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue';

export default {
    name: 'CheckInView',
    components: {
        CheckInItem,
    },
    setup() {
        const store = useStore();
        let content = ref('');
        let category = ref('');
        let error_message = ref('');

        const postEvent = is_finished => {
            if (category.value) {
                store.dispatch("postEvent", {
                    category: category.value,
                    content: content.value,
                    label: "",
                    is_finished: is_finished,
                    success() {
                        location.reload();
                    },
                    error() {
                        error_message.value = "表单项输入有误"
                    }
                });
            } else {
                error_message.value = "表单项输入有误";
            }
        };

        onMounted(() => {
            store.dispatch("getEvent");
        })

        return {
            category,
            content,
            error_message,
            postEvent,
        };
    }
}
</script>

<style scoped>
.to-do-input {
    margin-bottom: 10px;
}
.dropdown-item:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: rgb(60,60,60);
    color: white;
}
.card-header {
    font-size: 20px;
    font-weight: bold;
}
.error-message {
    color: red;
}
.dropdown-item-append {
    background-color: rgba(27,105,255, 0.8);
    color: white;
}
.dropdown-item-append-finish {
    background-color: rgba(21,115,71, 0.5);
    color: white;
}
</style>