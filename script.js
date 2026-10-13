console.log('script.js підключено');

const books = [                                                    //Зберігає масив книг з їх даними
    { title: 'Маленький принц', pages: 240, finished: true },
    { title: 'Шерлох Холмс', pages: 250, finished: false },
    { title: 'Дракула', pages: 260, finished: false }
];

function calculatePages() {                                        //Рахує кількість сторінок прочитаних кнг
    let totalPages = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].finished === true) {
            totalPages += books[i].pages;
        } 
        
        if (books[i].finished === false) {                         //Виводить книги які ще не прочитані
            console.log(`Непрочитана книга '${books[i].title}'`);
        }
}
        console.log(`Кількість сторінок прочитаних книг: ${totalPages}`);
}
calculatePages();

const pagesPerDay = (pages, days) => Math.round(pages / days);      //Визначає скільки сторінок в день було прочитано в середньому
console.log('Сторінок на день:', pagesPerDay(100, 7));