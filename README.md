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
```jsx
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({})
    if (courses) {
        res.json(courses)
    } else {
        res.status(404)
        throw new Error('Courses not found')
    }
})
```

```jsx
const logout = async (req, res) => {
    const token = generateToken ("");
    res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
    res.status(200).json({message: "You have logged out!"})
}
```

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to Use?
Open http://localhost:3000 to view **the guest homepage**.
![Guest Home Page](https://user-images.githubusercontent.com/67105668/211089660-88be5df4-600b-4733-8d5a-7c5a567fe7d5.jpeg)
### Sign up
![Sign up](https://user-images.githubusercontent.com/67105668/211089931-05453d3c-6782-443d-9058-8787b2205a08.jpeg)
### Log in
![Log in](https://user-images.githubusercontent.com/67105668/211090011-75d97eeb-e431-46b9-a2d3-4655cc2c7e23.jpeg)
### Trainee / Instructor Home Page
![trainee inst home page](https://user-images.githubusercontent.com/67105668/211093439-ae84a053-574e-4429-8bb5-ce1dfc3006dd.jpeg)
#### My Courses Page
![my courses](https://user-images.githubusercontent.com/67105668/211093728-576681ad-a4b0-4afd-a85e-765045b58275.jpeg)
#### Course Page
![course page](https://user-images.githubusercontent.com/67105668/211093608-64e241f7-8428-45a6-8539-4672effd4592.jpeg)
#### Subtitle Page
![sub](https://user-images.githubusercontent.com/67105668/211093648-3a3efca4-0713-4b55-bdfe-40e0fffb5043.jpeg)

### Admin Home Page
You can navigate to all admin functionalities through **the side nav bar** in Admin Home Page.
![admin home page](https://user-images.githubusercontent.com/67105668/211089513-c44cc68f-2220-4f82-a1d7-7b0a6b043a94.jpeg)
#### User's reports
![reports](https://user-images.githubusercontent.com/67105668/211090772-e433818b-1c5e-4339-8708-419e8eda6799.jpeg)
#### Add New Admin
![new admin](https://user-images.githubusercontent.com/67105668/211091018-d1a26574-e2d3-4847-b6df-3a05d5966bb8.jpeg)
#### Add New Instructor
![NEW INSTRUC](https://user-images.githubusercontent.com/67105668/211091162-68b43547-305f-425b-8d4c-dac79fb852df.jpeg)
#### Add New Coporate Trainee
![coep trainee](https://user-images.githubusercontent.com/67105668/211091276-7415c01f-a007-4c90-a9bf-6cf1539dc8b0.jpeg)
#### Admin Change Password
![WhatsApp Image 2023-01-06 at 9 51 46 PM](https://user-images.githubusercontent.com/67105668/211091434-73696d7e-06f0-411e-a7ba-43f313a793de.jpeg)
#### Courses Requests
![WhatsApp Image 2023-01-06 at 9 51 43 PM](https://user-images.githubusercontent.com/67105668/211091643-a85ba032-3fe5-48ec-ae17-15aa6172877f.jpeg)
#### Refund Requests
![WhatsApp Image 2023-01-06 at 9 51 44 PM](https://user-images.githubusercontent.com/67105668/211091917-5b9feee8-dc14-4f01-8609-d1a83a7c63ed.jpeg)


#### 

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
Useful resources and yotube channels helped us building our project:
- https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm
- https://www.youtube.com/@NetNinja
- https://blog.loginradius.com/engineering/guest-post/nodejs-authentication-guide/

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
