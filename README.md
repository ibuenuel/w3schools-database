# W3Schools Database in Docker

Forked from https://github.com/AndrejPHP/w3schools-database for academic purposes.

This repository provides:

- a docker compose which sets up the DB on port 3309 (non-default, no clashes)
- initializes the database data from w3schools (provided by @AndrejPHP) 
- Visual Studio Code config

## Prerequisite
Make sure that the following software is installed:
- Docker

## Fork to your github account
Go to github.com, create a new account or login.
- Fork this repo (https://github.com/ibuenuel/w3schools-database.git)

Now you have a repository w3schools-database in your github account.
Clone that with:
```bash 
git clone https://github.com/YOURUSERNAME/w3schools-database
cd w3schools-database
code .
```

Run the database and rest-api

```bash
sudo docker-compose up
```

Start the react app

```bash
cd my-app
npm start
```

## How to reset?

Execute:

```bash
docker compose down
rm -rf data
docker compose up -d
```

## Tables

When the docker container starts, it creates database named __w3schools__ with the following tables

    categories
    customers
    employees
    orders
    order_details
    products
    shippers
    suppliers
    
and inserts the respective data. 

## Features
1. Get and list all Products
2. Get and list all Categories
3. Get and list all Suppliers
4. Create a new Product
5. Create a new Categorie
6. Create a new Supplier
7. Update an existing Product
8. Update an existing Categorie
9. Update an existing Supplier
10. Delete a Product
11. Delete a Categorie
12. Delete a Supplier
13. Filter by Category or Supplier (If its provided, to test see Products Page)
14. Search Entity by Name
15. Reset Filters and Search Term with a Button
16. Sort by Entity Fields
17. Pagination of the Table

## Journal
### 14.09.2024
The project setup was quite difficult, as I am missing some linux and docker experience.
After some try and errors and support from ChatGPT I made it finally work

