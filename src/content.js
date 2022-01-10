const text = document.querySelectorAll("p span");

for (const el of text) {
    let before = getComputedStyle(el, ":before").content.replace(/^"|"$/g, "");
    let after = getComputedStyle(el, ":after").content.replace(/^"|"$/g, "");

    el.insertAdjacentText("afterbegin", before);
    el.insertAdjacentText("beforeend", after);
}

let stylesheet = document.styleSheets[0];
stylesheet.insertRule("span:before, span:after, p:before { content: none !important }");
stylesheet.insertRule("p { user-select: auto !important }");
