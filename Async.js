// const getWeb = function(){
//     requestSomething()
//     setData()
//     return console.log("3.程序结束")
// }

// const requestSomething = function(){
//     setTimeout(() => console.log('1.网页数据爬取完毕！'),2000)
// }

// const setData = function(){
//     console.log('2.开始处理数据！')
// }

// getWeb()


const getWeb = async function(){
    await requestSomething().catch(e => console.log(e))
    setData()
    return console.log("3.程序结束")
}

const requestSomething = function(){
    return new Promise((resolve, reject) => {
        // let err = '1.爬取失败！'
        if(typeof err !=  'undefined'){
            reject(err)
        } else (
            setTimeout(() => {
                console.log('1.网页数据爬取完毕！')
                resolve()
            },2000)
        )
    })
}

const setData = function(){
    console.log('2.开始处理数据！')
}

getWeb()