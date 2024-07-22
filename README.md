# Node-postgres-setup-all-queries (Sequelize ORM)

1.Set-Up node express server
Installed express and dotenv packages

2.Connected Postgres

3.Installed Sequelize ORM

- npm install --save sequelize
- # One of the following:
            $ npm install --save pg pg-hstore # Postgres
            $ npm install --save mysql2
            $ npm install --save mariadb
            $ npm install --save sqlite3
            $ npm install --save tedious # Microsoft SQL Server
            $ npm install --save oracledb # Oracle Database
- Installing CLI
  # using npm
  i.npm install sequelize
  ii.npm install --save-dev sequelize-cli
  Project bootstrapping
  iii.npx sequelize-cli init
    - config, contains the config file, which tells CLI how to connect with the database
    - models, contains all models for your project
    - migrations, contains all migration files
    - seeders, contains all seed files
  
  iv.migration and models
4.Connecting to a database
