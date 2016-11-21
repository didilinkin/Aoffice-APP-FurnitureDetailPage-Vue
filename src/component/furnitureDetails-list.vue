<template>
    <div id="furnitureDetails-list">
        <furnitureImg v-for="item in furnitureImg_Arr[0]" v-on:click="say('打开轮播')">
            <img v-bind:src="item.furnitureImgUrl" />
        </furnitureImg>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    methods: {
        say: function (message) {
            alert(message)
        }
    },
    computed: mapGetters(['furnitureImg_Arr'])
}
</script>

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'

#furnitureDetails-list
    @extend %flexWrap
    furnitureImg
        @extend %dib
        width: 47%
        margin: 1.5%
        img
            width: 100%
        img[src=""]
            opacity: 0
</style>
