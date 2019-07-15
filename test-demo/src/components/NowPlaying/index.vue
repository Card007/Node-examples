<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="/images/movie_1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>狮子王</h2>
                    <p>观众评分:<span class="grade">9.2</span></p>
                    <p>主演: 辛巴，木法沙，刀疤</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_2.jpg" alt=""></div>
                <div class="info_list">
                    <h2>蜘蛛侠：英雄远征</h2>
                    <p>观众评分:<span class="grade">9.3</span></p>
                    <p>主演: 汤姆·赫兰德，赞达亚，杰克·吉伦哈</p>
                    <p>今天56家影院放映555场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>狮子王</h2>
                    <p>观众评分:<span class="grade">9.2</span></p>
                    <p>主演: 辛巴，木法沙，刀疤</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_2.jpg" alt=""></div>
                <div class="info_list">
                    <h2>蜘蛛侠：英雄远征</h2>
                    <p>观众评分:<span class="grade">9.3</span></p>
                    <p>主演: 汤姆·赫兰德，赞达亚，杰克·吉伦哈</p>
                    <p>今天56家影院放映555场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>狮子王</h2>
                    <p>观众评分:<span class="grade">9.2</span></p>
                    <p>主演: 辛巴，木法沙，刀疤</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_2.jpg" alt=""></div>
                <div class="info_list">
                    <h2>蜘蛛侠：英雄远征</h2>
                    <p>观众评分:<span class="grade">9.3</span></p>
                    <p>主演: 汤姆·赫兰德，赞达亚，杰克·吉伦哈</p>
                    <p>今天56家影院放映555场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>狮子王</h2>
                    <p>观众评分:<span class="grade">9.2</span></p>
                    <p>主演: 辛巴，木法沙，刀疤</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/movie_2.jpg" alt=""></div>
                <div class="info_list">
                    <h2>蜘蛛侠：英雄远征</h2>
                    <p>观众评分:<span class="grade">9.3</span></p>
                    <p>主演: 汤姆·赫兰德，赞达亚，杰克·吉伦哈</p>
                    <p>今天56家影院放映555场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    
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
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>


