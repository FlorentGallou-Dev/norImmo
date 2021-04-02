let faqTitleBox = document.getElementsByClassName("faqTitle");
let heightAnswer = [];

for(let element in faqTitleBox){
    faqTitleBox[element].addEventListener("click", function(){
        let answer = this.nextElementSibling;

        if(answer.style.height == 0 || answer.style.height === "0px"){
            answer.style.height = "auto";
            answer.style.padding = "1em";
        }
        else {
            answer.style.height = "0px";
            answer.style.padding = "0px";
        }
    });
}