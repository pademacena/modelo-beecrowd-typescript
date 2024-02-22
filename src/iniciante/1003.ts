import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function soma(n1: number, n2: number) {
  return n1 + n2

}

rl.question('', (num1: string) => {
  rl.question('', (num2: string) => {
    console.log(`SOMA = ${soma(Number(num1), Number(num2))}`);

    rl.close();
  });
});