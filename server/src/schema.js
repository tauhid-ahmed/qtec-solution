import {
  pgTable,
  uuid,
  text,
  varchar,
  real,
  json,
  integer,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  price: real("price").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  rating: json("rating").notNull(),
  views: integer("views").notNull().default(0),
});
