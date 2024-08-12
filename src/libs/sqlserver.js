// db.js

import sql from 'mssql'; 

let pool;  
const config = {  
    user: 'sa',  
    password: 'Gsistems86',  
    server: 'localhost\\saint', // o dirección de tu servidor  
    database: 'GLOBAL',  
    options: {  
        //encrypt: true, // Para Azure  
        trustServerCertificate: true, // Para entornos locales  
    },  
};  


// En db.js
export async function connect() {  
    if (pool) return pool; // Devuelve la conexión existente  

    try {  
        pool = await sql.connect(config);  
       // console.log('Conectado a SQL Server');  
        return pool;  
    } catch (err) {  
        console.error('Error de conexión:', err);  
        throw err; // Lanza el error para que pueda ser manejado  
    }  
}

// En queries.js


export { sql };
