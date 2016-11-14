<template>
    <div id="goodsDetails-list">
        <ul>
            <li v-for="item in goods">
                <goods-title><b> {{ item.title }}  </b></goods-title>
                <goods-content><b> {{ item.content }}  </b></goods-content>
            </li>
        </ul>
        <h2><b> 注: {{ note }} </b></h2>
    </div>
</template>

<script>
export default {
    name: 'goodsDetails-list',
    data () {
        return {
            goods: [
                {
                    title: '两人工位尺寸',
                    content: '1200*1200*750'
                },
                {
                    title: '蝴蝶架对桌2工作位售价',
                    content: '780元'
                },
                {
                    title: '蝴蝶架对桌4工作位售价',
                    content: '1380元'
                },
                {
                    title: '蝴蝶架对桌6工作位售价',
                    content: '1980元'
                },
            ],
            note: '工位不自带活动柜，活动柜单个售价160元'
        }
    }
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