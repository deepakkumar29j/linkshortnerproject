import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { usersTable } from "./db/schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const sql = neon(databaseUrl);

export const db = drizzle({ client: sql });

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  const [createdUser] = await db
    .insert(usersTable)
    .values(user)
    .returning({ id: usersTable.id });

  if (!createdUser) {
    throw new Error("The user insert did not return a created user");
  }

  console.log("New user created!");

  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database:", users);

  await db
    .update(usersTable)
    .set({ age: 31 })
    .where(eq(usersTable.id, createdUser.id));
  console.log("User info updated!");

  await db.delete(usersTable).where(eq(usersTable.id, createdUser.id));
  console.log("User deleted!");
}

main().catch((error: unknown) => {
  console.error("Database CRUD example failed:", error);
  process.exitCode = 1;
});
