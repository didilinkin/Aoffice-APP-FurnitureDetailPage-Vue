<template>
    <div id="app">
        <AppNav/>
        <AppContent />
        <!--<button @click='addState'>添加state</button>-->
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'   // 引入Vuex‘获取方法 与 行为方法’
import AppNav from './component/nav.vue'
import AppContent from './component/content.vue'

export default {
    components: { AppNav,AppContent },
    mounted: function () {
        this.addState()
    },
    methods: mapActions([ 'addState' ])
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

/*测试修改state*/
button
    width: 3rem
    height: 3rem
    background-color: red
</style>
