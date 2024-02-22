import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function salario(hora: number, valor: number) {
  const novoSalario = hora * valor;;
  return novoSalario.toFixed(2);
}

rl.question('', (numero: string) => {
  rl.question('', (hora: string) => {
    rl.question('', (valor: string) => {
      const result = salario(Number(hora), Number(valor));

      console.log(`NUMBER = ${numero}`);
      console.log(`SALARY = U$ ${result}`);
      rl.close();
    });
  });
});