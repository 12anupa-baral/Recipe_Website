// database connection

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString ="postgresql://postgres.mheztpcbwzpepeoexlch:thiaisanupa@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
// export const connection = postgres(connectionString);
 const connection = postgres(connectionString);
 export const db=drizzle(connection);