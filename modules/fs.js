const fs = require('fs');
const path = require('path');

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if (err) {
//         console.log('Error: ', err)
//     }
//     console.log("Pasta criada com sucesso!")
// })

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Opa', (error)=>{
    if(error) {
        return console.log('Error: ', err)
    }
    console.log('Arquivo criado com sucesso')

        // Adicionar ao arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' Ola', (error) => {
        if(error) {
            return console.log('Error: ', err)
        }
        console.log('updated!')

        
    // Read files 
        fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf-8', (error, data) => {
            if(error) {
                return console.log('Error: ', err)
            }
            console.log(data)
        })
    })

})

