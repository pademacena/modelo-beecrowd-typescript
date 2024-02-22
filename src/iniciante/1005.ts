import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function media(n1: number, n2: number) {
  const media = ((n1*3.5) + (n2*7.5)) / 11;
  return media.toFixed(5);
}

rl.question('', (input1: string) => {
  rl.question('', (input2: string) => {
    const result = media(Number(input1), Number(input2));
    console.log(`MEDIA = ${result}`)

    rl.close();
  });
});