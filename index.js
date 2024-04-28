const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// criar interface para leitura de dados -> camada de conexão / adaptador
const rl = readline.createInterface({ input, output });

async function printMenu(){
    console.clear();
    console.log("Menu");
    console.log("1 - Cadastrar Cliente");
    console.log("2 - Listar Cliente");
    console.log("3 - Encerrar");

    // tenho uma função callback que é representado pelo answer
    const answer = await rl.question('Qual opção você deseja?');
    
    if (answer ==="3")
        process.exit(0);
    else
        console.log("Sua escolhe foi: " + answer);

        await rl.question('Pressione enter para continuar....')
        printMenu();
    };

printMenu();


