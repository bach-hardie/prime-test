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
  primes = (p for p in [2..(n - 1)] when array[p])
  return primes
