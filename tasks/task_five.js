//created an array of object which contains mountains and its properties
let mountains = [
    {name: 'kilimanjaro',
     height: 5895,
     place: 'tanzania'
    },
    // {
    //     name: 'Mount Everest',
    //     height: 8848,
    //     place: 'china'
    // }
]

//created a table element <table>
let table = document.createElement('table')
//played around with some color tho not neccessary
table.style.backgroundColor = 'green'

//used the for..of loop to iterate the mountains object to access its properties and value
for(let hiking of mountains){
    let tr1 = document.createElement('tr'); // created an element <tr> table row
    let tr2 = document.createElement('tr');

    //cretead another element <th> table head 
    let th1 = document.createElement('th')
    th1.textContent = 'name';
    tr1.appendChild(th1) //added (th1) to the first table row
    let th2 = document.createElement('th')
    th2.textContent = 'height';
    tr1.appendChild(th2)
    let th3 = document.createElement('th')
    th3.textContent = 'place';
    tr1.appendChild(th3)

    let td1 = document.createElement('td');
    td1.textContent = hiking.name;
    tr2.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = hiking.height;
    td2.style.textAlign = 'right';
    tr2.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = hiking.place;
    tr2.appendChild(td3);

    table.appendChild(tr1) //added table row 1 to the element <table>
    table.appendChild(tr2) //added table row 2 to the element <table>
}
//using the getElement i accessed the HTML id of "mountains" and stored it in the new variable mountain
let mountain = document.getElementById('mountains')
mountain.appendChild(table) //then stored the properties of table in the variable mountain so it can be visually viewed on the browser 



