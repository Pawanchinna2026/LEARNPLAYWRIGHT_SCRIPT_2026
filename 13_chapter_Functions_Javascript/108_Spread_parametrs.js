function  hasError(...codes){
    return codes.some(c=>c>=400)
}
let responseCodes=[200,201,404]
let responseCodes1=[200,201,404,500]
hasError(responseCodes)
