const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// criar interface para leitura de dados -> camada de conexão / adaptador
const rl = readline.createInterface({ input, output });

//array de clientes
const customers = [];

async function listCustomers(){
    console.clear();
    console.log(customers);
    await rl.question("Pressione Enter para continuar...");
    printMenu();
}

async function startRegistration(){
    const name = await rl.question('Qual o nome do cliente?\n');
    const address = await rl.question('Qual o endereço do cliente?\n');
    const id = customers.length > 0
    ? customers[customers.length - 1].id + 1
    : 1; // operador ternário

    // variavel name fica na propriedade name, não preciso colocar name = name, por exemplo 
    customers.push({name, address, id});
    console.log("Cliente cadastrado com sucesso!")
    await rl.question("Pressione Enter para continuar...");
    printMenu();
}

async function printMenu(){
    console.clear();
    console.log("Menu");
    console.log("1 - Cadastrar Cliente");
    console.log("2 - Listar Cliente");
    console.log("3 - Encerrar");

    // tenho uma função callback que é representado pelo answer
    const answer = await rl.question('Qual opção você deseja?\n');
    
    switch(answer){
        case "1": startRegistration(); break;
        case "2": listCustomers(); break;
        case "3": {
            console.clear();
            process.exit(0);
        }
        default: console.log("Opção inválida. Tente novamente.");
    }
        await rl.question('Pressione enter para continuar....')
        printMenu();
    };

printMenu();


