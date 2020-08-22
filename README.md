# NodeApp
A simple node and express app that has basic functionalities as follows:-

* User authentication.
* Role based access.
* Admin can mange user data.


### Usage
Download or clone the repository and run the following commit,make sure you have [node js](https://nodejs.org/en/) installed on your computer.
```javascript
npm install
```
This will install all the node dependencies need for this project. 


#### API
` npm start ` will run the server on [http://localhost:3000/](http://localhost:3000/)

| Url              | Method | Sample Data  |  Access allowed roles  | Detail                                    |
|---------------   |--------|---------     |-------------           |--------                                   |  
| /api/data/create | GET    |              |                        | Create 'Users' table                      |
| /api/data/insert | GET    |              |                        | Insert some sample data to 'Users' table  |
| /admin           | GET    |{"userId":10} | admin                  | Opens admin panel                         |
| /manage          | GET    |{"userId":10} | admin,manager          | Opens manager dashboard                   |
| /api/auth/login  | POST   |{<br/>"username":"admin",<br/>"password":"123456"}| | Logins the user                        |
| /api/user        | GET    |{"userId":10} |           | Get all users data |
| /api/user        | POST   |{<br/>"name":"John",<br/>username":"admin",<br/>"password":"123456",<br/>"role":"user"<br/>} |           | Insert new user |
| /api/user        | PUT    |{<br/>"userId":4,<br/>"name":"John",<br/>username":"admin",<br/>"password":"123456",<br/>"role":"user"<br/>} |  | Update user data |
| /api/user        | DELETE |{"userId":3} |           | Delete user |

