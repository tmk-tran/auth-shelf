
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

INSERT INTO "item" ( "description", "image_url", "user_id")
VALUES ('Cookies', 'https://savorthebest.com/wp-content/uploads/2022/09/blue-cookie-monster-cookies_2853-720x540.jpg', 1),
('Milk', 'https://as1.ftcdn.net/v2/jpg/01/06/68/88/500_F_106688812_rVoRFXazgIMEUJdvffG9p0XvP8Lntf0a.jpg', 1),
('Solo Project Scope Docs', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/12/14/crumpled-paper.jpg', 1),
('Fruit Snacks', 'https://m.media-amazon.com/images/I/91F9+-E5+FL.jpg', 1);