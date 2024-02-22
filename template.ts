import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ler a entrada e calcular a área
rl.question('', (input: string) => {
    //Logica

    // Fechar o readline
    rl.close();
});
