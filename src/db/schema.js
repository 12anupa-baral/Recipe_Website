
import { pgTable, serial,text, varchar ,timestamp} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// tables
export const recipes =pgTable("recipes",{
    id:serial("id").primaryKey(),
    name:varchar("name",{length:50}).notNull(),
    description:text("description").notNull(),
    subname:varchar("subname",{length:100}),
    createdAt:timestamp("created_at").default(sql `CURRENT_TIMESTAMP`),
    updatesAt:timestamp("updated_at").default(sql `CURRENT_TIMESTAMP`),

})

