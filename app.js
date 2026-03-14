let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delete1 = document.createElement("button");
    delete1.innerText = "DONE";
    delete1.classList.add("delete");

    item.appendChild(delete1);
    ul.appendChild(item);

    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});