<template>
    <div class="cinema_body">
        <Loading v-if="isLoading"/>
        <Scroller v-else :handScroll="handScroll" :handTouchEnd="handTouchEnd">
            <ul>
                <li class="pulldown">{{ pullDownMsg }}</li>
                <li v-for="ciname in cinames" :key="ciname.id">
                    <div>
                    <span>{{ ciname.nm }}</span>
                        <span class="q"><span class="price">{{ ciname.sellPrice }}</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>{{ ciname.addr }}</span>
                        <span>{{ ciname.distance }}</span>
                    </div>
                    <div class="card">
                        <div v-for='(item,key) in ciname.tag' v-if="item === 1" :key="key" :class="key | classCard">{{ key | formatCard }}</div>
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
export default {
    name: 'CiList',
    data(){
        return {
            cinames : [],
            pullDownMsg:'',
            isLoading: true,
            prevCityId: -1,
        }
    },
    activated(){
        let cityId = this.$store.state.city.id 
        if(this.prevCityId === cityId){return}
        this.isLoading = true
        this.axios.get('/api/cinemaList?cityId='+cityId).then((res)=>{
            let msg = res.data.msg
            if(msg === 'ok'){
                this.cinames = res.data.data.cinemas
                this.isLoading = false
                this.prevCityId = cityId
            }
        })
    },
    methods:{
        handScroll(pos){
             if(pos.y > 28){
                this.pullDownMsg = '正在更新'
            }
        },
        handTouchEnd(pos){
            if(pos.y > 30 ){
                setTimeout(()=>{
                    this.pullDownMsg = '更新成功'
                },1000)
                setTimeout(()=>{
                    this.pullDownMsg = ''
                },2000)
                
            }
        }
    },
    filters: {
        formatCard(key){
            let card = [
                {key: 'allowRefund',value: '改签'},
                {key: 'endorse',value: '退'},
                {key: 'sell',value: '折扣卡'},
                {key: 'snack',value: '小吃'},
            ]
            for (let i = 0; i < card.length; i++) {
                if(card[i].key === key){
                    return card[i].value
                }
            }
            return ''
        },
        classCard(key){
             let card = [
                {key: 'allowRefund',value: 'or'},
                {key: 'buyout',value: 'or'},
                {key: 'sell',value: 'bl'},
                {key: 'snack',value: 'bl'},
            ]
            for (let i = 0; i < card.length; i++) {
                if(card[i].key === key){
                    return card[i].value
                }
            }
            return ''
        }
    }
}
</script>


<style scoped>
#content .cinema_body{ flex:1; overflow: auto}
.cinema_body ul{ padding:20px;overflow: hidden;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
.cinema_body .pulldown{margin:0;padding:0;border:none}
</style>
