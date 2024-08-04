# Job Application Tracker

A portal for candidates applying for jobs at various organizations, allowing them to keep track of their application process.

Created using the MERN stack.

## To Run Application Using Docker

```
git clone https://github.com/idhamija/jobsy-mern-app.git
cd jobsy-mern-app
docker-compose -f docker-compose.yml up -d
```

## To run application without using docker

### Installation

```
git clone https://github.com/idhamija/jobsy-mern-app.git
cd jobsy-mern-app
npm run install-dependencies
```

### Setup

Create a .env file in the below given format and replace already .env file with new .env file:

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
