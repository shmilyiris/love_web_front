<template>
    
    <div class="timer">
        <div>Johnson❤Iris From 2018-11-03 </div>
        <div>一起走过了 </div>
        <span class="days">{{ days }}</span>天<br/>
        <span class="hours">{{ hours }}</span>小时<br/>
        <span class="minutes">{{ minutes }}</span>分钟<br/>
        <span class="seconds">{{ seconds }}</span>秒<br/>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    data() {
        return {
            timer: undefined,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },

    methods: {
        formatting_num (num, len) { // 保留小数点后len位有效数字
            return (Array(len).join('0') + num).slice(-len)
        },

        getDiffTime (loveDate) {
            const now = new Date();
            const diff = now.getTime() - loveDate.getTime();
            
            if (diff <= 0) clearInterval(this.timer);
            else {
                this.seconds = Math.floor(diff / 1000);
                this.minutes = Math.floor(this.seconds / 60);
                this.hours = Math.floor(this.minutes / 60);
                this.days = Math.floor(this.hours / 24);

                this.hours %= 24;
                this.minutes %= 60;
                this.seconds %= 60;

                this.hours = this.formatting_num(this.hours, 2);
                this.minutes = this.formatting_num(this.minutes, 2);
                this.seconds = this.formatting_num(this.seconds, 2);
            }
        }
    },

    mounted() {
        const outer = this;
        const loveDate = new Date('2018/11/03 14:41:00');
        this.timer = setInterval(() => {
            outer.getDiffTime(loveDate);
        }, 1000);
    }
}

</script>


<style scoped>
@import url('../assets/css/font.css');
.timer {
    width: 100%;
    text-align: center;
    color: purple;
    font-size: 30px;
    user-select: none;
}
.days, .hours, .minutes, .seconds {
    font-size: 50px;
    color: red;
    font-family: 'DS-DigitalBold';
}
</style>
