<a name="readme-top"></a>

<!-- PROJECT LOGO / TITLE -->
<br />
<div align="center">
    <a href="https://github.com/RubyTuesday77/STGNoteTakingApp">
        <img src="supportfiles/stglogo.png" alt="logo" />
    </a>
    <h3 align="center">STG Note-Taker</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#about-the-project">About the Project</a>
            <ul>
                <li><a href="#built-with">Built With</a></li>
            </ul>
        </li>
        <li>
            <a href="#application-endpoints">Application Endpoints</a>
            <ul>
                <li><a href="#application-endpoints">Server API</a></li>
                <li><a href="#application-endpoints">React App</a></li>
            </ul>
        </li>
        <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
            </ul>
        </li>
        <li><a href="#roadmap">Roadmap / Future Updates</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
    </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About the Project

STG Note-Taker is a web-based app for creating and editing notes. The user will initially sign up for an account and subsequently log in to add, edit and delete notes.
![Desktop Layout](supportfiles/STG-screenshot.png?raw=true)
* The user will need to sign up before creating notes:
    ![Signup Form](supportfiles/Signup.png?raw=true)
* The user will log in to add, edit, or delete notes:
    ![Login Form](supportfiles/Login.png?raw=true)
* Notes can be composed with fields for Title, Content, and Tags/Keywords (optional):
    ![Add Note](supportfiles/addnote.png?raw=true)
* Individual notes are displayed in an Accordion format, and can be expanded or collapsed as needed. Clicking on the edit or trash icon on individual notes will allow the user the edit or delete notes, respectively, after they are created:
    ![Individual Note](supportfiles/note-example.png?raw=true)
* Trashcan Icon - for deleting notes:
    ![Delete](supportfiles/Delete-icon.png?raw=true)
* Edit Icon:
    ![Individual Note](supportfiles/Edit-icon.png?raw=true)
* The edit icon will create a pop-up window that allows the user to edit any fields:
    ![Edit Pop-Up](supportfiles/Edit-screenshot.png?raw=true)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

STG Note-Taker is a full-stack MERN app built with the following frameworks/libraries:
* [![React.js](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
* [![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
* [![MongoDB](https://custom-icon-badges.demolab.com/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
* [![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- APP ENDPOINTS -->
## Application Endpoints

### Server API (http://localhost:5000)
| Method | Path                        | Purpose                  |
| ------ | ----------------------------| -------------------------|
| GET    | /api                        | Home page                |
| GET    | /api/auth                   | User route               |
| POST   | /api/auth/createuser        | Create a user            |
| POST   | /api/auth/login             | Authenticate a user      |
| POST   | /api/auth/getuser           | Get details of a user    |
| GET    | /api/notes                  | Notes route              |
| GET    | /api/notes/fetchallnotes    | Get all notes for a user |
| POST   | /api/notes/addnote          | Let user add a note      |
| PUT    | /api/notes/updatenote/:id   | Let user edit a note     |
| DELETE | /api/notes/deletenote/:id   | Let user delete a note   |


### React App (http://localhost:3000)
| Component                | Purpose                                                               |
| ------------------------ | ----------------------------------------------------------------------|
| `components/About.js`    | Component directing to About page (/about)                            |
| `components/AddNote.js`  | Component on Home page that consists of form for adding notes         |
| `components/Alert.js`    | Component that creates an alert for the NoteState (in context folder) |
| `components/Home.js`     | Home page (/) - contains Notes and AddNote components                 |
| `components/Login.js`    | Component directing to Login page (/login)                            |
| `components/Navbar.js`   | Navigation bar at top of Home (/), /login, /signup, and /about pages  |
| `components/NoteItem.js` | Component representing individual note that make up Notes component   |
| `components/Notes.js`    | Component on Home page that includes individual note item components  |
| `components/Signup.js`   | Component directing to Signup page (/signup)                          |


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started
At this time, STG Note-Taker has not yet been deployed so it must be installed locally.

### Prerequisites
In order to set STG Note-Taker up on your local computer you will need to create a database on MongoDB. You can refer to the MongoDB documentation at https://www.mongodb.com/docs/atlas/getting-started/ for instructions on how to do this.


### Installation
Once you have gotten a MongoDB database set up (see Prerequisites above):
1. Fork the repository https://github.com/RubyTuesday77/STGNoteTakingApp to your GitHub account.
2. Clone the repository to your local machine
    ```sh
   git clone https://github.com/RubyTuesday77/STGNoteTakingApp.git
   ```
3. `cd` into the `frontend` folder in a separate terminal:
    * Run `npm install` to install dependencies.
    * Create an `.env` file in the root of the folder that includes the following environmental variable:
    ```sh
        REACT_APP_SERVER_URL=http://localhost:5000/
    ```
4. `cd` into the `server` folder in a new, separate terminal:
    * Run `npm install` to install dependencies.
    * Create an `.env` file in the root of the folder that includes the following environmental variables:
    ```sh
        # Make sure the port number matches the one used in the server .env
        PORT=5000

        # The <username>, <password>, <hostname>, and <database> will be for the MongoDB database you've created
        MONGO_URI=mongodb+srv://<username>:<password>@<hostname>/<database>

        # <token> can include any sequence of text or numbers you want to use as a keyword - no spaces
        JWT_SECRET=<token>
    ```
5. Finally, run `npm start` in each terminal so that the server API and frontend React app are running at the same time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP / FUTURE UPDATES -->
## Roadmap / Future Updates

- [ ] Deploy app to Amazon Web Services.
- [ ] Update Tags/Keywords to be clickable and return all notes with the specified term.
- [ ] Update User password to require upper and lowercase alphanumeric and special characters. Right now it requires only 8 characters.
- [ ] Add pagination to the Notes to accommodate high volume.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

* Email: tysonlannon@gmail.com
* GitHub: https://github.com/RubyTuesday77
* LinkedIn: https://www.linkedin.com/in/tysonlannon/
* Twitter: [@tysonlannon](https://twitter.com/tysonlannon)

<p align="right">(<a href="#readme-top">back to top</a>)</p>