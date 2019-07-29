<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroller',
    props:{
        handScroll:{
            type: Function,
            default: function(){}
        },
        handTouchEnd:{
            type: Function,
            default: function(){}
        }
    },
    mounted(){
        let scroll = new BScroll(this.$refs.wrapper,{
            tap: true,
            probeType: 1
        })

        this.scroll = scroll

        scroll.on('scroll',(pos)=>{
            this.handScroll(pos)
        })

        scroll.on('touchEnd',(pos)=>{
            this.handTouchEnd(pos)
        })
    },
    methods:{
        toScrollTop(y){
            this.scroll.scrollTo(0,y)
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
}

</style>

