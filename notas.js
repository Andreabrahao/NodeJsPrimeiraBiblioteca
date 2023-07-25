// promises com then

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro);
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

// \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)

// ENOTFOUND
// Error: not found - Retorna quando o Node.js tenta estabelecer uma conexão com um servidor e a tentativa falha no DNS lookup; ou seja, ou o host não existe ou há algum erro no endereço fornecido, que não consegue ser resolvido pelo DNS.
// Algumas das soluções possíveis: verifique se a URL fornecida realmente existe e se a string com a URL está sendo fornecida da forma correta para a função ou método que fará a conexão.
