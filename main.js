const links = document.querySelectorAll(".left a");
const items = document.querySelectorAll(".right .item");

let currentElement = null;

links.forEach(link => {
    link.addEventListener("click", () => {
        const index = Number(link.dataset.index);
        const selectedElement = items[index];

        if (currentElement === selectedElement)
            return;

        if (currentElement !== null)
            currentElement.style.display = "none";

        selectedElement.style.display = "block";
        currentElement = selectedElement;
    });
});