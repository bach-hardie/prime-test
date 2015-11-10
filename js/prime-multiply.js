var firstNPrimes, getPrimes;

getPrimes = function(n) {
  var array, fn, i, k, p, primes, ref, sqrt_limit, x;
  if (n !== parseInt(n)) {
    throw new TypeError("Input not an integer");
  }
  if (n < 1) {
    throw new RangeError("Input not a positive integer");
  }
  if (n === 1) {
    return [];
  }
  if (n === 2) {
    return [2];
  }
  array = (function() {
    var k, ref, results;
    results = [];
    for (x = k = 0, ref = n; 0 <= ref ? k <= ref : k >= ref; x = 0 <= ref ? ++k : --k) {
      results.push(true);
    }
    return results;
  })();
  sqrt_limit = Math.sqrt(n + 1);
  fn = function(i) {
    var j, l, ref1, ref2, ref3, results;
    if (array[i]) {
      results = [];
      for (j = l = ref1 = i * i, ref2 = n, ref3 = i; ref3 > 0 ? l <= ref2 : l >= ref2; j = l += ref3) {
        results.push((function(j) {
          return array[j] = false;
        })(j));
      }
      return results;
    }
  };
  for (i = k = 2, ref = sqrt_limit; 2 <= ref ? k <= ref : k >= ref; i = 2 <= ref ? ++k : --k) {
    fn(i);
  }
  primes = (function() {
    var l, ref1, results;
    results = [];
    for (p = l = 2, ref1 = n; 2 <= ref1 ? l <= ref1 : l >= ref1; p = 2 <= ref1 ? ++l : --l) {
      if (array[p]) {
        results.push(p);
      }
    }
    return results;
  })();
  return primes;
};

firstNPrimes = function(n) {
  var est, est_fn, primes, x;
  if (n !== parseInt(n)) {
    throw new TypeError("Input not an integer");
  }
  if (n < 1) {
    throw new RangeError("Input not a positive integer");
  }
  if (n < 25) {
    primes = getPrimes(100);
    return primes.slice(0, +(n - 1) + 1 || 9e9);
  } else {
    est = 0;
    x = 1;
    est_fn = function() {
      est = Math.pow(10, x) / Math.log(Math.pow(10, x));
      return x += 1;
    };
    while (est < n) {
      est_fn();
    }
    primes = getPrimes(Math.pow(10, x));
    return primes.slice(0, +(n - 1) + 1 || 9e9);
  }
};
