const fs = require('fs');

if (fs.existsSync("File")) {
    console.log("el directorio ya ha sido creado")
}else{
    fs.mkdir("File",(error)=>{
        if (error) {
            console.log(error.message);
        }
        console.log("Directorio Creado")
    });
}

fs.writeFile("./File/texto.txt","Era Gol De Yepez",(error)=>{
    if(error) {
        throw error;
    }
    console.log("archivo creado")
})


