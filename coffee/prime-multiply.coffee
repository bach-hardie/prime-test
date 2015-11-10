getPrimes = (n) ->
  # First off some input checking
  if n isnt parseInt(n)
    throw new TypeError "Input not an integer"
  if n < 1
    throw new RangeError "Input not a positive integer"

  # The two special cases of n=1 and n=2
  if n == 1
    return []
  if n == 2
    return [2]

  array = (true for x in [0..n]) # The list of candidates
  sqrt_limit = Math.sqrt(n + 1) # We need to only calculate primes up to this value

  # Implementation of the Sieve of Eratosthenes. Will discard non-primes in sequence
  for i in [2..sqrt_limit]
    do (i) ->
      if array[i]
        for j in [(i*i)..n] by i
          do (j) ->
            array[j] = false

  # Get all keys not sieved out.
  primes = (p for p in [2..n] when array[p])
  return primes

firstNPrimes = (n) ->
  # First off some input checking
  if n isnt parseInt(n)
    throw new TypeError "Input not an integer"
  if n < 1
    throw new RangeError "Input not a positive integer"

  # We have to figure out how many numbers we have to sieve to get N primes

  # For N < 17 there's no rule, so for small N (N < 25) we'll just sieve 100
  # It is known that there are 25 primes smaller than 100
  if n < 25
    primes = getPrimes(100)
    return primes[0..(n - 1)]

  # For larger N we can rely on the Prime Number Theorem pi(x) > x/ln(x)
  else
    est = 0
    x = 1
    est_fn = (x) ->
      est = 10**x / Math.log(10**x)
      x += 1
    est_fn(x) while est < n
    primes = getPrimes(10**x)
    return primes[0..(n - 1)]
