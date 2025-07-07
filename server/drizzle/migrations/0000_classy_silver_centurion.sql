CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"price" real NOT NULL,
	"category" varchar(100) NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"rating" json NOT NULL,
	"views" integer DEFAULT 0 NOT NULL
);
