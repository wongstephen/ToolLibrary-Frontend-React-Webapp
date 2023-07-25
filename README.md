# BrorrowNinja App

Why get frustrated trying to remember if you loaned your tools out again? BorrowNinja is a full-stack app that automatically tracks all the items in your tool inventory and you can see who has what. Forget about writing up a list on paper or trying to remember who you lent to; just use BorrowNinja and never worry about it again.
<br />
<br />

<a href="https://toollibrary.netlify.app/">
<img src="https://img.shields.io/badge/WWW-Tool%20Library-green" alt="BorrowNinjalink"/></a>
<br />
<br />

<img src="./assets/gitmockup.png">

<br />
<br />

## Development

### Technologies Used

Front end

- ReactJS
- JavaScript
- Tailwind

Backend

- MongoDB
- NodeJS
- Express
- Bcrypt Encryption
- JWT Authentication

DevOps

- Docker
- Nginx
- GitHub Actions CI/ID
- Digital Ocean Virtual Private Server
- Pm2

### User Stories

- As a user, I want to be able to add tools to my inventory with their respective details (name, description, image) so that I can keep track of all the tools I own.
- As a user, I want to be able to view a list of all the tools in my inventory so that I can see what tools I have available.
- As a user, I want to be able to loan a tool to someone else and specify the loanee's name and the loan start date, so that I can keep track of who has borrowed my tools.
- As a user, I want to be able to mark a tool as returned when it is returned by the loanee, so that I can update the status of the tool in my inventory.
- As a user, I want to be able to view a list of tools that I have loaned out and see the loanee's name and the loan duration, so that I can keep track of the tools that are currently on loan.
- As a user, I want to be able to edit the details of a tool in my inventory (name, description, image) so that I can update the information if it changes.
- As a user, I want to be able to delete a tool from my inventory if I no longer own it, so that I can keep my inventory up to date.
- As a user, I want to be able to search for a specific tool in my inventory by its name, so that I can quickly find the tool I am looking for.
- As a user, I want to receive notifications or reminders when a tool is overdue or when the loan period is about to expire, so that I can follow up with the loanee if necessary.
  As a user, I want to be able to generate reports or export data from my tool inventory, so that I can keep records or share information with others.
- As a user, I want to be able to securely log in to the app using my username and password, so that my tool inventory remains private and accessible only to me.

- As a user, I want to be able to reset my password if I forget it, so that I can regain access to my tool inventory.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You will also need to run the backend server by running node app.js after cloning and downloading https://github.com/wongstephen/toolloaner-backend

The page will reload when you make changes.

### Entity Relationship Diagram

![Group 1](https://user-images.githubusercontent.com/20288105/190870869-642f60a7-70ab-4828-b164-0234d8359904.png)

### Updates

- 02/03/2023 Update summmary: Updates made to background and edit functionality. Added avatar for edit and tools. Localhost removed from API and confirm password feature added. Login redirected when no token is present and updated auth in mid-app. Deleted user tools and updated homepage. Google analytics and adsense added, loading screens added for inventory and login/registration. Private routes added and components organized for better functionality. Edit items feature added and loanee removed on click. Search and sort added to inventory, heroic icons added and styling updated with Tailwind. Connected frontend to live backend and updated signout page. Add Item component connected to backend and tests added for register. Feed connected to backend and updated with context for auth. Basic tests added.
- 10/3/2022 Added check for duplicate email
- 10/5/2022 Added Updated Routes

### Future Updates

- [ ] Forget password
- [ ] Add notes field for user to enter notes about a tool
- [x] Add date and track dates tools are loaned out. Include days loaned out.
- [ ] Host backend on AWS
- [ ] Relationship Schema for Loanee
- [ ] Password requirements
- [x] Store data into useContext to reduce API calls
- [ ] Create loading throbber for AddItems and Edit items when user selects a new image.
- [ ] Create staging environment deployed to AWS via CI/CD
- [ ] Additional Test
  - Login
  - [ ] Passes when user enters correct username and password
  - [ ] Fails when user enters wrong username
  - [ ] Fails when user enters correct username and wrong password
  - [ ] Faits when user does not enter an username and/or password

### Issue Tracking

- When the user edits an item and tries to update it, the server responds with an error.
