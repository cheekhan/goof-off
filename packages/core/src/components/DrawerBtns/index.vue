<script lang="ts" setup>
import { VNode, h } from "vue"
import { MoreFilled } from "@element-plus/icons-vue"
import { ElButton } from "element-plus"

const props = defineProps<{
    max?: number; // 最大的按钮个数
    width?: number; // 按钮的容器，必须进行设置
    size?: string; // 更多按钮的尺寸
}>()

const slots = defineSlots<{
    default: () => Array<VNode>
}>()
// 获取所有的按钮
const btns = slots.default();
const DefaultBtns = h('div', { style: { 'margin-right': "10px" } }, { default: () => btns.slice(0, props.max) }); // 展示的按钮
const MoreBtn = h(ElButton, { icon: MoreFilled, size: props.size }); // 跟多按钮
const DrawerContainer = h('div', null, { default: () => btns }); // 全部的按钮


</script>

<template>
    <div class="drawer-btns-container">
        <DefaultBtns />
        <el-popover placement="left" :width="width" trigger="click">
            <DrawerContainer />
            <template #reference>
                <MoreBtn />
            </template>
        </el-popover>
    </div>
</template>

<style lang="less" scoped>
.drawer-btns-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
</style>
