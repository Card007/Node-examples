// const logNumber = function(){
//     timeoutN()
//     console.log(2)
//     return console.log("程序开始返回")
// }

// const timeoutN = function(){
//     setTimeout(() => console.log(1),2000)
// }

// logNumber()



const logNumber = async function(){
    await timeoutN()
    console.log(2)
    return console.log("程序开始返回")
}

const timeoutN = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1)
            resolve()
        },2000)
    })
}

logNumber()