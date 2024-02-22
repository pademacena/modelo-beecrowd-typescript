import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularArea(raio: number): number {
  const pi = 3.14159;
  return pi * (raio ** 2);
}

rl.question('', (input: string) => {
  console.log(`A=${calcularArea(Number(input)).toFixed(4)}`);

  rl.close();
});

/// Algoritimo funciona, poremd e alguma forma da erro