<script lang="ts" setup>
import * as icons from "@element-plus/icons-vue"
import { ref } from "vue"

const props = defineProps<{
    modelValue: string
}>()


const modelValue = ref('')

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
// icon点击是，更新input内容，并且触发自定义事件
function handleClick(iconName: string) {
    modelValue.value = iconName
    emits('update:modelValue', iconName)
}

</script>

<template>
    <div class="select-icon-container">
        <el-input style="margin-bottom: 10px;" :value="modelValue" placeholder="输入图标名字" :prefix-icon="icons['Search']" />
        <el-scrollbar :height="286">
            <el-icon class="icon-item" :size="32" color="#409EFF" v-for="(value, key) of icons" :key="key"
                @click="handleClick(key)">
                <component :is="value" />
            </el-icon>
        </el-scrollbar>
    </div>
</template>

<style lang="less" scoped>
.select-icon-container {
    border: 1px solid #cee4fb;
    padding: 10px;
    border-radius: 5px;
    box-shadow: #cee4fb 8px 8px 9px 0;
    box-sizing: border-box;
    width: 286px;
}

.icon-item {
    margin: 0 10px 10px 0;
    transition: all .5s;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
}

.icon-item:hover {
    transform: scale(1.2);
    box-shadow: #cee4fb 8px 8px 9px 0;
    border: 1px solid #cee4fb;
}
</style>