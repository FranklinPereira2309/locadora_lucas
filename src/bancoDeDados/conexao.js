const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '88321656',
//     port: 5432,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    } 

});

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'locadora',
//     password: '88321656',
//     port: 5432

// });



const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}

