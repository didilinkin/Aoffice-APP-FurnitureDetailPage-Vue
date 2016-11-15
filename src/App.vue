<template>
    <div id="app">
        <AppNav msg="升降舒适办公椅"/>
        <AppContent />
    </div>

</template>

<script>
import AppNav from './component/nav.vue'
import AppContent from './component/content.vue'
export default {
    name: 'app',
    props: ['msg'],
    components: { AppNav,AppContent }
}
</script>

<style lang="sass?indentedSyntax">
@import './sass/mixin.sass'
#app
    +REM(padding-top,7.5px)
    +REM(padding-left,16px)
    +REM(padding-right,16px)
    width: ((375px-(16px)*2))/37.5px*1rem
    background:
        image: url(./assets/bGSeviceBanner1@2x.png)
        size: 100% auto
        repeat: no-repeat
</style>
