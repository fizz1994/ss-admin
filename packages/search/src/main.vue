<template>
    <div class="ss-search-condition">
        <el-form
            :ref="ref"
            :size="size"
            :inline="inline"
            :label-position="labelPosition"
            :label-width="labelWidth"
            :model="model"
            :rules="rules"
        >
            <!-- 请求条件 -->
            <el-row
                ref="inputs"
                type="flex"
                class="ss-search-condition__inputs"
            >
                <slot></slot>
                <!-- 更多条件 -->
                <el-collapse-transition>
                    <div
                        ref="more"
                        class="ss-search-condition__more"
                        v-if="isExpend"
                    >
                        <slot name="more"></slot>
                    </div>
                </el-collapse-transition>
                <!-- 操作 -->
            </el-row>
            <el-form-item ref="ops" class="ss-search-condition__ops">
                <el-button size="small" type="primary" @click="search">
                    查询
                </el-button>
                <el-button size="small" type="warning" @click="reset">
                    重置
                </el-button>
                <slot name="more-op"></slot>
                <el-button
                    size="small"
                    type="text"
                    v-if="hasExpend"
                    @click="isExpend = !isExpend"
                    class="ss-search-condition__toggle-btn"
                    :class="{ 'is-expend': isExpend }"
                >
                    {{ isExpend ? '收起' : '展开' }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { addResizeListener, removeResizeListener } from '../../resize-event';
import { throttle } from 'throttle-debounce';
export default {
    name: 'SsSearchCondition',
    props: {
        size: {
            type: String,
            default: 'small'
        },
        inline: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        hasExpend: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        labelPosition: {
            type: String,
            default: 'right'
        },
        labelWidth: {
            type: String,
            default: '100px'
        },
        model: {
            type: Object,
            default: () => {
                return {};
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            ref: Symbol('form'),
            isExpend: false,
            opsWidth: 0,
            inputsWidth: 0
        };
    },
    methods: {
        search() {
            this.$emit('search');
        },
        reset() {
            console.log(this.$refs[this.ref]);
            this.$refs[this.ref].resetFields();
            this.$emit('reset');
            this.search();
        },
        handleResize() {
            let computedStyle;
            if (window.getComputedStyle) {
                computedStyle = getComputedStyle(this.$refs.ops.$el, null);
            } else {
                computedStyle = this.$refs.ops.$el.currentStyle; //兼容IE的写法
            }

            let opsPlaceholder = document.querySelector(
                '.ss-search-condition__ops_placeholder'
            );

            let opsEle = document.createElement('div');
            opsEle.className = 'ss-search-condition__ops_placeholder';
            opsEle.style.width = computedStyle.width;
            opsEle.style.height =
                parseInt(computedStyle.height) +
                parseInt(computedStyle.marginTop) +
                parseInt(computedStyle.marginBottom) +
                'px';
            if (this.hasExpend && this.isExpend) {
                this.$nextTick(() => {
                    let moreEle = this.$refs.more;
                    moreEle.appendChild(opsEle);
                    opsPlaceholder &&
                        opsPlaceholder.parentNode.removeChild(opsPlaceholder);
                });
            } else {
                let inputsEle = this.$refs.inputs.$el;
                inputsEle.appendChild(opsEle);
                opsPlaceholder &&
                    opsPlaceholder.parentNode.removeChild(opsPlaceholder);
            }
        }
    },
    mounted() {
        addResizeListener(this.$el, throttle(300, this.handleResize));
    },
    beforeDestroy() {
        if (this.$el && this.handleResize)
            removeResizeListener(this.$el, this.handleResize);
    }
};
</script>
<style lang="scss">
.ss-search-condition {
    position: relative;
    margin-bottom: 10px;
    &__inputs {
        flex-wrap: wrap;
    }
    &__ops {
        position: absolute;
        right: 0;
        bottom: 0;
        button {
            margin-left: 10px;
        }
    }
    &__ops_placeholder {
        float: left;
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
