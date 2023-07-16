const ballon=document.getElementById('air')
const cloudOne=document.getElementById('cloud1')
const cloudTwo=document.getElementById('cloud2')
const cloudThree=document.getElementById('cloud3')
const cloudFour=document.getElementById('cloud4')
const cloudFive=document.getElementById('cloud5')
const javaS=document.getElementById('js')
const react= document.getElementById('react')
const graphic=document.getElementById('gql')

function move(){
    const incrementer= window.scrollY
    
    ballon.style.bottom=10 + incrementer * 0.1 + '%'

    cloudOne.style.bottom= 40 +incrementer * 0.12 +'%'
    cloudOne.style.marginLeft=70 +incrementer * 0.1+'%'

    cloudTwo.style.bottom= 80+incrementer * 0.14+'%'
    cloudTwo.style.marginLeft=60 +incrementer * 0.15+'%'

    cloudThree.style.bottom= 60 +incrementer * 0.11 +'%'
    cloudThree.style.marginRight= 80+incrementer * 0.12+'%'

    cloudFour.style.bottom= 70 +incrementer * 0.16 +'%'
    cloudFour.style.marginRight= 40 +incrementer * 0.15+'%'

    cloudFive.style.bottom= 60 +incrementer * 0.2 +'%'
    cloudFive.style.marginRight= 40 +incrementer * 0.16+'%'

    javaS.style.marginRight= 55 +incrementer * 2.2 +'%'
    react.style.marginRight=43 + incrementer * 1.5+'%'
    graphic.style.marginRight =31 +incrementer * 1 +'%'



}


window.addEventListener('scroll',move)