var button = document.getElementById('btn')
button=addEventListener('submit',calculate)
function calculate(e){
    e.preventDefault()
    heightInput=document.querySelector('.inputHeight').value
    weightInput=document.querySelector('.inputWeight').value
    heightInput=heightInput/100
    let bmiValue=weightInput/(heightInput*heightInput)
    if(bmiValue>0 && bmiValue<=18){
        document.getElementById('output').innerHTML=bmiValue
        document.getElementById('notice').innerHTML='Under Weight!'
        document.getElementById('notice').style.color='red'
        document.getElementById('output').style.color='red'
    }
    if(bmiValue>18 && bmiValue<=25){
        document.getElementById('output').innerHTML=bmiValue
        document.getElementById('notice').innerHTML='Normal Weight!'
        document.getElementById('notice').style.color='green'
        document.getElementById('output').style.color='green'
    }
    else if(bmiValue>25 && bmiValue<=30){
        document.getElementById('output').innerHTML=bmiValue
        document.getElementById('notice').innerHTML='Over Weight!'
        document.getElementById('notice').style.color='#b2b2ff'
        document.getElementById('output').style.color='#b2b2ff'
    }
    
    else if(bmiValue>29.9){
        document.getElementById('output').innerHTML=bmiValue
        document.getElementById('notice').innerHTML='Obese!'
        document.getElementById('notice').style.color='#8b0000'
        document.getElementById('output').style.color='#8b0000'
    }
    else{
        document.getElementById('output').innerHTML=bmiValue
        document.getElementById('notice').innerHTML='Fill Details'
        document.getElementById('notice').style.color='#79d1cc'
        document.getElementById('output').style.color='#79d1cc'
    }
}

