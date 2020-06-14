CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "address_id" int NOT NULL,
  "name" text,
  "genre" text,
  "birth" timestamp
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "address_id" int NOT NULL,
  "name" text,
  "employees" int,
  "full_day" int
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "state" text,
  "city" text,
  "street" text,
  "zip" int
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "color" text,
  "plate" text,
  "mileage" int
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "manufacturer" text,
  "model" text,
  "fuel_type" text,
  "transmission" text
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "car_id" int NOT NULL,
  "status" int DEFAULT 1,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "customers" ("address_id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("address_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");
