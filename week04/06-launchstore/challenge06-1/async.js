// Without promise handling
function double(n) {
  setTimeout(function() {
    console.log(2 * n);
  }, Math.floor(Math.random() * 100) + 1 );
}

double(1);
double(2);
double(3);
double(4);
double(5);

// Callback
function doubleCallback(n, callback) {
  setTimeout(function() {
    console.log(2 * n);
    callback();
  }, Math.floor(Math.random() * 100) + 1 );
}

doubleCallback(1, function() {
  doubleCallback(2, function() {
    doubleCallback(3, function() {
      doubleCallback(4, function() {
        doubleCallback(5, function() {});
      });
    });
  });
});

// Promise
function doublePromise(n) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(2 * n);
    }, Math.floor(Math.random() * 100) + 1 );
  });
}

doublePromise(1)
  .then(function (result) {
    console.log(result);
    return doublePromise(2);
  })
  .then(function (result) {
    console.log(result);
    return doublePromise(3);
  })
  .then(function (result) {
    console.log(result);
    return doublePromise(4);
  })
  .then(function (result) {
    console.log(result);
    return doublePromise(5);
  });

// Async
async function doubleAsync(n) {
  const result = await doublePromise(n);
  console.log(result);
}

doubleAsync(1);
doubleAsync(2);
doubleAsync(3);
doubleAsync(4);
doubleAsync(5);

// Double and sum
// This function will always return undefined
// There is no way to make it return from inside the setTimeout withou promise handling, unless we wrap it on anothe setTimeout.
function doubleAndSum(i, j) {
  return setTimeout(function() {
    return (2 * i) + j;
  }, Math.floor(Math.random() * 100) + 1 );
}

let result;

result = doubleAndSum(5, 0); // undefined
result = doubleAndSum(12, result); // undefined
result = doubleAndSum(2, result); // undefined

// Callback
function doubleAndSumCallback(i, j, callback) {
  return setTimeout(function() {
    let result = (2 * i) + j;
    callback(result);
  }, Math.floor(Math.random() * 100) + 1 );
}

doubleAndSumCallback(1, 1, function(result) {
  doubleAndSumCallback(2, result, function(result) {
    doubleAndSumCallback(3, result, function() {});
  });
});

// Promise
function doubleAndSumPromise(i, j) {
  return new Promise(function(resolve, reject) {
    resolve(2 * i + j);
  });
}

doubleAndSumPromise(1, 1)
  .then(function(result) {
    return doubleAndSumPromise(2, result);
  })
  .then(function(result) {
    return doubleAndSumPromise(3, result);
  })
  .then(function(result) {
    return result;
  });

// Async

async function doubleAndSumAsync(i, j) {
  return await doubleAndSumPromise(i, j);
}

let resultAsync;

resultAsync = doubleAndSumAsync(5, 0);
resultAsync = doubleAndSumAsync(12, resultAsync);
resultAsync = doubleAndSumAsync(2, resultAsync);
