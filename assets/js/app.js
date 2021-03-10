function cleanText(_text) {
    return _text.replace(/\W/g, ' ').toLowerCase();
}

function countRepeated(_content, _splitter) {
    const cleared_content = _content.split(_splitter).filter((e) => /[a-zA-Z]/g.test(e)).sort();

    let words = {};

    cleared_content.forEach((element) => {
        element = cleanText(element);

        if (words[element])
            words[element] += 1
        else
            words[element] = 1;
    });
    return words
}

function insertResults(_element, _hash, _title) {
    _element.innerHTML += `<h2>${_title}</h2>`;
    for (let key in _hash) {
        let newChild = `<p>${_title}: <strong>${key}</strong>\n\t<span> Cantidad: <strong>${_hash[key]}</strong></span></p>`;
        _element.innerHTML += newChild;
    }
}

content = document.getElementById('texto-entrada').textContent;
result = document.getElementById('resultados')

insertResults(result, countRepeated(content, ""), "Letra");
insertResults(result, countRepeated(content, " "), "Palabra");
