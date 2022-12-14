import { googleScholar } from "./googleScholarService.js"
import { semanticScholar } from "./semanticScholarsService.js"

  let num = 0

  let List = []
 

 export const searchingAlgorithm = async(searchResult,pageNumber) => {
    let semanticScholarData = await semanticScholar(searchResult,pageNumber)
    let googleScholarData= await googleScholar(searchResult,pageNumber) 
   
    let IsLevel = 'GoToGooglescholarArray'
    let whichLengthBigger = Math.max(googleScholarData.length , semanticScholarData.length)
    function test(){
      while(whichLengthBigger > num){
          if(IsLevel == 'GoToSemanticscholarArray' && semanticScholarData.length > num
          || !(googleScholarData.length > num)
          ){

              List.push(semanticScholarData[num])       
              num = num + 1
              /* Now Go to Google Array */
              IsLevel = "GoToGooglescholarArray"

          }     
          else if(googleScholarData.length > num){
               List.push(googleScholarData[num])  
               /* Now Go to Semantic Array */
               IsLevel = "GoToSemanticscholarArray"
               /* Sementicarray is done now let just work with GoogleArray */
               if(semanticScholarData.length <= num){
                   num = num + 1        
               }                  
          }
        }   
      
       return List
       
  }
    console.log(test())
    

 }














//  export const tesTin = async() => {
  
//       let sementicScholarData = await semanticScholar()
//       console.log(sementicScholarData)
//       let googleScholarData= await googleScholar()
//       console.log(googleScholarData)
//     let IsLevel = 'GoToGooglescholarArray'
//     let isUpdated ="GoToGooglescholarArray"
//     let whichLengthBigger = Math.max(googleScholar.length , semanticScholar.length)
//     function test(){
//       while(whichLengthBigger > num){
//           if(IsLevel == 'GoToSemanticscholarArray' && semanticScholar.length > num
//           || !(googleScholar.length > num)
//           ){
//               List.push(semanticScholar[num])       
//               num = num + 1
//               /* Now Go to Google Array */
//               IsLevel = "GoToGooglescholarArray"

//           }     
//           else if(googleScholar.length > num){
//                List.push(googleScholar[num])  
//                /* Now Go to Semantic Array */
//                IsLevel = "GoToSemanticscholarArray"
//                /* Sementicarray is done now let just work with GoogleArray */
//                if(semanticScholar.length <= num){
//                    num = num + 1        
//                }                  
//           }
//         }   
      
//        return 'List'
       
//   }
//     console.log(test())
    

 