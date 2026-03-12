let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let task = input.value;

    let li = document.createElement("li");
    li.innerText = task;

    ul.appendChild(li);

    input.value = "";
});