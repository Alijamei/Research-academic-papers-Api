import puppeteer from "puppeteer";

export const semanticScholar = async(searchResult,pageNumber) => {
 
 try{
        let passedSearchResult = searchResult
        let thePageNumber = pageNumber.page

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        if(thePageNumber == 1){
             await page.goto(`https://www.semanticscholar.org/search?q=${passedSearchResult}&sort=relevance`);
        }
        if(thePageNumber != 1){
             await page.goto(`https://www.semanticscholar.org/search?q=${passedSearchResult}&sort=relevance&page=${thePageNumber}`);
        }
     
                       const getData = async() => {
                         let example;
                          return await new Promise(resolve => {
                             setTimeout(async() => {
                            
                                  example = await page.evaluate(() => {
                                      const elements = document.querySelectorAll('.cl-paper-row');
                                      const result = [];
                                                              
                                      for (let i = 0; i < elements.length; i++) {
                                        let doesLinkExist = elements[i].querySelector(".cl-paper-action__button-container a")
                                        if(doesLinkExist != null){
                                               result.push({title:elements[i].querySelector('.cl-paper-title').innerText,link:doesLinkExist.href});
                                        }
                                      }
                                      return result;
                                      
                                    });     
                                    return resolve(example);

                                                                                                    
                              },2000)
                          })
                     
                        }
                        let data = await getData()
                        return data

    }
   
    catch(error){
       console.log(error)
    }
  

    
}

 