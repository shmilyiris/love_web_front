<template>
<div class="to-do-item">
    <div class="to-do-item-content">
        {{ item.content }}
    </div>

    <a href="" class="to-do-item-label" v-if="item.label" :style="{'background-color':label2color[item.label]}">
        {{ item.label }}
    </a>

    <div class="to-do-item-comp">

        <!-- <a href="" v-if="!item.finished" data-mdb-toggle="tooltip" title="去完成" style="color:red; margin-right:10px;">
            <font-awesome-icon icon="xmark" />
        </a>

        <div v-if="item.finished" data-mdb-toggle="tooltip" title="已完成" style="color:green; margin-right:10px; display:inline-block;">
            <font-awesome-icon icon="check" />
        </div>
        
        <a href="" data-mdb-toggle="tooltip" title="删除" style="color:black;">
            <font-awesome-icon icon="trash" />
        </a> -->

        <a class="controller" href="" v-if="!item.finished" data-mdb-toggle="tooltip" style="color:red; margin-right:10px;">
            去完成
        </a>

        <div class="controller" v-if="item.finished" data-mdb-toggle="tooltip" style="font-weight:bold; color:green; margin-right:10px; display:inline-block;">
            已完成
        </div>
        
        <a class="controller" href="" data-mdb-toggle="tooltip" style="color:black;">
            删除
        </a>

    </div>
</div> 
</template>

<script>
export default {
    props: ["item"],
    data() {
        return {
            label2color: {
                '武汉': "rgba(173,216,230, 0.9)",
                '北京': "rgba(255,0,0, 0.4)",
                '漫威': "rgba(255,205,70, 0.8)",
                'X战警': "rgba(244,250,103, 0.8)",
                '科幻': "rgba(0,100,255, 0.3)",
                '柯南': "rgba(255,0,0, 0.9)",
                '动作': "brown",
                '悬疑': 'rgba(128,0,128, 0.4)',
                '美剧': "yellowgreen"
            },
        };
    },
}
</script>


<style scoped>
.to-do-item:hover {
    background-color: rgba(232,232,232,1);
}
.to-do-item-content {
    font-weight: bold;
    display: inline-block;
    margin-right: 3px;
}
.to-do-item-comp {
    float: right;
    display: block;
}
.to-do-item-label {
    border-radius: 25%;
    font-weight: bold;
    font-size: 2px;
    color: black;
    border: 1px solid black;
    display: inline-block;
    text-decoration: none;
}
.controller {
    font-size: 3px;
}
a {
    text-decoration: none;
}
a:hover {
    background-color: lightgrey;
}
</style>