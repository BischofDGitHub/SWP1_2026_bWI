const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});


Promise.all([           //All of them run at the same time, so one promise doesn't have to wait for the others to finish
    recordVideoOne, 
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})




Promise.race([           // only waits for the first promise to finish and returns it, instead of all promises
    recordVideoOne, 
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})