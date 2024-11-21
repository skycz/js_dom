"use strict";
// DOM-узлы (Nodes):
// Общее понятие:
// Узел(Node) — это базовое понятие в DOM, которое представляет любой объект в структуре документа
// Все элементы, текст, комментарии и атрибуты являются узлами

// DOM-элементы (Elements):
// Частный случай узлов:
// DOM - элементы(Element Nodes) — это узлы, которые представляют HTML - теги и их содержимое
// Это подтип узлов с nodeType = 1
// DOM-элементы поддерживают свойства и методы, специфичные для работы с HTML, например: innerHTML, classList, getAttribute() и setAttribute()
// С элементами удобно работать, если нужно манипулировать HTML - структурой



/* console.log(document.body); */ // выводит в консоль тег body и его структуру
/* console.log(document.head); */ // выводит в консоль тег head и его структуру
/* console.log(document.documentElement); */ // выводит в консоль всю HTML структуру

// Для того чтобы взять все дочерние элементы из HTML структуры, используем метод childNodes в console.log()

/* console.log(document.body.childNodes); */ // Возвращает все дочерние узлы элемента, включая Узлы элементов (Element Nodes), текстовые узлы (Text Nodes), даже пробелы между тегами, узлы комментариев (Comment Nodes)

// Для того чтобы перебрать все дочерние элементы из HTML структуры в виде HTML кода используем:

for (let node of document.body.childNodes) { // Итерация через for...of позволяет перебрать каждый узел (не только элементы)
    if (node.nodeName == '#text') {
        continue; // Если текущий узел является текстовым (node.nodeName == '#text'), команда continue пропускает текущую итерацию, переходя к следующему узлу
    }
    console.log(node) // Все узлы выводятся в консоль
} 



// Для того чтобы взять определенные дочерние элементы используем: firstChild, lastChild

/* console.log(document.body.firstChild); // берем первого ребенка тега body
console.log(document.body.lastChild); */ // берем последнего ребенка тега body

/* console.log(document.body.firstElementChild); */ // для уточнения ребенка как элемента
/* console.log(document.body.lastElementChild); */ // для уточнения ребенка как элемента




// Для того чтобы взять родителей, детей и даже соседей из HTML структуры используем: 

/* console.log(document.querySelector('#current').parentNode); */ // берем родителя #current, при помощи свойства .parentNode

/* console.log(document.querySelector('#current').parentNode.parentNode); */ // берем на одного родителя выше удваивая свойства .parentNode

/* console.log(document.querySelector('#current').parentElement); */ // для уточнения родителя как элемент, используем parentElement


// Работа с data-current
/* console.log(document.querySelector('[data-current="3"]').nextElementSibling) */ // атрибут записывай в квадратные скобки
// берем следующего брата или сестру от data-current="3"

/* console.log(document.querySelector('[data-current="3"]').previousElementSibling); */ // атрибут записывай в квадратные скобки
// берем предыдущего соседа от data-current="3"
