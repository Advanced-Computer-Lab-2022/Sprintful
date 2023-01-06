<a name="readme-top"></a>
# Sprintful
An Online Learning System through which individuals can attend pre-recorded
courses online that have been created and uploaded on the website by their instructors.

## Motivation
This project is part of **Advanced Computer Lab** course studied at [The German University in Cairo](https://www.guc.edu.eg/) in the *fourth* year of **Computer Science and Engineering bachelor degree**, and the following are the **Project Objectives**:
- Handle all aspects of web development projects, and greatly expanding our career opportunities by using MERN stack.
- Learn how to properly use the Agile Methodology to plan out a project and develop
the software.
- Learn the process of following a given set of System Requirements to develop a
software.
- Learn how to work together as a team on GitHub.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Build Status
- The website currently fulfil the requirements in [Features](#features) section.
- For reporting bugs or offering contributions or enhancements please check our [Contribute](#contribute) section below.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Code Style
### All languages
* Following Single-responsibility principle
* Single quotes are preferred over double. Reason: HTML uses double quotes.
* Use `void 0` instead of `undefined`, because `undefined` could have been
redefined.
* Write code in functional style with minimum side effects.
* Don't use function statements. Instead, create anonymous functions and
assing them to vars for consistency with other vars.
### Git
* Keep your repository clean. Don’t commit big files unless they absolutely
  require git. Even in this case, prefer storing all big files in a separate
  submodule. That’s because git history can become very big and it will be pain
  for others to use the repo.
* Commit message:
    *  Capitalize the first word and do not end in punctuation   
    * Complte the sentence "This commit will"
* Branch naming:
    * Use slashes as word separator.
    * Use namespaces, for example,
        * `[ContributerName]/[SprintNumber]/Feature/[FeatureName]` or
        * `[ContributerName]/[SprintNumber]/Bug/[BugFixed]`
        * like:  `Ragaa/Sprint2/Feature/Quiz`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Screenshots
[visual representation of what the project is about.  Can be snapshots of the project or a video of the functioning of the project]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Framework used
The project is implemented using the MERN Stack, a free and open-source JavaScript software stack for building dynamic web sites and web applications, MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

- [Mongo DB](https://www.mongodb.com/docs/) is an open-source NoSQL cross-platform document-oriented database.
- [Express JS](https://expressjs.com/) is a web-based application framework work with Node JS, It helps to build web apps and RESTful APIs.
- [React](https://reactjs.org/) is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.
- [Node JS](https://nodejs.org/en/) is a free JavaScript run-time environment, It executes JavaScript code outside of a browser. It is available for macOS, Windows, Linux, and Unix.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features
You can view the full project requirements from [**here**](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1H6UElFJV09XHmQqytyiD0x04cvbdKksWqvOHPyHwMLyGjQ3wAjjAlgDcE4_zWw/pubhtml).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Code Examples
[]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation
1. Clone the repo
   ```bash
   > git clone https://github.com/Advanced-Computer-Lab-2022/Sprintful.git
   ```
2. Navigate to the frontend folder
    ```bash
    > cd Sprintful/frontend
    ```
3. Install frontend packages required
    ```bash
    > npm install 
    ```
4. Navigate back to the parent directory
    ```bash
    > cd .. 
    ```
5. Navigate to the backend folder
    ```bash
    > cd backend 
    ```
6. Install backend packeage required
    ```bash
    > npm install 
    ```
7. Run the server
    ```bash
    > npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API reference

Backend is divided into different routes, and each route has a set of **APIs**, here are some routes examples :
  1. **Add Course**
   - Route `/api/courses/addCourse`
   - Request Type `POST`
   - Request Body 
  ``` 
  {
      title: 'Advanced Computer Lab',
      subject: 'Computer Science',
      price: 500,
      totalhours: 4,
      shortsummary: 'best course ever',
      instructor: '63a6af07df4b397c30130fba',
      previewvideolink: 'videolink',
      discount: 0.1,
   }
  ```
   - Response Body
  ``` 
  {   
      success: false,
      message: "Course could not be added. Error : ", 
      err
  }
  or 
  {   
      success:  true,
      message: "You have added a new course successfully"
  }
  ```
2. **Get Instructor Profile**
  - Route `/api/instructor/profile?id=63ac0000010ff17395982f50`
  - Request type `GET`
  - Response Body 
  ```
  {
    "_id":"63ac0000010ff17395982f50",
    "username":"slim",
    "password":"$2a$10$5FkHQDkHOVauYEayMLRd2uEZ6B24vUNieMLsLx8YvKwlizlAFpc1C",
    "firstName":"slim",
    "lastName":"slim",
    "email":"slim",
    "rating":5,
    "ratingsArray":[],
    "courses":[],
    "reviews":[],
    "money":0,
    "biography":"",
    "contract":false,
    "createdAt":"2022-12-28T08:36:16.751Z",
    "updatedAt":"2022-12-28T08:36:16.751Z","__v":0
  }
  ```
  
3- **Admin Login**
 - Route `/api/admin/loginAdmin`
 - Request Type `POST`
 - Request Body
 ```
 {
    username:'hakimi',
    password: 1234
 }
 ```
- Redirects to `/AdminHome`
- Response Body
 ```
 {
    success: true,
  }
 ```
 or 
 ```
 {   
    success:  false,
    message: "Invalid credentials"
  }
  ```
  
4. **Corporate Trainee Log Out**
   - Route `/api/corporateTrainee/logout`
   - Request Type `GET`
   - Response Body
    ```
    {
       success: true,
       msg: "You have logged out!" 
    }
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests
[This is the section where you mention all the different tests that can be performed with code examples]
1. Get instructor profile
![image](https://user-images.githubusercontent.com/95309665/211105156-5fd934f7-21c4-42a7-832c-578b49d23aff.png)

2. Adding new instructor
![image](https://user-images.githubusercontent.com/95309665/211105248-057bf175-a485-4901-bbad-2d42887a8794.png)

3. Adding review to instructor
![image](https://user-images.githubusercontent.com/95309665/211105338-3450d577-1a58-4052-bc92-822f303cf64d.png)

4. Instructor login
![image](https://user-images.githubusercontent.com/95309665/211105405-6abf583d-0480-482f-803c-265fdc68eae9.png)

5. Instructor log in with wrong password
![image](https://user-images.githubusercontent.com/95309665/211105537-a8dc859a-2f43-46c0-bee1-2237cc8e5421.png)

6. Instructor logout
![image](https://user-images.githubusercontent.com/95309665/211105604-086ccc6b-6b25-4666-874c-0f02b14ad87d.png)

7. Instructor viewing his/her ratings/reviews
![image](https://user-images.githubusercontent.com/95309665/211105746-75bab155-6f30-4db7-b77c-b8d8dd367aa5.png)

8. get amount owned for instrutor
![image](https://user-images.githubusercontent.com/95309665/211105854-23a8f1af-83f9-461a-b471-21942596646b.png)

9. Instructor change password with wrong data in body
![image](https://user-images.githubusercontent.com/95309665/211105939-43db580c-1172-49ac-975c-f215e138f1e3.png)

10. Instructor change password with wrong current password
![image](https://user-images.githubusercontent.com/95309665/211106014-522236a2-a05e-43b5-8e7b-c8626aed56d9.png)

11. Adding grade for an Exam/Exercise
![image](https://user-images.githubusercontent.com/95309665/211106094-1af4d074-7650-4e1c-9640-9ad4583992c3.png)

12. Adding a new exam/exercise for course/subtitle
![image](https://user-images.githubusercontent.com/95309665/211106216-0c59d644-bfa0-4c83-adf7-213deb21338d.png)

13. Adding new subtitle
![image](https://user-images.githubusercontent.com/95309665/211106265-2a90b0d1-e4e5-4797-a39d-cbd41974ab33.png)

14. Adding video for a subtitle
![image](https://user-images.githubusercontent.com/95309665/211106422-a24eb461-ed91-4b88-b0b8-7c58e1357c15.png)

15. Get Questions for a task
![image](https://user-images.githubusercontent.com/95309665/211106508-a7bec650-fa75-4bfd-8351-7766ebc5a97f.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to Use?
[how to use your project. A step-by-step guide is best suited for this purpose. It is better to explain the steps as detailed as possible because it might be a beginner who is reading it.]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contribute
The following is a set of guidelines for contributing to Sprintful. 

### I don't want to contribute I just have a question:
  
  Send us your question via 'sprintful.team@gmail.com' 


 ### How Can I Contribute?

   - Reporting Bugs or Suggesting Enhancements via via 'sprintful.team@gmail.com' 
   - Pull Requests on GitHub
    


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Credits
[Mention any links/repos which helped you or inspired you to build this project. It can be a blog, another open source project, or just people who have contributed to building this project.]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
Distributed under the [MIT License](LICENSE.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributors

- [Hoda Ahmed](https://github.com/hoda27)
- [Nada Aiman](https://github.com/nadaaaz)
- [Somaya Elziady](https://github.com/SomayaElZiady)
- [Ragaa Aly](https://github.com/ragaaaly)
- [Reem Elsady](https://github.com/ReemElsady)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
