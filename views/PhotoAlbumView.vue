<template>

<section class="container-fluid">
    <div class="row">
        <div class="col-md-12" id="container">
            <PhotoItem v-for="image in imgsArr" :key="image.id" :image="image" @showPic="showPic" />
        </div>
    </div>
</section>
<ModalItem ref="mychild" :image=imgsArr[curIdx] />

</template>

<script>
import PhotoItem from '../components/PhotoItem.vue'
import ModalItem from '../components/ModalItem.vue'

export default {
    name: 'PhotoAlbumView',
    components: {
        PhotoItem,
        ModalItem,
    },
    methods: {
        showPic(id) {
            // console.log("call showPic", src);
            this.showing_pic = true;
            this.curIdx = id - 1;
            this.$refs.mychild.showImage();
        },
        hidePic() {
            this.showing_pic = false;
        }
    },
    data() {
        return {
            imgsArr: [
                {
                    id: 1,
                    src: "http://101.35.183.71:5288/static/image/photo/1.jpg",
                    href: "image_1",
                    cap: "2021冬季合照",
                    info: "大约在冬季",
                },
                {
                    id: 2,
                    src: "http://101.35.183.71:5288/static/image/photo/2.jpg",
                    href: "image_2",
                    cap: "2022早春合照",
                    info: "中山公园之行",
                },
                {
                    id: 3,
                    src: "http://101.35.183.71:5288/static/image/photo/3.jpg",
                    href: "image_3",
                    cap: "2021国庆合照",
                    info: "海底捞饭前合照~",
                },
                {
                    id: 4,
                    src: "http://101.35.183.71:5288/static/image/photo/4.jpg",
                    href: "image_4",
                    cap: "2019期末地大自习室合照",
                    info: "疫情前最后几次在地大呜呜┭┮﹏┭┮",
                },
                {
                    id: 5,
                    src: "http://101.35.183.71:5288/static/image/photo/5.jpg",
                    href: "image_5",
                    cap: "2019江滩比心照",
                    info: "下船后在沙滩玩沙子比心~",
                },
                {
                    id: 6,
                    src: "http://101.35.183.71:5288/static/image/photo/6.jpg",
                    href: "image_6",
                    cap: "2019光谷吃饭",
                    info: "路过风情街拍照圣地 吃的锅之恋~",
                },
                {
                    id: 7,
                    src: "http://101.35.183.71:5288/static/image/photo/7.jpg",
                    href: "image_7",
                    cap: "2019游乐园摩天轮合照",
                    info: "暑假结束见面第一天 游玩一天后摩天轮留下合影 背景的镜像字样仿佛另有深意",
                },
                {
                    id: 8,
                    src: "http://101.35.183.71:5288/static/image/photo/8.jpg",
                    href: "image_8",
                    cap: "logo🐖",
                    info: "画在脚踝上的🐖 iris毕生绘画功底的体现",
                },
                {
                    id: 9,
                    src: "http://101.35.183.71:5288/static/image/photo/9.jpg",
                    href: "image_9",
                    cap: "2020疫情期间iris的泡儿",
                    info: "完美的手工泡儿by心灵手巧的iris~",
                },
                {
                    id: 10,
                    src: "http://101.35.183.71:5288/static/image/photo/10.jpg",
                    href: "image_10",
                    cap: "2019光谷手合影",
                    info: "两只完美的手",
                },
                {
                    id: 11,
                    src: "http://101.35.183.71:5288/static/image/photo/11.jpg",
                    href: "image_11",
                    cap: "光谷维多利亚牛排",
                    info: "秒杀 牛排要是不切可能更好吃一点",
                },
                {
                    id: 12,
                    src: "http://101.35.183.71:5288/static/image/photo/12.jpg",
                    href: "image_12",
                    cap: "2019冬季期末前夕地大北区二楼饭后",
                    info: "最怀念的一个学期 异校恋的完美平衡",
                },
                {
                    id: 13,
                    src: "http://101.35.183.71:5288/static/image/photo/13.jpg",
                    href: "image_13",
                    cap: "2019冬季Johnson嘟嘴卖萌照",
                    info: "最怀念的一个学期 异校恋的完美平衡",
                },
                {
                    id: 14,
                    src: "http://101.35.183.71:5288/static/image/photo/14.jpg",
                    href: "image_14",
                    cap: "2018冬季击碎Johnson内心照",
                    info: "侧颜直击内心(❤ ω ❤)",
                },
                {
                    id: 15,
                    src: "http://101.35.183.71:5288/static/image/photo/15.jpg",
                    href: "image_15",
                    cap: "2021暑假前夕的宾馆合照",
                    info: "离行前的最后一天 想着接下来面对的夏令营内心当时其实非常难受",
                },
                {
                    id: 16,
                    src: "http://101.35.183.71:5288/static/image/photo/16.jpg",
                    href: "image_16",
                    cap: "詹姆士分米鸡",
                    info: "119一人 可惜门店被胖哥俩直接击碎",
                },
                {
                    id: 17,
                    src: "http://101.35.183.71:5288/static/image/photo/17.jpg",
                    href: "image_17",
                    cap: "2019一周年的戒指",
                    info: "第一对戒指 后面直接戒指狂魔 整了三对",
                },
                {
                    id: 18,
                    src: "http://101.35.183.71:5288/static/image/photo/18.jpg",
                    href: "image_17",
                    cap: "后街鸡公煲",
                    info: "第一次外出饭店的选择 鸡公煲yyds",
                },
                {
                    id: 19,
                    src: "http://101.35.183.71:5288/static/image/photo/19.jpg",
                    href: "image_19",
                    cap: "2020疫情采花的小姑娘",
                    info: "疫情期间Iris对Johnson的每日分享",
                },
                {
                    id: 20,
                    src: "http://101.35.183.71:5288/static/image/photo/20.jpg",
                    href: "image_20",
                    cap: "2022日常KTV",
                    info: "大四下半学年少有的出行之一",
                },
                {
                    id: 21,
                    src: "http://101.35.183.71:5288/static/image/photo/21.jpg",
                    href: "image_21",
                    cap: "2022中山公园之行",
                    info: "野餐期间的自拍",
                },
                {
                    id: 22,
                    src: "http://101.35.183.71:5288/static/image/photo/22.jpg",
                    href: "image_22",
                    cap: "2020疫情Iris送给Johnson的远程包裹",
                    info: "最精美的礼物之一 一直珍藏在家中",
                },
                {
                    id: 23,
                    src: "http://101.35.183.71:5288/static/image/photo/23.jpg",
                    href: "image_23",
                    cap: "Johnson多年屏保照",
                    info: "爱情的氛围",
                },
                {
                    id: 24,
                    src: "http://101.35.183.71:5288/static/image/photo/24.jpg",
                    href: "image_24",
                    cap: "锅之恋焖锅",
                    info: "成为胖哥俩吹捧者之前的山寨版",
                },
                {
                    id: 25,
                    src: "http://101.35.183.71:5288/static/image/photo/25.jpg",
                    href: "image_25",
                    cap: "毕加索遗风",
                    info: "🐖logo的吉祥物版 看起来象征着美好的爱情",
                },
                {
                    id: 26,
                    src: "http://101.35.183.71:5288/static/image/photo/26.jpg",
                    href: "image_26",
                    cap: "2019武大樱花展",
                    info: "拍照最多的一天 冲刷了磨合期的不愉快",
                },
                {
                    id: 27,
                    src: "http://101.35.183.71:5288/static/image/photo/27.jpg",
                    href: "image_27",
                    cap: "Iris和Johnson的互相卖萌脸",
                    info: "拍照5分钟 自习2小时?",
                },
                {
                    id: 28,
                    src: "http://101.35.183.71:5288/static/image/photo/28.jpg",
                    href: "image_28",
                    cap: "美女的肯定",
                    info: "美女的肯定.gif",
                },
                {
                    id: 29,
                    src: "http://101.35.183.71:5288/static/image/photo/29.jpg",
                    href: "image_29",
                    cap: "2022KTV偷拍照",
                    info: "我唱的好听吗?",
                },
                {
                    id: 30,
                    src: "http://101.35.183.71:5288/static/image/photo/30.jpg",
                    href: "image_30",
                    cap: "2022KTV倾听照",
                    info: "我左你靠右?",
                },
                {
                    id: 31,
                    src: "http://101.35.183.71:5288/static/image/photo/31.jpg",
                    href: "image_31",
                    cap: "2019日常视频合影",
                    info: "凭蓝牙耳机类型和小窗男子的胖瘦认年份.jpg",
                },
                {
                    id: 32,
                    src: "http://101.35.183.71:5288/static/image/photo/32.jpg",
                    href: "image_32",
                    cap: "舌尖大师铁板锅",
                    info: "下馆子兜底yyds",
                },
                {
                    id: 33,
                    src: "http://101.35.183.71:5288/static/image/photo/33.jpg",
                    href: "image_33",
                    cap: "2020疫情的约定之情侣鞋",
                    info: "看了半天才敲定的完美情侣鞋",
                },
                {
                    id: 34,
                    src: "http://101.35.183.71:5288/static/image/photo/34.jpg",
                    href: "image_34",
                    cap: "爱丽丝自助牛排",
                    info: "除牛排全部自助 吃甜品吃爽的一天",
                },
                {
                    id: 35,
                    src: "http://101.35.183.71:5288/static/image/photo/35.jpg",
                    href: "image_35",
                    cap: "胖哥俩肉蟹煲",
                    info: "疫情元年后约饭最常选项",
                },
                {
                    id: 36,
                    src: "http://101.35.183.71:5288/static/image/photo/36.jpg",
                    href: "image_36",
                    cap: "2021.07.02-Johnson的21岁生日",
                    info: "大雨天Iris还是跑过来给他过了这个生日 猛男真的感动",
                },
                {
                    id: 37,
                    src: "http://101.35.183.71:5288/static/image/photo/37.jpg",
                    href: "image_37",
                    cap: "2021东湖绿道",
                    info: "别人都用自行车 我们用走的 虽然脚磨破了 但是超级开心的一天",
                },
                {
                    id: 38,
                    src: "http://101.35.183.71:5288/static/image/photo/38.jpg",
                    href: "image_38",
                    cap: "2022中山公园之行",
                    info: "沐浴阳光下的清明小假~",
                },
                {
                    id: 39,
                    src: "http://101.35.183.71:5288/static/image/photo/39.jpg",
                    href: "image_39",
                    cap: "2021练球合照",
                    info: "那时还能进出民大 练球后的挥汗如雨",
                },
                {
                    id: 40,
                    src: "http://101.35.183.71:5288/static/image/photo/40.jpg",
                    href: "image_40",
                    cap: "2021三周年合影",
                    info: "三周年的拍立得式照片",
                },
                {
                    id: 41,
                    src: "http://101.35.183.71:5288/static/image/photo/41.jpg",
                    href: "image_41",
                    cap: "2021三周年小美女🤦‍照",
                    info: "经典捂脸照 长腿小姐姐",
                },
                {
                    id: 42,
                    src: "http://101.35.183.71:5288/static/image/photo/42.jpg",
                    href: "image_42",
                    cap: "2018冬天Iris放电照",
                    info: "这个眼中真的有光⭐",
                },
                {
                    id: 43,
                    src: "http://101.35.183.71:5288/static/image/photo/43.jpg",
                    href: "image_43",
                    cap: "2018冬天民大慢跑合照",
                    info: "排show的时候躲在南区主席台的合照",
                },
                {
                    id: 44,
                    src: "http://101.35.183.71:5288/static/image/photo/44.jpg",
                    href: "image_44",
                    cap: "2018冬天民大慢跑合照",
                    info: "用了一年多的壁纸",
                },
                {
                    id: 45,
                    src: "http://101.35.183.71:5288/static/image/photo/45.jpg",
                    href: "image_45",
                    cap: "2018万圣节",
                    info: "中级班大合照 爱情发芽的地方",
                },
                {
                    id: 46,
                    src: "http://101.35.183.71:5288/static/image/photo/46.jpg",
                    href: "image_46",
                    cap: "2018万圣节-命运安排",
                    info: "合照的位置好像也是安排好的一样",
                },
                {
                    id: 47,
                    src: "http://101.35.183.71:5288/static/image/photo/47.jpg",
                    href: "image_47",
                    cap: "2018年11月3日14:48",
                    info: "一言定终身",
                },
            ], // item: {src: 图片源码, href: 点击超链接, info: 图片文字描述}
            curIdx: 0, // 当前展示的图片序号
            showing_pic: false, // 是否正在展示图片
        };
    },
}

</script>

<style scoped>
#container{
    -webkit-column-width:354px; /*Safari and Chrome*/
    -moz-column-width:354px; /*Firefox*/
    -o-column-width:354px; /*Opera*/
    -ms-column-width:354px; /*IE*/
    column-width:354px;
}
#container>div{
    width:354px; /*宽度根据实际情况调节，应与上面一致*/
    overflow:auto; /*防止内容溢出导致布局错位*/
}
</style>