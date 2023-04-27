<template>
  <div class=" salesclerks">
    <!--salesclerks 店员管理 CURD
   1 数据展示 table element-plus table组件的使用
   2 数据添加 表单 element-plus 表单组件的使用 添加按钮，ICON，弹出,实现添加的功能
   3 数据更新|编辑 第一步：表单回显数据，第二部 flag
   4 数据删除 查询
   事件方法，传参
   v-for
   分页处理
  -->
    <h3>
      <slot></slot>
    </h3>
    <div class="tools">
      <el-button icon="Plus" @click="toAdd" />

    </div>
    <slot name="header"></slot>
    <el-table :data="salesclerks" style="width: 100%">
      <el-table-column prop="id" label="编号" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="prefession" label="职位" width="180" />
      <el-table-column prop="shop" label="店名" />
      <el-table-column label="功能管理">
        <template #default="scope">
          <el-button size="small" @click="$event => handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="$event => handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="small" type="danger" @click="btnClick">组件自定义事件</el-button>
          <el-button size="small" type="danger" @click="btnClick1">子父传参</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogSalesclerksFormVisible" title="店员编辑">
      <el-form :model="salesclerk">
        <el-form-item label="编号" :label-width="formLabelWidth">
          <el-input v-model="salesclerk.id" autocomplete="off" />
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="salesclerk.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-input v-model="salesclerk.prefession" autocomplete="off" />
        </el-form-item>
        <el-form-item label="店名" :label-width="formLabelWidth">
          <el-input v-model="salesclerk.shop" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="$event => dialogSalesclerksFormVisible = false">取消</el-button>
          <el-button type="primary" @click="save">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    salesclerks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogSalesclerksFormVisible: false,
      salesclerk: {
        id: 0,
        name: '',
        prefession: '',
        shop: ''

      },
      formLabelWidth: '80px',
      flag: true,//true 添加 flase更新
      index: 0
    }

  },
  methods: {
    toAdd() {
      this.salesclerk = {
        id: 0,
        name: '',
        prefession: '',
        shop: ''

      };
      this.dialogSalesclerksFormVisible = true,
        this.flag = true;

    },
    save() {
      console.log(this.salesclerk);
      //添加
      if (this.flag) {
        this.salesclerks.push(this.salesclerk)
      }
      else {

        this.salesclerks[this.index] = this.salesclerk;//索引

      }
      //更新
      this.dialogSalesclerksFormVisible = false;
    },
    handleEdit(index, row) {
      this.flag = false;
      this.index = index;
      console.log(index, row)
      this.salesclerk = JSON.parse(JSON.stringify(row)); //深拷贝 利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象

      this.dialogSalesclerksFormVisible = true;

    },
    handleDelete(index, row) {
      console.log(index, row)
      this.salesclerks.splice(index, 1)
    },
    btnClick() {
      this.$emit('customEvent');
    },
    btnClick1() {
      const data = {};
      data.salesclerk = this.salesclerks[0];
      data.index = 0;
      this.$emit('customEvent1', data);
    }

  }
});
</script>
<style lang="SCSS" scoped></style>