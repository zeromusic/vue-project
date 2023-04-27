<template>
    <!--登录页面设计
        1.表单
        2.验证(自定义)
        3.登录实现，效果：loading
        4.状态信息的保存（pinia,vuex）
        问题刷新会出现状态信息丢失问题，数据持久化 数据库，
        本地持久化:持久化插件 //持久化插件 安装cnpm install pinia-plugin-persist
        5.页面跳转
        6.reset
    -->
    <!-- <div>数量{{userStore.count}}</div>
    <button @click="userStore.increat">count++</button> -->
    <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item prop="email">
            <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入你的用户邮箱" suffix-icon="Message"/>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="userForm.password" autocomplete="off" placeholder="请输入你的用户密码"
                suffix-icon="Lock"/>
        </el-form-item>
        <!-- <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item> -->
        <el-form-item>
            <el-button type="primary" @click="btnlogin">用户登录</el-button>
            <el-button @click="resetForm">Reset</el-button>
        </el-form-item>
    </el-form>
    <!-- <div class="">登录页面</div>
    <button @click="btnlogin">登录</button>
    <el-button type="primary" @click="btnlogin">登录</el-button> -->
</template>

<script>

import { defineComponent } from "vue"
import { mapActions } from "pinia";
import { userlogin } from "../../http";
import { useUserStore } from "../../store/user";
export default defineComponent({
    setup(){
        //组合式
        // const userStore=useUserStore();
        // //const {setToken,fillUserinfo}=storeToRefs(userStore);
        // return {userStore}
    },
    data() {
        return {
            userForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入正确的电子邮箱', trigger: 'blur' },
                    { type: 'email', message: '电子邮箱格式错误', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入正确的用户密码', trigger: 'blur' },
                    { min: 8, message: '密码长度不得小于8个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        ...mapActions(useUserStore,['setToken','fillUserinfo']),
        btnlogin() {
            const that =this;
            const formEl = that.$refs.ruleFormRef //取ref对象
            //console.log(formEl);
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    // const data = {
                    //     "email": "414090297@qq.com",
                    //     "password": "12345678"
                    // };
                    const res = userlogin(that.userForm)
                    //console.log(res);
                    res.then(result => {
                        //console.log(result)
                        /**
                         * 选项式
                         * 用户的状态:登录状态 token='' 未登录 token='adbdfsdfsdsdsd'已经登录
                         * 保存登录用户的信息
                         * fillUserinfo
                         * 调用状态存储pinia的辅助函数mapActions
                         * methods:{
                         * ...mapActions(useUserStore,['setToken','fillUserinfo']),
                         * }
                         */
                        //pinia 下次解决
                        //跳转页面

                        if(result.success){
                            const userinfo=result.data.userinfo;
                            console.log(that);
                            that.setToken(userinfo.token);
                            that.fillUserinfo(userinfo);
                            that.$router.push('/');
                            
                        }
                        else{

                            return false;
                        }
                        
                        
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    console.log('error submit!')
                    return false
                }
            })


            //console.log(this.userForm);
            // const data = {
            //     "email": "414090297@qq.com",
            //     "password": "12345678"
            // };

            // const res = await userlogin(data)
            // console.log(res);
            // res.then(result=>{
            //     console.log(result)
            // }).catch(err=>{
            //     console.log(err)
            // })
        },
        resetForm(){
            const formEl = this.$refs.ruleFormRef //取ref对象
            formEl.resetFields()
            
        }
    }
});
</script>

<style lang='scss' SCOPED></style>