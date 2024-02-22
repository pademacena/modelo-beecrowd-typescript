import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateProd(n1: number, n2: number) {
  return n1 * n2;
}

rl.question('', (input1: string) => {
  rl.question('', (input2: string) => {
    const prod = generateProd(Number(input1), Number(input2));

    console.log(`PROD = ${prod}`);
    rl.close();
  });
});