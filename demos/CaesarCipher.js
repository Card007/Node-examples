var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'

var ensure = function(condition,message){
    if (!condition) {
        console.log('测试失败！！' + message)
    }
}

var find = function(s1,s2){
    var index = -1
    for (var i = 0; i < s1.length; i++){
        if (s1[i] == s2){
            index = i
            break
        }
    }
    return index
}

var trange = function(s){
    var reselt = ''
    for(var i = 0; i < s.length; i ++){
        n = find(lower,s[i])
        reselt += upper[n]
    }
    return reselt
}

var testTrange = function(){
    ensure(trange('nothlu') == 'NOTHLU', '转换失败！！！')
}

var encoding = function(coding, n){
    var reselt = ''
    var index = 0
    for (var i = 0; i < coding.length; i++){
        index = find(lower, coding[i])
        if (index != -1){
            reselt += lower[(index + n + 26) % 26]
        } else {
            index = find(upper, coding[i])
            if (index != -1){
                reselt += upper[(index + n + 26) % 26]
            }else{
                reselt += coding[i]
            }
        }
    }
    return reselt
}


var testEncoding = function(){
    ensure(encoding('af z',1) == 'bg a','测试失败')
}

var enCode = function(s){
    for (var i = 1; i < 26; i++){
        console.log(encoding(s,i))
    }
}

