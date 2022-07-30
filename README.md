
# Personal Finances BackEnd

This project is a REST API to provide personal finances services. It includes a CRUD system to keep track with payments and incomes for the different money accounts the user has.
## Author

- [Mauricio Noriega](https://www.fiverr.com/manoriega?up_rollout=true)


## Run Locally

### Clone the project

```bash
  git clone https://github.com/Manoriega/PersonalFinancesBE.git
```

### Go to the project directory

```bash
  cd PersonalFinancesBE
```

### Install dependencies

```bash
  npm install
```

### Setup the database

In order to use the data base run the .sql file from the folder DataBase on MySql Workbench.

After that update the values from the file ./src/classes/.keys with the syntax:
```bash
  host: '',
  user: '',
  password: ''
```

### Start the server

```bash
  npm start
```


## Running Tests

To run tests, after starting the server, [Click Here](http://localhost:3000/swagger)

