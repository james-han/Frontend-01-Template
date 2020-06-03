const match = function (selector,element) {
    switch (true) {
        case !selector || !element.attributes:
            return false;
        case selector.charAt(0) === "#":
            let attr = element.attributes.filter(attr => attr.name === "id")[0];
            if (attr && attr.value === selector.replace("#", '')) {
                return true;
            }
            break;
        case selector.charAt(0) === ".":
            attr = element.attributes.filter(attr => attr.name === "class")[0];
            if (attr && attr.value === selector.replace(".", '')) {
                return true;
            }
            break;
        default:return true;
    }
}

match("div #id.class", document.getElementById("id"));