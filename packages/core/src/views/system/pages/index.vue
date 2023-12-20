<script setup lang="ts">
import { ref, Ref } from "vue"
import SystemController from "../../../api/modules/systemController";
import type { pageBean } from "../../../api/modules/systemController"

const tableData: Ref<pageBean[]> = ref([])

// 刷新列表数据
function fetchTable() {
    SystemController.pageList().then(res => {
        tableData.value = res
    })
}

fetchTable()

</script>


<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="path" label="路径" />
        <el-table-column prop="remark" label="备注" />
        <el-table-column prop="pageType" label="类型" />
        <el-table-column prop="status" label="状态">
            <template #default="scope">
                <p>未挂载/未同步</p>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="250">
            <el-button type="success">同步</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="primary">配置</el-button>
        </el-table-column>
    </el-table>
</template> 