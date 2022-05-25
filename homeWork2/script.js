// task 1
const arr = [10, 20, 30, 10, 40, 20];
const arr1 = [... new Set(arr)];
console.log('task 1 ', arr1)


// task 2
const obj1 = { id: 1, name: 'userName' };
const obj2 = { id: 1, password: 'qwerty' };
const obj3 = {...obj1, ...obj2};
console.log('task 2 ', obj3);


// task 3
const add = (x, y) => x + y
console.log('task 3 ', add(3, 4))


// task 4
const sleep = (ms) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

sleep(5000).then(() => console.log('task 4 ', 'Выполнелось через 5 секунд'));