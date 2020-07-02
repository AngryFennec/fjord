document.onload = function() {
    var main = document.getElementsByTagName("main")[0];
    var daySection, dayDescription, rowSection, cellSection, h2Element;

    daySection = document.createElement("section");
    daySection.className = "day";

    dayDescription = document.createElement("section");
    dayDescription.className = "day_description";
    dayDescription.textContent = "Четверг";
    daySection.appendChild(dayDescription);

    rowSection = document.createElement("section");
    rowSection.className = "row";

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    h2Element = document.createElement("h2");
    h2Element.textContent = "Наименование предмета";
    cellSection.appendChild(h2Element);
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    h2Element = document.createElement("h2");
    h2Element.textContent = "ФИО преподавателя";
    cellSection.appendChild(h2Element);
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    h2Element = document.createElement("h2");
    h2Element.textContent = "Время начала проведения";
    cellSection.appendChild(h2Element);
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    h2Element = document.createElement("h2");
    h2Element.textContent = "Аудитория";
    cellSection.appendChild(h2Element);
    rowSection.appendChild(cellSection);

    daySection.appendChild(rowSection);

    rowSection = document.createElement("section");
    rowSection.className = "row";

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Иностранный язык в профессиональной деятельности (практическое занятие)";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Багдасарова Эльвина Валерьевна";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "8:30";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "ВП2-210";
    rowSection.appendChild(cellSection);

    daySection.appendChild(rowSection);

    rowSection = document.createElement("section");
    rowSection.className = "row";

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Иностранный язык в профессиональной деятельности (практическое занятие)";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Багдасарова Эльвина Валерьевна";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "10:10";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "ВП2-210";
    rowSection.appendChild(cellSection);

    daySection.appendChild(rowSection);

    rowSection = document.createElement("section");
    rowSection.className = "row";

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Иностранный язык в профессиональной деятельности (практическое занятие)";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Багдасарова Эльвина Валерьевна";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "12:10";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "ВП2-13";
    rowSection.appendChild(cellSection);

    daySection.appendChild(rowSection);

    rowSection = document.createElement("section");
    rowSection.className = "row";

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Иностранный язык в профессиональной деятельности (практическое занятие)";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "Багдасарова Эльвина Валерьевна";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "13:50";
    rowSection.appendChild(cellSection);

    cellSection = document.createElement("section");
    cellSection.className = "cell";
    cellSection.textContent = "ВП2-212";
    rowSection.appendChild(cellSection);

    daySection.appendChild(rowSection);
    


    main.appendChild(daySection);
}();