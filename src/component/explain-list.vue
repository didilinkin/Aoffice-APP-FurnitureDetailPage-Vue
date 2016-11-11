<template>
    <ul id="explainList">
        <li v-for="(item, index) in items">
            <NO class="explainFont">{{ index + 1 }}</NO>
            <p class="explainFont">{{ item.message }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    el: '#explainList',
    data() {
        return{
            items: [
                { message: '您可直接拨打我司电话，提出您的装修请求' },
                { message: '我们会尽快约定为你约定专家，实地并给予您专业的装修建议' },
                { message: '最终解释权归A+office所有' }
            ]
        }
    }
}
</script>
<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'

/* 使用说明-模块 */
explain li
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
    /* 说明文字-字体样式 */
    .explainFont
        +REM(font-size,14px)
        +REM(line-height,23px)
        color: $text-color
</style>