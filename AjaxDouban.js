var log = function(){
    console.log.apply(console, arguments)
}

index=0

var e = function(selector){
    return document.querySelector(selector)
}

var addHtml = function(elemnt, html){
    elemnt.insertAdjacentHTML('beforeend', html)
}

var movieDiv = e('body')

addHtml(movieDiv,`
    <div id="movie-list">
        <div id="movie-img">
        </div>
        <div id="div-button">
            <button id='add-button'>添加</button>
            <button id='remove-button'>删除</button>
        </div>
    </div>
`)

var ajax = function(method, path, responseCallback){
    var r = new XMLHttpRequest()
    var l = []
    r.open(method, path, true)
    r.onreadystatechange = function(){
        if (r.readyState === 4){
            l.push(responseCallback(r))
        }
    }
    r.send()
    return l
}

var takeId = function(r){
    var movie = JSON.parse(r.response)
    var movieList = movie.subjects
    var l = []
    for (let i = 0; i < movieList.length; i++) {
        l.push(movieList[i].id)
    }
    return l
}

var top250Url = 'https://api.douban.com/v2/movie/top250'
var movieUrl = 'https://api.douban.com/v2/movie/'

//所有id
var movieId = ["1292052", "1291546", "1295644", "1292720", "1292063", "1292722", "1291561", "1295124", "3541415", "3011091", "2131459", "3793023", "1292001", "1291549", "1292064", "1292213", "1889243", "1291560", "1291841", "5912992"]
var movieList = []


for (let i = 0; i < movieId.length; i++){
    movieList.push(movieUrl + movieId[i])
}

var addImag = function(){
    if (index < 21){
        var imgDvi = e('#movie-img')
        var imgUrl = ajax('GET', (movieList[index]), function(r){
            var movie = JSON.parse(r.response)
            addHtml(imgDvi, `
                <img id="img-${index}"src=${movie.image}>
                `)
            index += 1
        })
        imgUrl
    } else {
        index = 0
    }
}

var removeImg = function(){
    var imgList = e('#movie-img').children 
    imgList[index].remove()
    index -= 1
}

var addButton = e('#add-button')
var removeButton = e('#remove-button')

addButton.addEventListener('click', addImag)
removeButton.addEventListener('click', removeImg)

