//store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50')


let name = localStorage.getItem('name');

console.log(name)

localStorage.clear();

const todos = [
    {Text : 'play', author : 'bro'},
    {Text : 'play', author : 'bro'},
    {Text : 'play', author : 'bro'}
]

console.log(JSON.stringify(todos))

localStorage.setItem('todos',JSON.stringify(todos) ); 

 const stored = localStorage.getItem('todos');

 console.log(JSON.parse(stored));
