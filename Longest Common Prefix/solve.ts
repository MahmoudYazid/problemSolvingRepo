function longestCommonPrefix(strs: string[]): string {
    let Final:string="";
  
    var FixedPointer: any = 0;
    var stop:boolean=false
    var Accuricy: number = 0;
    var movementPointer:number=1
    var letterPoniter:number=0
    var ElementNo:number=strs.length
    var accuricyRoataion: number = 0;
  
    if(strs.length==1){
        return strs[0]
    }
    
    while(!stop){
        
        if (
          strs.length-1 < movementPointer 
        ){
            movementPointer=1
            
        
        }
        // console.log(`movementpointer :${movementPointer}`);
        // console.log(`letterpointer :${letterPoniter}`);
       if (strs[FixedPointer] == "" || strs[movementPointer]==""){
        return""
       }
         if (
           strs[FixedPointer][letterPoniter] ==
           strs[movementPointer][letterPoniter]
         ) {
           Accuricy++;

           if (Accuricy == ElementNo - 1) {
             Final = String(Final) + String(strs[FixedPointer][letterPoniter]);
             movementPointer = 1;
             letterPoniter++;

            //  console.log(`Accuricy :${Accuricy}`);
            //  console.log(`accuricyRoataion:${accuricyRoataion}`);
            //  console.log(`ElementNo:${ElementNo}`);
             Accuricy = 0;
             accuricyRoataion++;
             if (strs[0].length == 1 && accuricyRoataion == 1) {
               return Final;
             }
             if(accuricyRoataion>strs[0].length){
                return strs[0]
             }
           }
         } else {
           return Final;
         }
        movementPointer++


        


       
        


    }
    


    return Final;
}
console.log(longestCommonPrefix(["abaa", "abaa", "abaa", "abaa"]));

