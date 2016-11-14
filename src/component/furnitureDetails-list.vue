<template>
    <div id="furnitureDetails-list">
        <furnitureImg v-for="item in items" v-on:click="say('打开轮播')">
            <img v-bind:src="item.img" />
        </furnitureImg>
    </div>
</template>

<script>
export default {
    name: 'furnitureDetails-list',
    data () {
        return {
            items: [
                { img: require('../assets/picChairDetail1-1@2x.png') },
                { img: require('../assets/picChairDetail1-2@2x.png') },
                { img: require('../assets/picChairDetail1-3@2x.png') },
                { img: require('../assets/picChairDetail1-4@2x.png') }
            ]
        }
    },
    methods: {
        say: function (message) {
            alert(message)
        }
    }
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
</style>