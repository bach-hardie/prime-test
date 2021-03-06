var buildTable, firstNPrimes, generate, getPrimes, makeTable;

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

buildTable = function(primes) {
  var fn, fn1, html, i, k, l, len, len1, row, rows;
  rows = [];
  rows.push([''].concat(primes));
  fn = function(i) {
    var arr, j, l, len1;
    arr = [i];
    for (l = 0, len1 = primes.length; l < len1; l++) {
      j = primes[l];
      arr.push(i * j);
    }
    return rows.push(arr);
  };
  for (k = 0, len = primes.length; k < len; k++) {
    i = primes[k];
    fn(i);
  }
  html = '<table>';
  fn1 = function(row) {
    return html += '<tr><td>' + row.join('</td><td>') + '</td></tr>';
  };
  for (l = 0, len1 = rows.length; l < len1; l++) {
    row = rows[l];
    fn1(row);
  }
  html += '</table>';
  return html;
};

makeTable = function(str) {
  var n, primes;
  if (parseInt(str) === NaN || parseFloat(str) % 1 !== 0 || parseInt(str) < 1 || parseInt(str) > 10) {
    return '<h1>Error: please input integer between 1 and 10</h1>';
  }
  n = parseInt(str);
  primes = firstNPrimes(n);
  return buildTable(primes);
};

generate = function() {
  var input, output;
  input = document.getElementById("input").value;
  output = makeTable(input);
  return document.getElementById("output").innerHTML = output;
};
