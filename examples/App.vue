<template>
    <div id="app">
        <ss-search-condition has-expend>
            <ss-search-condition-item label="企业名称">
                <el-input></el-input>
            </ss-search-condition-item>
            <ss-search-condition-item label="企业编码">
                <el-input placeholder=""></el-input>
            </ss-search-condition-item>
            <ss-search-condition-item label="BD">
                <el-input></el-input>
            </ss-search-condition-item>

            <template slot="more">
                <ss-search-condition-item label="企业名称">
                    <el-input></el-input>
                </ss-search-condition-item>
                <ss-search-condition-item label="企业编码">
                    <el-input></el-input>
                </ss-search-condition-item>
                <ss-search-condition-item label="BD">
                    <el-input></el-input>
                </ss-search-condition-item>
                <ss-search-condition-item label="状态">
                    <el-input></el-input>
                </ss-search-condition-item>
            </template>
            <template slot="more-op">
                <el-button size="small" type="warning">导出</el-button>
            </template>
        </ss-search-condition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isExpend: false
        };
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.sc-search-condition {
    margin-bottom: 10px;
    &__inputs {
        flex-wrap: wrap;
    }
    &__ops {
        /*margin-top: 10px;*/
        button {
            margin-left: 10px;
        }
    }
    &__more {
        width: 100%;
    }
    &__toggle-btn i {
        transition: 0.5s transform;
    }
    .is-expend i {
        transform: rotate(180deg);
    }
}
</style>
