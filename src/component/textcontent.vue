<template>
    <div id="textcontent">
        <!-- 关于我们 -->
        <aboutUs class="modules">
            <h2><b>关于我们</b></h2>
            <string />
            <!-- 关于我们-文字内容 -->
            <aboutus-content></aboutus-content>
        </aboutUs>

        <!-- 装修套餐 -->
        <decorationSet class="modules">
            <h2><b>装修套餐</b></h2>
            <string />
            <!-- 套餐列表 -->
            <set-list></set-list>
        </decorationSet>

        <!-- 装修流程 -->
        <decorationFlow class="modules">
            <h2><b>装修流程</b></h2>
            <string />
            <img :src="decorationFlow" />
        </decorationFlow>

        <!-- 使用说明 -->
        <explain class="modules">
            <h2><b>使用说明</b></h2>
            <string />
            <!-- 说明列表 -->
            <explain-list></explain-list>
        </explain>
    </div>
</template>

<script>
import aboutuscontent from './aboutus-content.vue'
import setlist from './setlist.vue'
import explainlist from './explain-list.vue'

export default {
    name: 'textcontent',
    data () {
        return {
            discount: '95',
            decorationFlow: require('../assets/decorationFlow.png')
        }
    },
    components: {
        'aboutus-content': aboutuscontent,
        'set-list': setlist,
        'explain-list': explainlist 
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

/* 装修流程-模块 */
decorationFlow img
    width: 100%
</style>
