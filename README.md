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

**Would You Rather** is an app where users can write and vote on "Would You Rather" questions. See if youre choices agree with the majority and debate your choices. 

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
|     Heroku     | To deploy the backend|
|  Netlifiy  | To deploy the frontend |

<br>

### Client (Front End)

#### Wireframes

![Desktop Version](url)

- Desktop Design All

[Mobile Version](url)

- Mobile Design All


#### Component Tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture 

``` structure

|__ assets/
      |__ fonts
      |__ images
      |__ css/
          |__Home.css
|__ components/
      |__ Home.jsx
|__ services/
      |__ Sort.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- Adding likes to polls - most liked would be sent to the front/landing page
- Adding likes to comments 
- Sort/or have categories 

***

## Code Showcase

## Code Issues & Resolutions
