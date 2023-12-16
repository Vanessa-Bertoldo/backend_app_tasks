<p align="center">
  <a href="https://sequelize.org/" target="blank"><img src="/assets/sequelize.png" width="500" alt="Sequelize Logo" /></a>
</p>

# API NODE.JS

<p>This is the backend of the <a href="https://github.com/Vanessa-Bertoldo/TaskSyncHub">TaskHubSync</a> project.
Its structure was created with sequelize, allowing easier database configuration and requests from the frontend</p>

## How the API works

### Prerequisites

* Node.js version 20.7.0
* Mysql2

### Create database 

```bash
    $ create database taskSyncHub;

```

### Installation

Clone this repository and install the dependencies

```bash
    $ npm install
```

Install CLI Sequelize with mysql2 or other database
```bash
    $ npm install sequelize mysql2
```

Run the migrates
```bash
    $ sequelize db:migrate
```

To see this project integrated into an interface, check the frontend in: <a>https://github.com/Vanessa-Bertoldo/TaskSyncHub</a>
