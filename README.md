# Would-You-Rather

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Would You Rather** is an app where users can write and vote on "Would You Rather" questions. See if youre choices agree with the majority and debate in the comments below.

<br>

## MVP

The **Would You Rather** MVP is to have full CRUD functionality with a user login/create account page, a home page, landing page where you can vote on would you rather questions and comment below to debate with other users, and the ability to write your own questions, edit, or delete these.
<br>

### Goals

- Landing page:Lists top questions will look similar to the home without features for those not logged in
- Home Page: list of questions you can scroll through and answer, see the poll, and comments
- detail page: for each poll/question you can click in to it to open up the discussion and respond.
- Sign Up: form to create account
- Sign In: form to sign in
- Write Your Own Form: Would you rather question form (must have an account to make)
- Account Page: shows one users info, posts(Questions) and comments

<br>

### Libraries and Dependencies

|     Library     | Description                                          |
| :-------------: | :--------------------------------------------------- |
|      React      | Create frontend                                      |
|  React Router   | To make routed enpoints for each page                |
|      Rails      | Creating backend: databases, models, and controllers |
|      Axios      | Making calls to the database                         |
|       jwt       | For user authentication                              |
| React Bootstrap | carousel on landing                                  |
|     Heroku      | To deploy the backend                                |
|     Netlify     | To deploy the frontend                               |

<br>

### Client (Front End)

#### Wireframes

- Desktop Design
  ![Desktop Veiw](https://user-images.githubusercontent.com/57376725/113161596-27c9e780-9204-11eb-9d5c-92c4a3502b87.png)

- Mobile Design
  ![Mobile](https://user-images.githubusercontent.com/57376725/113155692-ebe05380-91fe-11eb-8ff6-29da0ac9714a.png)

#### Component Tree

[Component Tree](https://whimsical.com/would-you-rather-UVfB72XZgXnCyczacZxmo4)

#### Component Architecture

```structure

|__ assets/
      |__ fonts
      |__ images
      |__ css/
          |__Home.css
|__ components/
      |__ Layout.jsx
|__ screens/
       |__Home.jsx
|__ services/
      |__ Sort.jsx
```

#### Time Estimates

| Task                                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Create Backend Scaffold              |    H     |     3 hrs      |     2hrs      |    2hrs     |
| Add Routes and seed data             |    H     |     1 hrs      |     2hrs      |    2hrs     |
| Create React App- file structure     |    H     |     1 hrs      |      30mins      |     30mins     |
| Build out routes/front end           |    H     |     3 hrs      |      1hrs      |     1hrs     |
| Build Landing page                   |    H     |     3 hrs      |      3hrs      |     3hrs     |
| Build Home page                      |    H     |     3 hrs      |      5hrs      |     5hrs     |
| Build Sign in Sign Up Forms          |    H     |     3 hrs      |      2hrs      |     2hrs     |
| Build Write Your Own Form            |    H     |     3 hrs      |      1hr      |     1hr     |
| Css basics for each layout           |    H     |     8 hrs      |      8hrs      |     8hrs     |
| advance css- animations, transitions |    H     |     4 hrs      |      4hrs      |     4hrs     |
| TOTAL                                |          |     30hrs      |      28.5hrs      |     28.5hrs     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1LyFXJTJjheOda322ZbsNUOTLZqq45_Oh/view?usp=sharing)
<br>

---

## Post-MVP

- Adding likes to polls - most liked would be sent to the front/landing page
- Adding likes to comments
- Sort/or have categories
- Changing progile images/ having a profile image
- light/dark modes
- Color options for bar graphs(user decides)

---


