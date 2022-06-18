<template>
    <div class="card shadow-lg">
        <div class="card-body">

            <div class="pb-2 to-do-input">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-1 d-flex flex-row align-items-center to-do-category">
                        <select class="form-select-sm col-md-12" aria-label="Default select example">
                            <option selected value="1">美食</option>
                            <option value="2">景点</option>
                            <option value="3">影视</option>
                        </select>
                    </div>

                    <div class="col-md-10">
                        <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                        placeholder="输入事项..">
                        <a href="#!" data-mdb-toggle="tooltip" title="Set due date"></a>
                    </div>
                    
                    <div class="col-md-1 d-flex flex-row align-items-center">
                      <button type="button" class="btn btn-primary">添加</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <section class="container-fluid to-do-content">
                <div class="row">

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">美食🍔</div>
                            <div class="card-body">
                                <CheckInItem  v-for="i in formItems_food" :key="i.id" :item=i />                                                               
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">景点🌅</div>
                            <div class="card-body">
                                <CheckInItem v-for="i in formItems_place" :key="i.id" :item=i />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header text-center">影视▶</div>
                            <div class="card-body">
                                <CheckInItem v-for="i in formItems_video" :key="i.id" :item=i />
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
export default {
    name: 'CheckInView',
    components: {
        CheckInItem,
    },
    data() {
        return {
            formItems_food: [
                {
                    id: 0,
                    category: "美食",
                    content: "黄蜀郎鸡公煲",
                    finished: true,
                    info: "",
                },
                {
                    id: 1,
                    category: "美食",
                    content: "舌尖大师铁板锅",
                    finished: true,
                    info: "",
                },
                {
                    id: 2,
                    category: "美食",
                    content: "胖哥俩肉蟹煲",
                    finished: true,
                    info: "",
                },
                {
                    id: 3,
                    category: "美食",
                    content: "谭小嗨牛骨头",
                    finished: true,
                    info: "",
                },
                {
                    id: 4,
                    category: "美食",
                    content: "森燊记烤鱼",
                    finished: true,
                    info: "",
                },
                {
                    id: 5,
                    category: "美食",
                    content: "鱼友烤全鱼",
                    finished: true,
                    info: "",
                },
                {
                    id: 6,
                    category: "美食",
                    content: "菲可牛排(火车头)",
                    finished: true,
                    info: "",
                },
                {
                    id: 7,
                    category: "美食",
                    content: "爱丽丝牛排",
                    finished: true,
                    info: "",
                },
                {
                    id: 8,
                    category: "美食",
                    content: "蒂凡尼牛排",
                    finished: true,
                    info: "",
                },
                {
                    id: 9,
                    category: "美食",
                    content: "维多利亚的格调",
                    finished: true,
                    info: "",
                },
                {
                    id: 10,
                    category: "美食",
                    content: "詹姆士分米鸡",
                    finished: true,
                    info: "",
                },
                {
                    id: 11,
                    category: "美食",
                    content: "中山公园旁边的新疆餐厅",
                    finished: true,
                    info: "",
                },
                {
                    id: 12,
                    category: "美食",
                    content: "伊犁餐厅",
                    finished: true,
                    info: "",
                },
                {
                    id: 13,
                    category: "美食",
                    content: "牛爸爸牛腩煲",
                    finished: true,
                    info: "",
                },
                {
                    id: 14,
                    category: "美食",
                    content: "筒骨藕汤",
                    finished: true,
                    info: "",
                },
                {
                    id: 15,
                    category: "美食",
                    content: "新疆炒米粉",
                    finished: true,
                    info: "",
                },
                {
                    id: 16,
                    category: "美食",
                    content: "成都串串火锅",
                    finished: true,
                    info: "",
                },
                {
                    id: 17,
                    category: "美食",
                    content: "金滏山自助",
                    finished: true,
                    info: "",
                },
                {
                    id: 18,
                    category: "美食",
                    content: "爱辣啵啵鱼",
                    finished: true,
                    info: "",
                },
                {
                    id: 19,
                    category: "美食",
                    content: "围炉自助",
                    finished: true,
                    info: "",
                },
                {
                    id: 20,
                    category: "美食",
                    content: "乐乐龙虾馆",
                    finished: true,
                    info: "",
                },
                {
                    id: 21,
                    category: "美食",
                    content: "外婆家",
                    finished: false,
                    info: "",
                },
            ],
            formItems_place: [
                {
                    id: 0,
                    category: "景点",
                    label: "武汉",
                    content: "欢乐谷",
                    finished: true,
                    info: "",
                },
                {
                    id: 1,
                    category: "景点",
                    label: "武汉",
                    content: "中山公园",
                    finished: true,
                    info: "",
                },
                {
                    id: 2,
                    category: "景点",
                    label: "武汉",
                    content: "东湖绿道",
                    finished: true,
                    info: "",
                },
                {
                    id: 3,
                    category: "景点",
                    label: "武汉",
                    content: "长江大桥轮渡",
                    finished: true,
                    info: "",
                },
                {
                    id: 4,
                    category: "景点",
                    label: "武汉",
                    content: "户部巷",
                    finished: true,
                    info: "",
                },
                {
                    id: 5,
                    category: "景点",
                    label: "武汉",
                    content: "玛雅海滩",
                    finished: false,
                    info: "",
                },
                {
                    id: 6,
                    category: "景点",
                    label: "武汉",
                    content: "武汉大学樱花展",
                    finished: true,
                    info: "",
                },
                {
                    id: 7,
                    category: "景点",
                    label: "北京",
                    content: "颐和园",
                    finished: false,
                    info: "",
                },
                {
                    id: 8,
                    category: "景点",
                    label: "北京",
                    content: "故宫",
                    finished: false,
                    info: "",
                },
                {
                    id: 9,
                    category: "景点",
                    label: "北京",
                    content: "圆明园",
                    finished: false,
                    info: "",
                },
                {
                    id: 10,
                    category: "景点",
                    label: "北京",
                    content: "北海公园",
                    finished: false,
                    info: "",
                },
                {
                    id: 11,
                    category: "景点",
                    label: "北京",
                    content: "后海,什刹海",
                    finished: false,
                    info: "",
                },
                {
                    id: 12,
                    category: "景点",
                    label: "北京",
                    content: "西城区胡同群",
                    finished: false,
                    info: "",
                },
                {
                    id: 13,
                    category: "景点",
                    label: "武汉",
                    content: "江汉路步行街",
                    finished: false,
                    info: "",
                },
                {
                    id: 14,
                    category: "景点",
                    label: "武汉",
                    content: "德意风情街、西班牙风情街",
                    finished: true,
                    info: "",
                },
                {
                    id: 15,
                    category: "景点",
                    label: "武汉",
                    content: "光谷步行街、世界城",
                    finished: true,
                    info: "",
                },
            ],
            formItems_video: [
                {
                    id: 0,
                    category: "影视",
                    content: "疑犯追踪第1、2季",
                    label: "美剧",
                    finished: true,
                    info: "",
                },
                {
                    id: 1,
                    category: "影视",
                    label: "漫威",
                    content: "钢铁侠1、2、3",
                    finished: true,
                    info: "",
                },
                {
                    id: 2,
                    category: "影视",
                    label: "漫威",
                    content: "美国队长1、2、3",
                    finished: true,
                    info: "",
                },
                {
                    id: 3,
                    category: "影视",
                    label: "漫威",
                    content: "漫威蜘蛛侠1、2、3",
                    finished: true,
                    info: "",
                },
                {
                    id: 4,
                    category: "影视",
                    label: "漫威",
                    content: "复仇者联盟1、2、3、4",
                    finished: true,
                    info: "",
                },
                {
                    id: 5,
                    category: "影视",
                    content: "唐人街探案1、2、3",
                    label: "悬疑",
                    finished: true,
                    info: "",
                },
                {
                    id: 6,
                    category: "影视",
                    label: "漫威",
                    content: "银河护卫队1、2",
                    finished: true,
                    info: "",
                },
                {
                    id: 7,
                    category: "影视",
                    label: "漫威",
                    content: "蚁人1、2",
                    finished: true,
                    info: "",
                },
                {
                    id: 8,
                    category: "影视",
                    label: "漫威",
                    content: "奇异博士1",
                    finished: true,
                    info: "",
                },
                {
                    id: 9,
                    category: "影视",
                    label: "漫威",
                    content: "奇异博士2",
                    finished: false,
                    info: "",
                },
                {
                    id: 10,
                    category: "影视",
                    label: "漫威",
                    content: "雷神3",
                    finished: true,
                    info: "",
                },
                {
                    id: 11,
                    category: "影视",
                    label: "X战警",
                    content: "X战警前期三部曲",
                    finished: true,
                    info: "",
                },
                {
                    id: 12,
                    category: "影视",
                    label: "漫威",
                    content: "死侍1、2",
                    finished: true,
                    info: "",
                },
                {
                    id: 13,
                    category: "影视",
                    label: "X战警",
                    content: "X战警:第一战",
                    finished: true,
                    info: "",
                },
                {
                    id: 14,
                    category: "影视",
                    label: "X战警",
                    content: "X战警:逆转未来",
                    finished: true,
                    info: "",
                },
                {
                    id: 15,
                    category: "影视",
                    label: "X战警",
                    content: "X战警:天启",
                    finished: true,
                    info: "",
                },
                {
                    id: 16,
                    category: "影视",
                    label: "X战警",
                    content: "金刚狼1、2",
                    finished: true,
                    info: "",
                },
                {
                    id: 17,
                    category: "影视",
                    label: "科幻",
                    content: "流浪地球",
                    finished: true,
                    info: "",
                },
                {
                    id: 18,
                    category: "影视",
                    label: "科幻",
                    content: "黑客帝国",
                    finished: true,
                    info: "",
                },
                {
                    id: 19,
                    category: "影视",
                    label: "科幻",
                    content: "盗梦空间",
                    finished: true,
                    info: "",
                },
                {
                    id: 20,
                    category: "影视",
                    label: "科幻",
                    content: "超体",
                    finished: true,
                    info: "",
                },
                {
                    id: 21,
                    category: "影视",
                    label: "科幻",
                    content: "终结者1",
                    finished: true,
                    info: "",
                },
                {
                    id: 22,
                    category: "影视",
                    label: "科幻",
                    content: "星际穿越",
                    finished: true,
                    info: "",
                },
                {
                    id: 23,
                    category: "影视",
                    label: "科幻",
                    content: "阿凡达",
                    finished: true,
                    info: "",
                },
                {
                    id: 24,
                    category: "影视",
                    label: "科幻",
                    content: "第九区",
                    finished: true,
                    info: "",
                },
                {
                    id: 25,
                    category: "影视",
                    label: "柯南",
                    content: "贝克街的亡灵",
                    finished: true,
                    info: "",
                },
                {
                    id: 26,
                    category: "影视",
                    label: "柯南",
                    content: "通往天国的倒计时",
                    finished: true,
                    info: "",
                },
                {
                    id: 27,
                    category: "影视",
                    label: "柯南",
                    content: "侦探们的镇魂歌",
                    finished: true,
                    info: "",
                },
                {
                    id: 28,
                    category: "影视",
                    label: "动作",
                    content: "金蝉脱壳",
                    finished: true,
                    info: "",
                },
                {
                    id: 29,
                    category: "影视",
                    label: "动作",
                    content: "黑衣人3",
                    finished: true,
                    info: "",
                },
                {
                    id: 30,
                    category: "影视",
                    label: "动作",
                    content: "长津湖两部曲",
                    finished: true,
                    info: "",
                },
                {
                    id: 31,
                    category: "影视",
                    label: "动作",
                    content: "007:无暇赴死",
                    finished: true,
                    info: "",
                },
                {
                    id: 32,
                    category: "影视",
                    label: "动作",
                    content: "悬崖之上",
                    finished: true,
                    info: "",
                },
                {
                    id: 33,
                    category: "影视",
                    label: "悬疑",
                    content: "致命魔术",
                    finished: true,
                    info: "",
                },
                {
                    id: 34,
                    category: "影视",
                    label: "悬疑",
                    content: "调音师",
                    finished: true,
                    info: "",
                },
                {
                    id: 35,
                    category: "影视",
                    label: "悬疑",
                    content: "误杀1、2",
                    finished: true,
                    info: "",
                },
                {
                    id: 36,
                    category: "影视",
                    label: "悬疑",
                    content: "恐怖游轮",
                    finished: true,
                    info: "",
                },
                {
                    id: 37,
                    category: "影视",
                    label: "悬疑",
                    content: "蝴蝶效应",
                    finished: true,
                    info: "",
                },
                {
                    id: 38,
                    category: "影视",
                    label: "悬疑",
                    content: "禁闭岛",
                    finished: true,
                    info: "",
                },
                {
                    id: 39,
                    category: "影视",
                    label: "悬疑",
                    content: "利刃出鞘",
                    finished: true,
                    info: "",
                },
                {
                    id: 40,
                    category: "影视",
                    label: "悬疑",
                    content: "看不见的客人",
                    finished: true,
                    info: "",
                },
                {
                    id: 41,
                    category: "影视",
                    label: "",
                    content: "忠犬八公的故事",
                    finished: true,
                    info: "",
                },
                {
                    id: 42,
                    category: "影视",
                    label: "",
                    content: "阿甘正传",
                    finished: true,
                    info: "",
                },
                {
                    id: 43,
                    category: "影视",
                    label: "",
                    content: "肖申克的救赎",
                    finished: true,
                    info: "",
                },
                {
                    id: 44,
                    category: "影视",
                    label: "",
                    content: "波西米亚的狂想曲",
                    finished: true,
                    info: "",
                },
                {
                    id: 45,
                    category: "影视",
                    label: "美剧",
                    content: "小谢尔顿第一、二季",
                    finished: true,
                    info: "",
                },
            ],
        };
    }
}
</script>

<style scoped>
.to-do-input {
    margin-bottom: 10px;
}
.card-header {
    font-size: 20px;
    font-weight: bold;
}

</style>