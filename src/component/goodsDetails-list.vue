<template>
    <div id="goodsDetails-list">
        <ul>
            <li v-for="item in goodsDetails_Arr[0]">
                <goods-title><b> {{ item.title }}  </b></goods-title>
                <goods-content><b> {{ item.content }}  </b></goods-content>
            </li>
        </ul>
        <!--
            根据JSON数据返回的数据,在mutations.js文件中判断状态
            如果Note_show[0].display的值是否为 show 
            则展示该部分
        -->
        <h2 v-if="Note_show[0].judgeShow">
            <b> 注: {{ Note[0].content }} </b>
        </h2>
        <!-- 如果判断为不为真,显示空标签 -->
        <h2 v-else></h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({
        goodsDetails_Arr: 'goodsDetails_Arr',
        Note: 'goodsDetails_Note',
        Note_show: 'goodsDetails_Note_show'
    })
}
</script>

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'
=goodsDetails-text($color,$backgroundColor,$width,$align)
    @extend %dib
    +REM(padding-top,13px)
    padding-right: 2%
    +REM(padding-bottom,13px)
    padding-left: 2%
    +REM(margin-bottom,15px)
    +REM(border-radius,2px)
    width: $width
    color: $color
    +bC($backgroundColor)
    +REM(font-size,12px)
    text-align: $align
    

#goodsDetails-list 
    li
        @extend %flexWrap
        /* 商品详情-左侧文字样式 */
        goods-title
            +goodsDetails-text(#FFF,$title-color,(56%-4%),right)
        /* 商品详情-右侧文字样式 */
        goods-content
            +goodsDetails-text($text-color,$textBackground-color,(40%-4%),left)
            margin-left: 4%
    h2
        /* 通用文字内容样式 */
        @extend %text-font
        +REM(line-height,21px)
</style>