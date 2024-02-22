import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function media(n1: number, n2: number, n3: number) {
  const result = ((n1*2) + (n2*3) + (n3*5)) / 10;
  return result.toFixed(1);
}

rl.question('', (input1: string) => {
  rl.question('', (input2: string) => {
    rl.question('', (input3: string) => {
      const result = media(Number(input1), Number(input2), Number(input3));

      console.log(`MEDIA = ${result}`);
      rl.close();
    });
  });
});