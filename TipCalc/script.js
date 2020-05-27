document.getElementById('calculate').addEventListener('click',buttonClick)
function buttonClick(e){
    
    var billAmt= document.getElementById('billamt').value
    var serviceQual= document.getElementById('serviceQual').value
    var peopleamt= document.getElementById('peopleamt').value
    let tipAmt=(billAmt*serviceQual)/peopleamt
    tipAmt=Math.round(tipAmt*100)/100
    tipAmt=tipAmt.toFixed(2)
    document.getElementById('totalTip').style.display="block"
    document.getElementById('tip').innerHTML=tipAmt
}