const somethinWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!');
        } else {
            reject('whoooops!');
        }

    });
};


somethinWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethinWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True wil Happen 2');
            }, 2000)
        } else {
            const error = new Error('Whoops!!');
            reject(error);
        }
    });

}


somethinWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));



// ejecutar avrias promesas con promise.all()

Promise.all([somethinWillHappen(), somethinWillHappen2()])
    .then(response => {
        console.log('Arrayof results', response);
    })
    .catch(err => {
        console.error(err);
    })

/*  
salida en terminal    
C:\rtc\asincronismo>npm run promise

> asincronismo@1.0.0 promise C:\rtc\asincronismo
> node src/promise/index.js

Hey!!!
True wil Happen 2
Arrayof results [ 'Hey!!!', 'True wil Happen 2' ]

C:\rtc\asincronismo>
    
    */