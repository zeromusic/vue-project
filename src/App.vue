<template>
<!--<MyComponent></MyComponent>-->
<!--<RouterLink to="/">首页</RouterLink>-->
<!--<RouterLink :to="{name:'user',params:{id:1}}">用户中心</RouterLink>-->
<!--<RouterLink to="/user">用户中心</RouterLink>-->
<!--<RouterLink to="/login">登录页面</RouterLink>
<RouterLink to="/object">object页面</RouterLink>
<RouterLink to="/shops">连锁店信息</RouterLink>
<RouterLink to="/cart">购物车</RouterLink>
<button @click="toJump">跳转页面</button>-->
<!--
<div>-->
  <!--页面组件的占位 iframe-->
  <!--<RouterView name="Header"></RouterView>
  
  <RouterView name="Footer"></RouterView>-->
<!--</div>-->

<RouterView></RouterView>
</template>

<script>
import { defineComponent} from 'vue'
//import MyComponent from './components/MyComponent.vue';
export default defineComponent({
  //components:{MyComponent},
  //methods:{
    //toJump(){
      //代码进行跳转
      //push
      //this.$router.push({path:'/user',params:{id:1}}) //push跳转 replace不后退
    //}
  //}

});
</script>

<script lang="scss" scoped>

</script>

