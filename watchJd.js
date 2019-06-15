const puppeteer = require('puppeteer')

const url = 'https://paipai.jd.com/auction-detail/114533257?entryid=p0120003dbdnavi'

const requestUrl = async function(bool){
    const browers = await puppeteer.launch({headless:bool})
    const page = await browers.newPage()

    await page.setRequestInterception(true)
    await page.on('request',interceptedRequest => {
        if(interceptedRequest.url().endsWith('.jpg') || interceptedRequest.url().endsWith('.png')){
            interceptedRequest.abort();
        }else{
            interceptedRequest.continue();
        }
    })

    await page.setViewport({
        width: 1920,
        height: 1080,
    })

    await page.goto(url)

    const goods = page.$$eval('#auctionRecommend > div.mc > ul > li', el=>{
        try {
            for (let i = 0; i < el.length; i++) {
                let n = el[i].querySelector('div.p-name').textContent
                if(n.includes('音箱')){
                    return true
                } else {
                    return false
                }
            }
        } catch (error) {
            return false
        }
    })

    if(!bool){
        return console.log('网页已打开，不再监控')
    }
    
    await goods.then(async (b)=>{
        if(b){
            console.log('有货了！')
            await page.waitFor(2000)
            await browers.close()
            return requestUrl(false)
        }  else {
            console.log('还没货')
            console.log('三十分钟后再尝试')
            await page.waitFor(1800000)
            await browers.close()
            return requestUrl(true)
        }
    })

}

requestUrl(true)