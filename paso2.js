
const fs = require( 'fs')

fs.readdirSync("./File").forEach((fileName)=>{
    fs.unlinkSync(`./File/${fileName}`);
    console.log("Archivo borrado")
})

fs.rmdir("./File",(error)=>{
    if (error) {
        throw error
    }
    console.log("directorio borrado")
})