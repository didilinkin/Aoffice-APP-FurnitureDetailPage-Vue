<template>
    <aboutuscontent>
        <p>
            A+OFFICE致力于给我们的客户提供除租赁服务以外的其他相关服务，
            即与本土装修团队合作，为我们的客户打造舒适专业的办公环境；
        </p>
        <p> 凡A+OFFICE的会员采用本平台所提供的装修团队，即可享受相应的装修折扣; </p>
        <p> 凡通过A+OFFICE租赁办公室的客户再使用装修服务时还可享受其他折扣。 </p>
        <p>
            凡A+OFFICE的会员使用装修服务后，在我平台采购办公家具可享受
            <red>{{ discount }}</red>折。
        </p>
    </aboutuscontent>
</template>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'

/* 关于我们-模块 */
aboutUs p
    +REM(padding-top,14.8px)
    @extend %text-font
    +REM(line-height,21px)
    red
        font-weight: bold
        color: red
</style>