describe "getPrimes", () ->
  it "should return empty when the input is 1", () ->
    expect(getPrimes(1)).toEqual([])
  it "should return a list of all primes up to 97", () ->
    expect(getPrimes(97)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \
     43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  it "should return a list of all primes up to 500", () ->
    expect(getPrimes(500)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \
     43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, \
     131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, \
     223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, \
     313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, \
     421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499])
  it "should return a list of all primes up to 1000", () ->
    expect(getPrimes(1000)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, \
    131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, \
    223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, \
    311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, \
    409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, \
    503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, \
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, \
    719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, \
    827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, \
    941, 947, 953, 967, 971, 977, 983, 991, 997])
  it "should return an exception if the input is 0", () ->
    fn = () -> getPrimes(0)
    expect(fn).toThrow()
  it "should return an exception if the input is negative", () ->
    fn = () -> getPrimes(-10)
    expect(fn).toThrow()
  it "should return an exception if the input is not an integer", () ->
    fn = () -> getPrimes(5.75)
    expect(fn).toThrow()

describe "firstNPrimes", () ->
  it "should return the first N primes for N<=10", () ->
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    for n in [1..10]
      do (n) ->
        expect(firstNPrimes(n)).toEqual(primes[0..(n-1)])
  it "should return the first 100 primes", () ->
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, \
    131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, \
    223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, \
    311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, \
    409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, \
    503, 509, 521, 523, 541]
    expect(firstNPrimes(100)).toEqual(primes)
  it "should return an exception if the input is not a positive integer", () ->
    testZero = () -> firstNPrimes(0)
    expect(testZero).toThrow()
    testNegative = () -> firstNPrimes(-10)
    expect(testNegative).toThrow()
    testFloat = () -> firstNPrimes(2.5)
    expect(testFloat).toThrow()

describe "buildTable", () ->
  it "should build a multiplication table given a list of primes", () ->
    primes = [2, 3, 5]
    table = \
      "<table>
        <tr>
          <td></td><td>2</td><td>3</td><td>5</td>
        </tr>
        <tr>
          <td>2</td><td>4</td><td>6</td><td>10</td>
        </tr>
        <tr>
          <td>3</td><td>6</td><td>9</td><td>15</td>
        </tr>
        <tr>
          <td>5</td><td>10</td><td>15</td><td>25</td>
        </tr>
      </table>"
    expect(buildTable(primes).replace(/\s/g, "")).toEqual(table.replace(/\s/g, "") )

describe "makeTable", () ->
  it "should take input, get those primes, and make an html table", () ->
    expect(makeTable(n.toString())).toEqual(buildTable(firstNPrimes(n))) for n in [1..10]
  it "should return a formatted error message for invalid inputs", () ->
    expect(makeTable('0')).toEqual('<h1>Error: please input integer between 1 and 10</h1>')
    expect(makeTable('-10')).toEqual('<h1>Error: please input integer between 1 and 10</h1>')
    expect(makeTable('5.75')).toEqual('<h1>Error: please input integer between 1 and 10</h1>')
    expect(makeTable('five')).toEqual('<h1>Error: please input integer between 1 and 10</h1>')
    expect(makeTable('100')).toEqual('<h1>Error: please input integer between 1 and 10</h1>')
