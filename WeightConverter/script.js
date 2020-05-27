document.getElementById('inputWeight').addEventListener('input', function(e){
    let kgs=e.target.value
    document.getElementById('grams').innerHTML=`Grams:${kgs*1000}`
    document.getElementById('pounds').innerHTML= `Pounds:${kgs*2.205}`
    document.getElementById('ounces').innerHTML= `Ounces:${kgs*35.274}`
})


    
    
