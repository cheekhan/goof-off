<template>
  <div class="table-container">
    <!-- 表单查询 -->
    <header>
      <el-form :model="props.form" :inline="true" ref="formRef">
        <slot name="header"></slot>
      </el-form>
      <slot name="btns"></slot>
    </header>
    <!-- 表格 -->
    <main>
      <el-table :data="props.table">
        <slot></slot>
      </el-table>
    </main>
    <!-- 分页 -->
    <footer>
      <slot name="footer">
        <el-pagination
          :current-page="page.index"
          :page-size="page.size"
          :page-sizes="[10, 50, 100]"
          :disabled="disabled"
          layout="total, sizes, prev, pager, next, jumper"
          :total="props.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// props接收数据
interface Props {
  table: any; //表格
  form: {}; // 表单
  total: number; //总条目数
}
const props = defineProps<Props>();

// 分页
const page = ref({
  index: 1,
  size: 10,
});

// 是否禁用分页
const disabled = ref(false);

const emit = defineEmits(["change"]);

// page-size 改变时触发
const handleSizeChange = (val: number) => {
  page.value.size = val;
  page.value.index = 1;
  emit("change", val);
};
// current-page 改变时触发
const handleCurrentChange = (val: number) => {
  page.value.index = val;
  emit("change", val);
};
</script>

<style lang="less" scoped>
.table-container {
  display: flex;
  flex-direction: column;
}
main,
footer {
  margin-top: 40px;
}
.el-pagination {
  float: right;
}
</style>
