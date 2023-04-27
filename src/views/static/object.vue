<template>
<div class="">Object页面</div>
<router-view></router-view> 
</template>

<script>
// import { defineComponent } from "vue"
// export default defineComponent({


// });

export default{
    setup(){
        console.log('setup')
    },
    data(){
        return{
            //响应是数据
        }
    },
    methods:{
        //方法

    },
    computed:{
        //计算属性
    },
    created(){
        console.log('created')
    },
    //生命周期函数
    mounted(){
        console.log('mounted')
    },
    /**
     * 指令 v-html v-text v-bind : v-on @
     */
    onUnmounted(){
        console.log('onUnmounted')
    }

}
</script>

<style lang='scss' SCOPED>
// 可编程的css
// SCOPED css的适用范围在此页面
</style>