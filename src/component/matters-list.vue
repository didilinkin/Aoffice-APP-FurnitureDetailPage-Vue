<template>
    <ul id="mattersList">
        <li v-for="(item, index) in items">
            <NO class="mattersFont">{{ index + 1 }}、</NO>
            <p class="mattersFont">{{ item.message }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    el: '#mattersList',
    data() {
        return{
            items: [
                { message: '商品为厂家直销;' },
                { message: '商品最终以实物为准;' },
                { message: '商品任何质量问题均由厂家直接解决;' },
                { message: '一次性购买5000元家具可享受青岛市内免费运输服务;' }
            ]
        }
    }
}
</script>
<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'

/* 注意事项-模块 */
matters li
    overflow: hidden
    display: block
    NO
        @extend %dib
        float: left
        +REM(width,24px)
    p
        @extend %dib
        float: right
        +REM(width,311px-25px)
    /* 注意事项-字体样式 */
    .mattersFont
        +REM(font-size,14px)
        +REM(line-height,23px)
        color: $text-color
</style>