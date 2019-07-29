<template>
    <div>
        <div class="messageWrap" @touchstart="handleCancel"></div>
        <div class="messageBox">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <div class="boxButton">
                <div @touchstart="handleCancel">{{ cancel }}</div>
                <div@touchstart="handleOk">{{ ok }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageBox'
}
</script>

<style scoped>
    .messageWrap{
        position:fixed;
        background-color: black;
        height: 100%;
        width: 100%;
        z-index:100;
        opacity: 0.8;
        top:0;
    }

    .messageBox{
        position: absolute;
        height:180px;
        width: 250px;
        text-align: center;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        border-radius: 8px;
        box-shadow:0px 0px 10px rgba(0,0,0,0.5);
        border: 1px solid #dcdcdc;
        overflow: hidden;
        z-index: 101;
    }

    .messageBox h2{
        position: relative;
        top:10px;
    }

    .messageBox p{
        position: relative;
        top: 50px;
        padding: 0;
    }

    .boxButton{
        width: 101%;
        position: absolute;
        bottom: -1px;
        left: -1px;
        display: flex;
        flex-direction: row;
        line-height: 40px;
    }

    .boxButton div{
        flex:1;
        border: 1px solid #dcdcdc;
    }
</style>


