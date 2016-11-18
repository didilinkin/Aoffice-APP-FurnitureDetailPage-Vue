<template>
    <div id="nav">
        <span class="return" onClick="javascript:returnBtn()">
            <img src="../assets/return@2x.png">
        </span>
        <h1> {{ msg }} </h1>
        <span class="iconDialogue" onClick="javascript:dialogueBtn()">
            <img src="../assets/iconDialogue@2x.png">
        </span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(['msg'])
}
</script>

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'
%spanImg
    position: absolute
    img
        +REM(width,19.5px)
#nav
    position: relative
    extend %flexCenter
    text-align: center
    +REM(margin-top,20px)
    +REM(height,25px)
    span.return
        @extend %spanImg
        left: 0
    span.iconDialogue
        @extend %spanImg
        right: 0
    h1
        @extend %dib
        +REM(font-size,16px)
        color: #FFF
</style>
