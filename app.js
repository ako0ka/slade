
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const container = document.querySelector(".container");

console.log(nextBtn, prevBtn, container);

let counter = 0;

nextBtn.addEventListener("click", () => {
    if(counter === 4) {
        counter = -1
    }
    
    
    counter ++;
    container.style.backgroundImage = ` url("./images/bcg-${counter}.jpg")`;

});
prevBtn.addEventListener("click", () => {
    if(counter === -1) {
        counter = 4
    }
    
    
    counter --;
    container.style.backgroundImage = ` url("./images/bcg-${counter}.jpg")`;
})


  