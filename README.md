# Prime Number Multiplication Tables in CoffeeScript

## Running

Open index.html in a browser for the interactive table generator.

Type an integer between 1 and 10 in the text field and click "Generate table".

Open test.html in a browser to run the unit tests. The tests use Jasmine.js
to run. A version of jasmine.js is bundled under the lib folder.

## Positives

The sieve of Eratosthenes plus prime number theorem approach is scalable to
moderately large primes without being overly complex.

## To Do

The prime number sieve could be sped up by pre-sieving with a wheel sieve.

For really large primes the sieve of Eratosthenes should be paginated so we
don't run out of memory. That is, the sieve should run on the first N numbers,
then using the resulting primes run on numbers N..2N and so on.

For even further performance improvements most of the code could be shifted to
run server-side via node.js. Although at that point it's probably better to
pre-generate the results, store them in a large table, and serve the required
slice instead of generating primes on each call. Disk space is cheaper than
CPU time.
