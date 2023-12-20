<script lang="ts" setup>
import { ref, Ref } from "vue"
import { Tools } from "@element-plus/icons-vue"
// import SystemController from "@/api/modules/systemController";
// import type { menuBean } from "@/api/modules/systemController"
import { default as SystemControllerInstance, type menuBean } from "../../../api/modules/systemController"


// 加载列表数据
const tableData: Ref<menuBean[]> = ref([]);
SystemControllerInstance.menuList().then(response => {
    tableData.value = response
})


// 处理dialog
const dialogVisible = ref(false); // dialog是否可见
const activeMenu = ref<Record<string, any>>({ name: "", page: "", tableData: [] });

function handleClick() {
    dialogVisible.value = true;
}


</script>

<template>
    <div>
        <el-button type="primary">创建菜单</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="menuID" default-expand-all>
        <!-- <el-table-column prop="label" label="label" /> -->
        <el-table-column prop="name" label="name" />
        <!-- <el-table-column prop="id" label="id" /> -->
        <el-table-column prop="iconName" label="iconName" />
        <el-table-column prop="pageID" label="页面ID" />
        <el-table-column prop="pageName" label="页面名称" />
        <el-table-column prop="pagePath" label="页面路径" />
        <el-table-column label="操作" width="120">
            <el-button type="primary" :icon="Tools" @click="handleClick">配置</el-button>
        </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="修改菜单">
        <el-form :model="activeMenu" label-width="120px">
            <el-form-item label="修改标题">
                <el-input v-model="activeMenu.name" />
            </el-form-item>
            <el-form-item label="挂载页面">
                <el-select v-model="activeMenu.page" placeholder="选择挂载的页面">
                    <el-option v-for="item of activeMenu.tableData" :label="item.name" :value="item.code" />
                </el-select>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style lang="less" scoped></style>