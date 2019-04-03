const twoList = function(){
    var list = []
    for (let i = 1; i < 101; i++) {
        list.push(i)
    }
    return list
}

const two = function(answer, list){
    mid = list.length / 2
    low = 0
    hig = 100
    while(true){
        if (answer > mid){
            console.log(answer +'>'+ mid)
            low = mid + 1
            mid = Math.round((hig+low)/2)
        } else if(answer < mid){
            console.log(answer +'<'+ mid)
            hig = mid - 1
            mid = hig - Math.round((hig-low)/2)
        }else{
            console.log(answer+'='+mid)
            return mid
        }
    }

}

var twoL = twoList()
two(49,twoL)
