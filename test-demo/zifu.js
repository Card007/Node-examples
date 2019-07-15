function returnS(s){
    let n = ''
    for (let i = 0; i < s.length; i++) {
        n+=s[s.length-1-i]
    }
    return n
}


let ss = returnS('linhongmeng')
console.log(ss)