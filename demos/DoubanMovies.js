var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')
var movies = []

var log = function(){
    console.log.apply(console, arguments)
}

var movie = function(){
    this.id = 0
    this.name = ''
    this.score = 0
    this.pic = ''
}

var saveMovie = function(movies){
    var path = 'movie.txt'
    var data = JSON.stringify(movies, null, 2)
    fs.appendFile(path, data, function(error){
        if(error == null){
            log('保存成功！')
        } else {
            log('保存失败',error)
        }
    })

}

//接收一个div，提取里面的电影信息
var takeMovie = function(div){
    var e = cheerio.load(div)
    var m = new movie()
    m.name = e('.title').text()
    m.score = e('.rating_num').text()
    var pic = e('.pic')
    m.pic = pic.find('img').attr('src')
    m.id = pic.find('em').text()
    return m
}

var requstMovie = function(url){
    request(url, function(error, response, body){
        if (error === null && response.statusCode === 200){
            var e = cheerio.load(body)
            var movieDiv = e('.item')
            for (let i = 0; i < movieDiv.length; i++) {
                let movieInfo = takeMovie(movieDiv[i])
                log('正在爬取' + movieInfo.name)
                movies.push(movieInfo)
            }
            if (movies.length === 250){
                var sortM = movies.sort(sortMovie('id'))
                saveMovie(sortM)
            }
        } else {
            log('爬取失败', error)
        }
    })
    
}

var top250Url = function(){
    let l = ['https://movie.douban.com/top250']
    var urlContinue = 'https://movie.douban.com/top250?start='
    let cont = 25
    for (let i = 0; i < 10; i++) {
        l.push(urlContinue+cont)
        cont += 25
    }
    return l
}

var sortMovie = function(id){
    return function(obj ,obj1){
        var value = obj[id]
        var value1 = obj1[id]
        return value - value1
    }
}

var __main = function(){
    var url = top250Url()
    for (let i = 0; i < url.length; i++) {
        requstMovie(url[i])
    }
    // requstMovie('https://movie.douban.com/top250') 
}

__main()