# MERN_MYSQL

## In the master branch the mysql node and react app is initially structured
## This is an ideal app in this branch to work with express, mysql and react.
## step to get this app up and running on local dev environment:
1. git clone "https://github.com/farhadraiyan/MERN_MYSQL.git" from master branch
### Server:
2. Cretae a database on local pc with the config stated in database/config.js (and make sure database is connected with express server).
3. Create two tables users(Fields: username, created_at) and Admin_User(Fields: id, name, address)
4. navigate to Server folder and run npm install, once done then npm start and express server will be running on localhost:3003 (change the default port for express to avoid conflict with react app since react is also running on port 3000)

### client:
5. navigate to client folder and run npm install, once done then npm start and react will be running on localhost:3000

### Database connection and data backup:
1. To connect use the previous procedure explained in  node.
2. To migrate, first put the sql files inside the data folder 
3. Then get into the running mysql contianer and run 'docker exec -it <contianer_name or id> bash'
4. My sql file is mounted to the  docker-entrypoint-initdb.d directory insdie the container.
5. login to mysql by 'mysql -u root -p' then enter password for root user.
6. create the database by 'create database <database name> and use <database name>
7. Once get in contianer with root access run sql script by 'source <sqlfile name>'
That's it.


