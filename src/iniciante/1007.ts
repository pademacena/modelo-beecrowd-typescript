import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function diferenca(n1: number, n2: number, n3: number, n4: number) {
  const result = (n1 * n2) - (n3 * n4);
  return result;
}

rl.question('', (input1: string) => {
  rl.question('', (input2: string) => {
    rl.question('', (input3: string) => {
      rl.question('', (input4: string) => {
        const result = diferenca(Number(input1), Number(input2), Number(input3), Number(input4));

        console.log(`DIFERENCA = ${result}`);
        rl.close();
      });
    });
  });
});