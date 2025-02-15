console.log("hii");

for (let index = 0; index < 12; index++) {
    document.querySelectorAll("td")[index].addEventListener("click", function () {
        document.querySelector("textarea").innerHTML += this.innerHTML;
    })

}

let text = document.querySelector("textarea");
document.querySelectorAll("td")[14].addEventListener("click", function () {
    let result = eval(text.innerHTML);
    text.innerHTML = result;
});

document.querySelectorAll("td")[12].addEventListener("click", function () {
    text.innerHTML = "";
});

document.querySelectorAll("td")[13].addEventListener("click", function () {
    text.innerHTML += this.innerHTML;
});

document.querySelectorAll("td")[15].addEventListener("click", function () {
    text.innerHTML += this.innerHTML;
});