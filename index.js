const dropdown = document.querySelector('.dropdown');

dropdown.onclick = () => {
    const arrow = document.querySelector('.arrow__down');
    const content = document.querySelector('.content');

    content.classList.toggle('content__active');
    arrow.classList.toggle('arrow__up');
}
const Pluses = document.querySelectorAll(".icon__right");
const Minuses = document.querySelectorAll(".icon__left");
const container = document.querySelector(".container");
const wrappers = document.querySelectorAll(".content-mini");
const clear = document.querySelector('.clear');
const input = document.getElementById('dropdown');
const minusIdOne = document.getElementById('left__one');
const minusIdTwo = document.getElementById('left__two');


const textValue1 = document.getElementById("Value1");
const textValue2 = document.getElementById("Value2");
const textValue3 = document.getElementById("Value3");



//const textValues = document.getElementsByClassName("icon__text").innerHTML;


container.addEventListener('click', function (){
    textValue1Number = +textValue1.innerHTML;
    textValue2Number = +textValue2.innerHTML;
    textValue3Number = +textValue3.innerHTML;
    sumValue = +textValue1.innerHTML + +textValue2.innerHTML;
    let inpPlace = input.placeholder;
    if(textValue1Number > 0){
        minusIdOne.classList.add('icon__left-active');
    }
    if(textValue2Number > 0){
        minusIdTwo.classList.add('icon__left-active');
        }




    const inPute = (arg1) => {
        
        if(arg1 === 0){
           return "сколько спалень";
        }
        else if(arg1 < 2){
            return `${arg1} спальня`;
        }
        else if(arg1 < 4) {
            return `${arg1} спальни`;

            }
        else if(arg1 < 5){
            return `${arg1} cпалень`;
            }
        else if(arg1 >= 5) {
            return `${arg1} cпалень`;
            }
        }
        inPute(sumValue);
        const inPute2 = (arg1) => {
            if(arg1 === 0){
                    return "сколько кроватей...";
                }
            else if(arg1 < 2){
                return arg1 + " кровать...";
                }
            else if(arg1 < 5) {
                return arg1 + " кровати...";
                    }
            else if(arg1 > 4){
                return arg1 + " кроватей...";
                    }
        }
        inPute2(textValue3Number);
        stringOne = inPute(textValue1Number);
        sringTwo = inPute2(textValue2Number);

        input.placeholder = `${stringOne}, ${sringTwo}`;
        console.log(stringOne, sringTwo)




        //  $("#textbox").attr("placeholder", "name");



        
    


    // Object.values(wrappers).map(wrapper =>{
        const plus = document.querySelector('.icon__right');
        Object.values(Pluses).map(plus =>{
            plus.onclick = function(event) {
                let minus = event.currentTarget.parentNode.querySelector('.icon__left');
                let text = event.currentTarget.previousElementSibling;
    
                let countPlus = text.innerHTML;
                if(+countPlus <= 5){
                    text.innerHTML++;
                }
                if(+countPlus >= 5){
                    plus.classList.add('icon__right-hite');
                }
                else{
                    plus.classList.remove('icon__right-hite');
                }
    
                if(+countPlus >= 0){
                    minus.classList.add('icon__left-active');
                }
                else{
                    minus.classList.remove('icon__left-active');
                }
                return countPlus
            }
        })
    
        Object.values(Minuses).map(minus =>{
            minus.onclick = function(event) {
                let plus = event.currentTarget.parentNode.querySelector('.icon__right');
                
                let text = event.currentTarget.nextElementSibling;
                let countMinus = text.innerHTML;
                if(+countMinus >=1){
                    text.innerHTML--;
                }
                if(+countMinus >= 2){
                    minus.classList.add('icon__left-active');
                }
                else{
                    minus.classList.remove('icon__left-active');
                }
                if(+countMinus >= 7){
                    plus.classList.add('icon__right-hite');
                }
                else{
                    plus.classList.remove('icon__right-hite');
                }
                return countMinus
            }
        })
    // }) 
})

