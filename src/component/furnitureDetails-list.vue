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
    mounted: function () {
        this.heightRevise()
    },
    methods: {
        say: function (message) {
            // alert(message) 第一版暂未添加轮播效果
        },
        heightRevise: function(){
            // 不能立刻执行,因为ajax内的数据还没有塞入,所以会是空值
            setTimeout(() => {
                const furnitureObj = document.getElementsByTagName('furnitureimg')
                const furnitureObj_width = furnitureObj[0].offsetWidth //只需要获取第一个对象的宽度即可
                // alert(furnitureObj_width)
                for (var i = 0; i < furnitureObj.length; i++){
                    furnitureObj[i].style.height = furnitureObj_width + 'px'
                }
                // object.style.height="50px"
            }, 100)
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
        overflow: hidden
        width: 47%
        /* 高度值应该与高度一直保持统一,暂未修改 */
        +REM(height,146px)
        margin: 1.5%
        img
            +w-h(100%,100%)
            object-fit: cover
        img[src=""]
            opacity: 0
</style>
