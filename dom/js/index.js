'use strict';

//all of my data goes up here
const state = {
    currentEmotion: "happy",
    currentNumCookies: 0
}

let buttonElem = document.querySelector('#demo-button');

//follow on twitter
//"when clicked, execute function"
buttonElem.addEventListener('click', function() {
    console.log("You clicked me!");
    buttonElem.classList.add('btn-success')
    buttonElem.classList.remove('btn-default')
    buttonElem.textContent = "Thank you for making a simple button happy!"
});

let imgElem = document.querySelector('img');


function renderEmotion(){ //redraw the image
    imgElem.src = "img/"+state.currentEmotion+".png";
    // if(currentEmotion === "happy"){
    let paraElem = document.querySelector('#emotion-image p')
    paraElem.textContent = "I am "+state.currentEmotion+"!";
    // }
}

imgElem.addEventListener('mouseenter', function() {
    state.currentEmotion = "surprised";
    renderEmotion(); //redraw the image
})
imgElem.addEventListener('mouseleave', function() {
    state.currentEmotion = "happy";
    renderEmotion(); //redraw the image
})

function createCookie() {
    let cookieImgElem = document.createElement('img');
    cookieImgElem.src = "img/cookie.png";
    cookieImgElem.alt = "A yummy cookie";
    return cookieImgElem;
}

function renderCookies(numCookies) {
    let jarElement = document.querySelector('#cookie-jar');
    jarElement.innerHTML = ""; //delete all previous cookies
    for(let i=0; i<numCookies; i++){ //remake all of the cookies
        jarElement.appendChild(createCookie());
    }
}

//renderCookies(10);


let addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function() {
    state.currentNumCookies = state.currentNumCookies + 1;
    renderCookies(state.currentNumCookies);
})

//1. listen for event
document.querySelector('#eat-button').addEventListener('click', function() {
    state.currentNumCookies = state.currentNumCookies - 2; //2. modify the state
    renderCookies(state.currentNumCookies); //3. re-render the data
})

































