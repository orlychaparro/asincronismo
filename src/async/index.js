const doSomethingAsync = (mensaje_async) => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve(mensaje_async), 3000): reject(newError('Test Error'))
    });
}


const doSomething = async() => {
    const something = await doSomethingAsync('Se ejecutó el Async 1');
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async() => {
    try {
        const something = await doSomethingAsync('Se ejecutó Async 2');
        console.log(something);

    } catch (error) {
        console.error(error)
    }
}

console.log('Before 2');
anotherFunction();
console.log('after 2');