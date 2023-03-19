function isPalindrome(x: number): boolean {

    const spilitString: any = String(x).split("");
    const LengthOfWord: any = spilitString.length;
    var PointerStart:any=0
    var PointerEnd:any=LengthOfWord-1
    for(let pointerMover in spilitString ){ 
        
        
        
        if (
          (spilitString[PointerEnd] != spilitString[PointerStart] &&
            !(PointerEnd == PointerStart)) ||(spilitString[PointerEnd] != spilitString[PointerStart])
        ) {
          return false;
        }
        if(PointerEnd==PointerStart){
            return true;
        }

        PointerEnd = PointerEnd - 1;
        PointerStart = PointerStart + 1;
     
    }
     return true;
    
}
console.log(isPalindrome(-121));

