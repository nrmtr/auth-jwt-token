# Auth JWT Token

In this project, I try to do api ( Application programming interface ) authentication and authorization with JWT Token and knowledges of MVC (Models-views-controller) is design pattern to develops programming languages used basic javascript node.js express.js and knowledge NoSQL database example in this project is mongodb run on docker-compose *frontend not done yet.
 
# List of contents
- [Structure Project](#structure-project)
- [How to installation](#installation)
- [How to run](#how-to-run)
 

# Structure Project

```
├── config
│   └── dbcon.js
├── controllers
│   ├── authController.js
│   └── renderController.js
├── docker-compose.yml
├── middleware
│   └── validate.js
├── models
│   └── userModel.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   ├── bootstrap.min.css
│   │   ├── register.css
│   │   └── signin.css
│   ├── img
│   │   ├── login.png
│   │   └── registration.png
│   └── js
├── routes
│   └── auth.js
├── server.js
└── views
    ├── about.ejs
    ├── login.ejs
    └── register.ejs
```
# Installation
init repository in your directory folder
```bash
git init
git clone https://github.com/nrmtr/auth-jwt-token.git
```

# How to Run
run docker compose file
```bash
docker compose up -d
```
download node.js and then run this command 
```bash
npm start 
```
