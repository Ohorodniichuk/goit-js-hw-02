'use strict';
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива

users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
users.pop();
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
users.unshift('Lux');
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push('Jay', 'Kiwi');
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
const findAjax = users.indexOf('Ajax'); //Сначала нохожу индекс елемента
users.splice(findAjax, 1);
console.log(users);

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = 'Kong';
const insertBefore = 'Jay';
const findJay = users.indexOf('Jay');
users.splice(findJay, 0, 'Kong');
console.log(users);
