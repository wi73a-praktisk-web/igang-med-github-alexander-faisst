function thirdPromise(someBoolValue) {
    return new Promise((resolve, reject) => {
    //    setTimeout(() => {
          if (someBoolValue) {
             resolve('Denne besked kommer fra "resolve"');
          } else {
             reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
          }
    //    }, 2000);
    })
 }
 
 thirdPromise(true)
    .then((success) => {
       console.log(success);
       //throw new Error('lad os sige noget gik galt!');
       return thirdPromise(true);
    }).then((nextSuccess) => {
       console.log(nextSuccess);
       return thirdPromise(false);
    }).then((nextSuccess) => {
        console.log(nextSuccess)
    }).catch((error) => {
       console.log(error);
    })