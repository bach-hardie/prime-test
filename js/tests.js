describe("getPrimes", function() {
  it("should return empty when the input is 1", function() {
    return expect(getPrimes(1)).toEqual([]);
  });
  it("should return a list of all primes up to 97", function() {
    return expect(getPrimes(97)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
  it("should return a list of all primes up to 500", function() {
    return expect(getPrimes(500)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]);
  });
  it("should return a list of all primes up to 1000", function() {
    return expect(getPrimes(1000)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]);
  });
  it("should return an exception if the input is 0", function() {
    var fn;
    fn = function() {
      return getPrimes(0);
    };
    return expect(fn).toThrow();
  });
  it("should return an exception if the input is negative", function() {
    var fn;
    fn = function() {
      return getPrimes(-10);
    };
    return expect(fn).toThrow();
  });
  return it("should return an exception if the input is not an integer", function() {
    var fn;
    fn = function() {
      return getPrimes(5.75);
    };
    return expect(fn).toThrow();
  });
});

describe("firstNPrimes", function() {
  it("should return the first N primes for N<=10", function() {
    var i, n, primes, results;
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    results = [];
    for (n = i = 1; i <= 10; n = ++i) {
      results.push((function(n) {
        return expect(firstNPrimes(n)).toEqual(primes.slice(0, +(n - 1) + 1 || 9e9));
      })(n));
    }
    return results;
  });
  it("should return the first 100 primes", function() {
    var primes;
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541];
    return expect(firstNPrimes(100)).toEqual(primes);
  });
  return it("should return an exception if the input is not a positive integer", function() {
    var testFloat, testNegative, testZero;
    testZero = function() {
      return firstNPrimes(0);
    };
    expect(testZero).toThrow();
    testNegative = function() {
      return firstNPrimes(-10);
    };
    expect(testNegative).toThrow();
    testFloat = function() {
      return firstNPrimes(2.5);
    };
    return expect(testFloat).toThrow();
  });
});
