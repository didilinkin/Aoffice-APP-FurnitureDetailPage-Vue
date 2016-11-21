<template>
    <div id="goodsDetails-list">
        <ul>
            <li v-for="item in goodsDetails_Arr">
                <goods-title><b> {{ item.title }}  </b></goods-title>
                <goods-content><b> {{ item.content }}  </b></goods-content>
            </li>
        </ul>
        <h2><b> 注: {{ Note }} </b></h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({
        goodsDetails_Arr: 'goodsDetails_Arr',
        Note: 'goodsDetails_Note'
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