
// import { db ,connection} from './src/db/db.js'; 
// import {migrate} from 'drizzle-orm/postgres-js/migrator'

// (
//     async () => {
//         await migrate(db, { migrationsFolder: "./drizzle" });
//         await connection.end()
//     }
// )

import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./src/db/db.js"; 

await migrate(db, { migrationsFolder: "./drizzle" });
console.log("Migration completed successfully");
process.exit(0);


