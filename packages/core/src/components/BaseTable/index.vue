<script lang="ts" setup generic="T">
// import DrawerBtns from "../DrawerBtns/index.vue"
interface propsType {
    data: Array<T>,
    currentPage?: number,
    total?: number,
    pageSize?: number,
    height?: number | string, // 列表高度，当固定表头时使用,假值则不传入
    isLoading?: boolean, // 是否加载中
}

const props = withDefaults(defineProps<propsType>(), {
    currentPage: 1,
    total: 0,
    pageSize: 10,
    // height: "auto",
    isLoading: false
})
//table勾选方法
const emit = defineEmits(['getSelectData'])
const handleSelectionChange = (val) => {
    emit('getSelectData', val);
}

// 设置table 样式：
const headerStyle = () => {
    return {
        background: "#fafafa",
        color: "#000",
        borderColor: "#E8EBF3",
        height: "40px",
        fontSize: "12px",
    }
}
const rowStyle = () => {
    return {
        height: "40px",
        fontSize: "12px",
    }
}

</script>

<template>
    <!-- 表格区域 -->
    <el-table v-loading="props.isLoading" empty-text="暂无数据" stripe border @selection-change="handleSelectionChange"
        :data="props.data" :height="props.height" :header-cell-style="headerStyle()" :row-style="rowStyle()">
        <slot></slot>
    </el-table>
    <el-pagination small background :total="props.total" style="justify-content: flex-end;margin:10px 0;"
        layout="total, sizes, prev, pager, next, jumper" />
</template>

<style lang="less" scoped></style>