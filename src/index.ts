import 'dotenv/config';
import { Spark } from './agent';

async function main() {
  console.log('==================================================');
  console.log('💎 SYNTROPY: Finding Order in the Chaos');
  console.log('==================================================');

  const spark = new Spark();

  await spark.ignite(
    'Extract Fibonacci pattern',
    'def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\nprint(fib(10))'
  );

  await spark.ignite(
    'Generate a sequence of squares',
    'nums = [x**2 for x in range(5)]\nprint(nums)'
  );
}

main().catch(console.error);
