# Job Application Tracker

A portal for the candidates who are applying for jobs at various organisations and want to keep track of the application process at various organisations.

Hosted live at: [https://jobsy-mern-app.up.railway.app](https://jobsy-mern-app.up.railway.app/)

Created using MongoDB database.

### Installation

```
git clone https://github.com/idhamija/jobsy-mern-app.git
cd jobsy-mern-app
npm run install-dependencies
```

### Setup

Create a .env file in the following format:

```
MONGO_URL = <MONGO_DB_URL>

JWT_SECRET = <JWT_SECRET_STRING>
JWT_LIFETIME = <JWT_LIFETIME_LENGTH>
```

### Run Development Server

```
npm run dev
```

### Built Using

- [React](https://reactjs.org/) - JavaScript Library for Building User Interfaces
- [Node](https://nodejs.org/) - JavaScript Runtime Built on Chrome's V8 JavaScript Engine
- [Express](https://expressjs.com/) - Node.js Framework for HTTPS Server
- [Mongoose](http://mongoosejs.com/) - Node.js ORM for MongoDB Database
- [JWT](https://jwt.io/) - JSON Web Token for Authentication

