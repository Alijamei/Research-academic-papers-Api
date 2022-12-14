import puppeteer from "puppeteer";


export const googleScholar = async(searchResult,pageNumber) => {

 

    try{
        let thePageNumber = pageNumber.page
        let passedSearchResult = searchResult
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        //  if(thePageNumber == 1){
            await page.goto(`https://scholar.google.com/scholar?start=0&q=${passedSearchResult}&hl=en&as_sdt=0,5`);
        //  }
        //  let googlePageAlgo = (parseInt(thePageNumber) - 1) * 10;
        //  console.log(googlePageAlgo)
        //  if(thePageNumber != 1){
        //     await page.goto(`https://scholar.google.com/scholar?start=${googlePageAlgo}&q=${passedSearchResult}&hl=en&as_sdt=0,5`);

        // }
            // const typing = async(focus,text,Btn) => {
        //     await page.focus(focus)
        //     await page.keyboard.type(text)
        //     await page.evaluate((Btn) => { document.querySelector(Btn).click()}, Btn);
        // }
        
        // // other actions...
        //  await typing("#gs_hdr_tsi",`${passedSearchResult}`,"#gs_hdr_tsb");
          /* View User Search Result */
      const getData = async() => {
        
          return await new Promise(resolve => {
                setTimeout(async() => {
                
                   let test =  await page.evaluate(() => { return Array.from(document.querySelectorAll('.gs_ri'),(e) => ({
                            title: e.querySelector('.gs_rt').innerText,
                            link: e.querySelector('a').href    
                        }))
                    })
                
                    return resolve(test)
                    
                    
                    },1000)
                })

   }
        
        let data = await getData()
        return data

}
    catch(error){
       console.log(error)
    }

}

