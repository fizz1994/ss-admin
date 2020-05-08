<template>
    <el-col
        class="ss-edit-item"
        :class="{ 'ss-edit-item--fill': span === 24 }"
        :sm="{ span: span ? span : 8 }"
    >
        <el-form-item :rules="rules" :label="label" :prop="prop">
            <slot></slot>
        </el-form-item>
    </el-col>
</template>
<script>
export default {
    name: 'SsSearchConditionItem',
    props: {
        label: String,
        prop: String,
        span: Number,
        rules: Array
    }
};
</script>
<style lang="scss">
.ss-edit-item {
    flex-shrink: 0;
}
</style>
