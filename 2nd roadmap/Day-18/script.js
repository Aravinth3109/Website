let myPromise = new Promise((resolve, reject)=>{
    let x = 10;
    if(x>9)
        resolve(x)
    else
        reject("received a smallest number")
})

myPromise.then(
    (value)=>{
        alert(value)
    },
    (error)=>{
        alert(error)
    }
)