<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if='isLoading'/>
        <Scroller v-else :handScroll="handScroll" :handTouchEnd="handTouchEnd">
            <ul>
                <li class="pulldown">{{ pullDownMsg }}</li>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show"><img @tap="gotodetal" :src="item.img | setWH('128.180')" alt=""></div>
                    <div class="info_list">
                        <h2>{{ item.nm }} <img v-if="item.version" src="@/assets/maxs.png"></h2>
                        <p>观众评分:<span class="grade">{{ item.sc }}</span></p>
                        <p>主演: {{ item.star }}</p>
                        <p>{{ item.showInfo }}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
    
</template>

<script>
export default {
    name: 'NowPlaying',
    data(){
        return {
            movieList: [],
            pullDownMsg:'',
            isLoading: true,
            prevCityId: -1,
        }
    },
    activated(){
        let cityId = this.$store.state.city.id
        if( this.prevCityId === cityId){return}
        this.isLoading = true
        this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res)=>{
            let msg = res.data.msg
            if(msg === 'ok'){
                this.movieList = res.data.data.movieList
                this.isLoading = false
                this.prevCityId = cityId
            }
        })
    },
    methods: {
        gotodetal(){
            console.log('点击了')
        },
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
    }
    
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 4px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pulldown{ margin:0;padding:0;border:none;}
</style>


