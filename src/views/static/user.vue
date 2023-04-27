<template>
  <User @customEvent="customEvent" @customEvent1="customEvent1" :salesclerks="salesclerks">
    <template #[header]>
      头部信息
    </template>
    用户列表{{ id }}
  </User>
</template>

<script>
import { defineComponent } from "vue"
import User from "../../components/User.vue"
export default defineComponent({
  props:['id'],
  data() {
    return {
      salesclerks: [
         { id: 1, name: '罗洁白', prefession: '店长', shop: '二多多烘培' },
         { id: 2, name: '周土豪', prefession: '副店长', shop: '二多多烘培' },
         { id: 3, name: '吴所味', prefession: '收银员', shop: '二多多烘培' },
         { id: 4, name: '谢大脚', prefession: '面包师', shop: '二多多烘培' },
         { id: 5, name: '刘桂兰', prefession: '烘培师', shop: '二多多烘培' },
         { id: 6, name: '张有才', prefession: '导购员', shop: '二多多烘培' }
      ],
      header: 'header'
    }

  },
  mounted(){
    const {title,Auth}=this.$route.meta; 
    console.log(title,Auth)

  },

  components: {
    //key:value
    //User:User
    User
  },
  methods: {
    customEvent() {
      console.log('customEvent')
    },
    customEvent1(id) {
      console.log('customEvent1', id)

    }
  }


});
</script>

<style lang='SCSS' SCOPED>

</style>