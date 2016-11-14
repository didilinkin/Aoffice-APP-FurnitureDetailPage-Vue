<template>
    <ul id="customized-list">
        <li v-for="(item, index) in items">
            <NO class="customizedFont">{{ index + 1 }}、</NO>
            <p class="customizedFont">{{ item.message }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    el: '#customized-list',
    data() {
        return{
            items: [
                { message: '独家定制专属您的办公家具;' },
                { message: '定制流程请联系客服或拨打电话咨询;' }
            ]
        }
    }
}
</script>
<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'

/* 家居定制服务-模块 */
customized li
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
    /* 家居定制服务-字体样式 */
    .customizedFont
        +REM(font-size,14px)
        +REM(line-height,23px)
        color: $text-color
</style>