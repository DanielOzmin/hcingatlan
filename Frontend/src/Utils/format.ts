export const formatNumber = (value: number)=>{
    let formatedNumber:any = []
    let stringValue = value.toString()
    for(let i=0; i < stringValue.length; i++){
        if((stringValue.length - i)%3 == 0 && i != 0){
            formatedNumber.push(".")
        }
        formatedNumber.push(stringValue[i])
    }
    return formatedNumber.join("")
} 

