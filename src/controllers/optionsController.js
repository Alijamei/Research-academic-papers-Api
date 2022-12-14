import { MedicalOptionsService } from "../services/optionServices/MedicalService.js"
import { googleScholar } from "../services/optionServices/googleScholarService.js"
import { semanticScholar } from "../services/optionServices/semanticScholarsService.js"
import { searchingAlgorithm } from "../services/optionServices/searchingAlgorithm.js"

export const getUserOption = async(req,res) => {

    try{
        let pageNumber = req.params
        let type = req.body.type
        let searchResult = req.body.search
        if(type === 'General'){
              await searchingAlgorithm(searchResult,pageNumber)
        }
         if(type === 'Medical'){
             console.time("timeTaken");
             console.log(await MedicalOptionsService(searchResult))   
             console.timeEnd("timeTaken");          
  
          }
              
    }
    catch(error){
       console.log(error)
    }

}
