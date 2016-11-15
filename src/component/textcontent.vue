<template>
    <div id="textcontent">
        <!-- 家具详情 -->
        <furnitureDetails class="modules">
            <h2><b>家居详情</b></h2>
            <string />
            <!-- 家具详情 列表 -->
            <furnitureDetails-list></furnitureDetails-list>
        </furnitureDetails>

        <!-- 商品详情 -->
        <goodsDetails class="modules">
            <h2><b>商品详情</b></h2>
            <string />
            <!-- 商品详情 列表 -->
            <goodsDetails-list></goodsDetails-list>
        </goodsDetails>

        <!-- 使用说明(替换完成) -->
        <explain class="modules">
            <h2><b>使用说明</b></h2>
            <string />
            <img :src="instruction" />
        </explain>

        <!-- 家居定制服务(替换完成) -->
        <customized class="modules">
            <h2><b>家居定制服务</b></h2>
            <string />
            <!-- 家居定制服务 列表 -->
            <customized-list></customized-list>
        </customized>

        <!-- 注意事项(替换完成) -->
        <matters class="modules">
            <h2><b>注意事项</b></h2>
            <string />
            <!-- 注意事项 列表 -->
            <matters-list></matters-list>
        </matters>
    </div>
</template>

<script>
import furnitureDetailsList from './furnitureDetails-list.vue' // 家具详情
import goodsDetailsList from './goodsDetails-list.vue' // 商品详情
import customizedList from './customized-list.vue' // 家具定制服务 列表
import mattersList from './matters-list.vue'   // 注意事项 列表

export default {
    name: 'textcontent',
    data () {
        return {
            discount: '95',
            instruction: require('../assets/instruction@2x.png')
        }
    },
    components: {
        'furnitureDetails-list': furnitureDetailsList,
        'goodsDetails-list': goodsDetailsList,
        'customized-list': customizedList,
        'matters-list': mattersList
    }
};
</script>
<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'

#textcontent
    +REM(padding-top,16.5px)
    +REM(padding-right,16px)
    +REM(margin-bottom,15.5px)
    +REM(padding-left,16px)
    +boxShadow(0px,2px,20px,rgba(143,153,175,.5))
    /* 4个文字内容模块公用样式 */
    .modules
        display: block
        +REM(padding-bottom,25px)
        h2
            @extend %title-font
        /* 实线 */
        string
            display: block
            +REM(height,1px)
            border-top: 1px solid $title-color
            +REM(border-bottom-width,1px)
            +REM(margin-top,14.8px)
            +REM(margin-bottom,14.8px)

/* 使用说明-模块 */
explain img
    width: 100%
</style>
