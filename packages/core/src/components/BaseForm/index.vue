<script lang="ts" setup>

const props = defineProps<{
    form: Record<string, any>,
    inline?: boolean
}>()

</script>

<template>
    <el-form :inline="inline" :model="form">

    </el-form>
</template>

<style lang="less" scoped></style>