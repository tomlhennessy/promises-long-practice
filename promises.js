/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1() {
    return 1; // simple function that returns the number 1
}

async function num2() {
    return 2; // Async function that returns 2 as a resolved promise
}

console.log('num1', num1()); // logs "num1 1", because num1 returns the number directly
console.log('num2', num2()); // logs "num2 Promise { <resolved>: 2}, because num2 returns a promise"

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
    const value = await num2(); // waits for num2 to resolve and assigns the resolved value to "value"
    console.log('waiting', value); // logs the resolved value: "waiting 2"
}

waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!'); // resolve the Promise after 1 second
        }, 1000); // 1 second delay
    })

    const result = await promise; // wait for the promise to resolve
    console.log('my promise is', result); // logs "my promise is done!!!"
}

waitForMyPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!'); // resolve the promise after 1.5 seconds
    }, 1500);
}).then(result => console.log('then my other promise is', result));
// logs "then my other promise is done!" after 1.5 seconds

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
