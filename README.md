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


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Create frontend |
|   React Router   | To make routed enpoints for each page |
| Rails | Creating backend: databases, models, and controllers |
| Axios | Making calls to the database |
|jwt| For user authentication|
| Bootstrap | for graphs or other component styles(?)|
|     Heroku     | To deploy the backend|
|  Netlifiy  | To deploy the frontend |

<br>

### Client (Front End)

#### Wireframes
- Desktop Design
![Desktop Veiw](https://user-images.githubusercontent.com/57376725/113156592-c142ca80-91ff-11eb-857c-383bd2d0ee58.png)






- Mobile Design
![Mobile](https://user-images.githubusercontent.com/57376725/113155692-ebe05380-91fe-11eb-8ff6-29da0ac9714a.png)



#### Component Tree

[Component Tree](https://whimsical.com/would-you-rather-UVfB72XZgXnCyczacZxmo4)

#### Component Architecture 

``` structure

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

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Backend Scaffold    |    H     |     3 hrs      |      hrs     |     hrs    |
| Add Routes and seed data|    H     |     1 hrs      |      hrs     |     hrs    |
| Create React App- file structure |    H     |     1 hrs      |      hrs     |     TBD     |
| Build out routes/front end  |    H     |     3 hrs      |      hrs     |     TBD     |
| Build Landing page |    H     |     3 hrs      |      hrs     |     TBD     |
| Build Home page |    H     |     3 hrs      |      hrs     |     TBD     |
| Build Sign in Sign Up Forms |    H     |     3 hrs      |      hrs     |     TBD     |
| Build Write Your Own Form |    H     |     3 hrs      |      hrs     |     TBD     |
| Css basics for each layout|    H     |     8 hrs      |      hrs     |     TBD     |
| advance css- animations, transitions|    H     |     4 hrs      |      hrs     |     TBD     |
| TOTAL               |          |      30hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1LyFXJTJjheOda322ZbsNUOTLZqq45_Oh/view?usp=sharing)
<br>

***

## Post-MVP

- Adding likes to polls - most liked would be sent to the front/landing page
- Adding likes to comments 
- Sort/or have categories 

***

## Code Showcase

## Code Issues & Resolutions
