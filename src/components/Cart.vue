<template>
  <div class="cart">购物车</div>
  <div class="products">
    <div class="product" v-for="item in products" :key="item.id">
      <div class="name">
       <el-checkbox :label="item.name" size="small" v-model="item.selected" />
        </div>
       <div class="bars">
        <span class="price">￥{{ item.price }}</span>
       <span class="count">
           <el-input-number :min="min" value-on-clear="min" v-model.number="item.count" size="small"
            @keydown="preventKeydown"  @change="handleCountChange(item)" />
           </span>
        </div>
      </div>
     <div class="total">
   <el-checkbox :indeterminate="indeterminate" :value="allSelected" @change="handleAllSelectedChange">
       全选
        </el-checkbox>
      <span>合计{{ total }}</span>
       <button>购买</button>
       </div>
 </div>
    </template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      products: [
        { id: 1001, name: "热水器", price: 1839, count: 1, selected: false },
        { id: 1002, name: "vue书籍", price: 18, count: 1, selected: false },
      ],
      count: undefined,
      total: 0,
      min: 1,
      allSelected: false,
      indeterminate: false,
    };
  },
  computed: {
    selectedProducts() {
      return this.products.filter((item) => item.selected);
    },
  },
  watch: {
    selectedProducts: {
      handler(selectedProducts) {
        this.total = selectedProducts.reduce(
          (total, item) => total + item.price * item.count,
          0
        );
        this.allSelected = selectedProducts.length === this.products.length;
        this.indeterminate =
          selectedProducts.length > 0 && selectedProducts.length < this.products.length;
      },
      deep: true,
    },
  },
  methods: {
    preventKeydown(event) {
      event.preventDefault()
    },//固定数值
    handleCountChange(item) {
      console.log(item);
      this.total = this.selectedProducts.reduce(
        (total, p) => total + p.price * p.count,
        0
      );
    },
    handleAllSelectedChange(value) {
      this.allSelected = value;
      this.indeterminate = false;
      this.products.forEach((item) => {
        item.selected = value;
      });
    },
  },
});
</script>
    
<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;

  .name {
    font-size: 16px;
    font-weight: bold;
  }

  .bars {
    display: flex;
    justify-content: space-between;
    height: 35px;
    align-items: center;
    margin-top: 10px;

    .price {
      color: red;
    }
  }
}

.total {
  display: flex;
  margin: 20px 20px 10px 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
</style>
  