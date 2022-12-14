import puppeteer from "puppeteer";
  
export const MedicalOptionsService = async(searchResult) => {


    try{
        let passedSearchResult = searchResult
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.mendeley.com/?interaction_required=true');
        const typing = async(focus,text,Btn) => {
            await page.focus(focus)
            await page.keyboard.type(text)
            await page.evaluate((Btn) => { document.querySelector(Btn).click()}, Btn);

          }
      
        //other actions...
       console.log('testing..........')
            const getData = async() => {
                    let testIn;
                    return await new Promise(resolve => {  
                    setTimeout(async() => {
                                await page.click('#onetrust-accept-btn-handler')

                        /* Authentication on website */

                                let clickInSignIn = await page.evaluate(() => document.querySelectorAll(".black-scheme")[4].click())
                                setTimeout(async() => {

                                        await typing("#bdd-email","jjlj19713@gmail.com",".continueBtn");
                                        
                                    setTimeout(async() => {

                                        await typing("#bdd-password","Ali2728.","#bdd-elsPrimaryBtn");

                                        }, 2000)

                            /* User Searching */

                                    setTimeout(async() => {

                                            await typing("#search-mendeley",`${passedSearchResult}`,".qe-search-button");

                                        }, 15000)

                        /* View User Search Result */
                                        setTimeout(async() => {
                                            testIn = await page.evaluate(() => { return Array.from(document.querySelectorAll('.qe-results-list'),(e) => ({
                                                    title: e.querySelector("article").innerText,
                                                    link:e.querySelector(".qe-article-card-doi").href                                    
                                            }))
                                        
                                        })
                                            return resolve(testIn)                   

                                            }, 25000)
                                        
                                
                                    }, 4000)
                            
                            }, 3000)
                    
                        })

                    }
                    let data = await getData()
                     return data
                   // await browser.close();
      

    }
    catch(error){
        console.log(error)
    }

 }




