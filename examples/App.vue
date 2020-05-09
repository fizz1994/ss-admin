<template>
    <div id="app">
        <ss-search-condition
            :model="po"
            has-expend
            @search="queryInintHandle"
            @reset="resetHandle"
        >
            <ss-search-condition-item label="企业名称" prop="name">
                <el-input v-model="po.name"></el-input>
            </ss-search-condition-item>
            <ss-search-condition-item label="企业编码" prop="code">
                <el-input v-model="po.code"></el-input>
            </ss-search-condition-item>
            <ss-search-condition-item label="BD" prop="bdName">
                <el-input v-model="po.bdName"></el-input>
            </ss-search-condition-item>

            <template slot="more">
                <ss-search-condition-item label="企业名称1" prop="name1">
                    <el-input v-model="po.name1"></el-input>
                </ss-search-condition-item>
                <ss-search-condition-item label="企业编码1" prop="code1">
                    <el-input v-model="po.code1"></el-input>
                </ss-search-condition-item>
                <ss-search-condition-item label="BD1" prop="bdName1">
                    <el-input v-model="po.bdName1"></el-input>
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
            isExpend: false,
            po: {
                name: '',
                code: '',
                bdName: '',
                name1: '',
                code1: '',
                bdName1: ''
            },
            page: {
                currnet: 1,
                size: 1
            }
        };
    },
    provide() {
        return {
            search: this
        };
    },
    methods: {
        queryInintHandle() {
            this.page.currnet = 1;
            console.log('search');
        },
        resetHandle() {
            console.log('reset');
        }
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
