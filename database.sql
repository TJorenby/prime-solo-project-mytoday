database name: myToday_app

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "events" (
	id SERIAL PRIMARY KEY,
	date TIMESTAMP,
	user_id INT REFERENCES "user",
	description VARCHAR(2000),
	file_url VARCHAR (2000), 
	highlight BOOLEAN
	
);

