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
### Home Page
![Home Page](https://user-images.githubusercontent.com/67105668/211094928-78cadfd7-fae1-4728-9d6c-59e06503d443.jpeg)
### Search Results
![search](https://user-images.githubusercontent.com/67105668/211098959-2e12ecd7-56e7-4bc5-8bc0-0b677ca24877.jpeg)
### Admin Dashboard
![admin hom](https://user-images.githubusercontent.com/67105668/211105572-f4f09b3d-3862-41b3-ba09-5336d22afb27.jpeg)
### Instructor Profile
![batates](https://user-images.githubusercontent.com/67105668/211095131-344b8e60-f54d-4a9a-a9f4-ec847a0c6b92.jpeg)



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

```jsx
const addGrade = asyncHandler(async (req, res) => { 
    const taskid = req.body.taskid
    const grade = req.body.grade
    const task = await Task.findById(taskid)
    if (task) {
        task.grade = grade
        await task.save()
        res.json(task)
    }
    else {
        res.status(404)
        throw new Error('Task not found')
    }
})
```

```jsx
useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:5000/api/questions/getQuestions?taskid=${taskid}`)

        .then((res) => {
          console.log(res.data);
          setQuestions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);
```

```jsx
   // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
```

```jsx
export default function MostPopular() {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const fecthPopular = async () => {
      await axios.get(`http://localhost:5000/api/courses/popular`).then(
        (res) => {
          const courses = res.data
          if (courses) {
            setCourses(courses)
            console.log("courses in fetch:" + courses)
          }
          else
            console.log("no courses")
        }
      );
    }
    fecthPopular()
  }, [])
``` 

```jsx
const addContent = asyncHandler(async(req,res)=>{

    const subtitle_id = req.params.subtitleid  ;
    const idArray = subtitle_id.split("\n")
    const newid = idArray[0];
    const content = req.body.content;
   
    const update = {content:content};
  
    const subtitleupdated = await Subtitle.findOneAndUpdate({_id :newid},update,{new : true});
    if(subtitleupdated){
    res.json(subtitleupdated);
    }
    else{
      res.json({message:"This subtitle is not found"})
    }
})
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
  
3. **Admin Login**
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
5. **Get Report By ID**
 - Route `/api/report/63a48f7cf31cb909b00acfe4`
   - Request Type `GET`
   - Response Body
    ```
   {
    "_id": "63a87323dc654a91b0db3dfc",
    "subject": "you",
    "body": "me",
    "status": "resolved",
    "type": "Other",
    "instructorId": "63a80e444837f02169da6da5",
    "__v": 3,
    "followups": [
        "workkk",
        "resolve it now"
    ]
   }
    ```
6. **Instructor Review Ratings**
 - Route `/api/instructor/reviewsnratings?id=63abfeb254c7c7d8f72cc2b6`
   - Request Type `GET`
   - Response Body
    ```
    { 
      "rating" : 141.66666666666666,
      "allReviews":["too","",null,null,null,"rtyui","","","","","",null]
    }

    ```
7. **Admin Add Corporate**
 - Route `/api/admin/addCorporate/`
 - Request Type `POST`
 - Request Body
 ```
{
    "name": "hopaa",
    "subject": "Physics"
}
 ```
- Response Body
 ```
{
    "_id": "63b8886efb7ab4d53675c03d",
    "name": "hopaa",
    "subject": "Physics"
}
 ```
8. **Instructor Edit Profile**
   - Route `/api/instructor/editProfile?id=639a3e79453a18405648e8cb`
   - Request Type `PUT`
   - Request Body 
  ``` 
 {
  "email": "gege@gmail.com"
 }
  ```
   - Response Body
  ``` 
{
    "firstName": "",
    "lastName": "",
    "_id": "639a3e79453a18405648e8cb",
    "username": "Gerizmann",
    "password": "$2a$10$QZyZ2k8ussE0ILataCuWC.jidAP7ev.aicliNPyjCDiuyqnXDeVCe",
    "email": "gege@gmail.com",
    "rating": 0,
    "ratingsArray": [],
    "courses": [
        "6383d46a6d33730b4cfece29",
        "6385c9f46f6bb55a030163d4",
        "63a43a046ff5971f842dafd4",
        "63a43a066ff5971f842dafd8",
        "63a43a066ff5971f842dafdc",
        "63a43a076ff5971f842dafdf",
        "63a43a076ff5971f842dafe3",
        "63a43a076ff5971f842dafe7",
        "63a43a106ff5971f842dafec",
        "63a4c60967f7793f16cdb40f",
        "63a4c6f667f7793f16cdb413",
        "63a4c85a67f7793f16cdb433",
        "63a4d35d67f7793f16cdb46b",
        "63a60fc09541bfc68a6017e2",
        "63a623077e4f73ca2837c7d6",
        "63a62491b59f7565817f4aef",
        "63a629b927f2c563366f19ae",
        "63a633427fbd245488274a4e",
        "63a634b57fbd245488274aa7",
        "63a637f57fbd245488274ce8",
        "63a74edb317263b1c7f4ffef",
        "63a8359440ab36a05ecb4069",
        "63a85122b701bb9b6e222d0d",
        "63a85129b701bb9b6e222d11",
        "63b59f3f3e59ccdc64290295",
        "63b59f433e59ccdc64290299",
        "63b5e9e93dc6c3d7f204a018",
        "63b609e64f918637464a0b82",
        "63b60b49df6234929072aded",
        "63b60f3e8646f603f75e82cd",
        "63b6117539e56e413385997d",
        "63b61548fc7e0737289aac17",
        "63b62ddf027ef91946b85d16",
        "63b6354d2a42de50479bbafd",
        "63b65e6468c3a395507382c5",
        "63b65fde9eadd0bff377cf71",
        "63b665760944c339dffd2094",
        "63b6ebe785156d9053f9328f",
        "63b6fca9cd77a7348d0c14fa"
    ],
    "reviews": [],
    "money": 0,
    "biography": "ana batates m7amamra",
    "createdAt": "2022-12-14T21:22:01.804Z",
    "updatedAt": "2023-01-06T21:29:52.822Z",
    "__v": 0,
    "contract": true,
    "policy": true
}
```
9. **Instructor Change Password**
   - Route `/api/instructor/changePassword?id=639a3e79453a18405648e8cb`
   - Request Type `PUT`
   - Request Body 
  ``` 
{
    "currentPassword": "123456789",
    "password": "1234"
}
  ```
   - Response Body
  ``` 
{
    "firstName": "",
    "lastName": "",
    "_id": "639a3e79453a18405648e8cb",
    "username": "Gerizmann",
    "password": "$2a$10$hdz0axlbFe3OsAZEVyBUn.I/vfHyy4rSbcVbTEcZbpX2HM7CwSpLK",
    "email": "gege@gmail.com",
    "rating": 0,
    "ratingsArray": [],
    "courses": [
        "6383d46a6d33730b4cfece29",
        "6385c9f46f6bb55a030163d4",
        "63a43a046ff5971f842dafd4",
        "63a43a066ff5971f842dafd8",
        "63a43a066ff5971f842dafdc",
        "63a43a076ff5971f842dafdf",
        "63a43a076ff5971f842dafe3",
        "63a43a076ff5971f842dafe7",
        "63a43a106ff5971f842dafec",
        "63a4c60967f7793f16cdb40f",
        "63a4c6f667f7793f16cdb413",
        "63a4c85a67f7793f16cdb433",
        "63a4d35d67f7793f16cdb46b",
        "63a60fc09541bfc68a6017e2",
        "63a623077e4f73ca2837c7d6",
        "63a62491b59f7565817f4aef",
        "63a629b927f2c563366f19ae",
        "63a633427fbd245488274a4e",
        "63a634b57fbd245488274aa7",
        "63a637f57fbd245488274ce8",
        "63a74edb317263b1c7f4ffef",
        "63a8359440ab36a05ecb4069",
        "63a85122b701bb9b6e222d0d",
        "63a85129b701bb9b6e222d11",
        "63b59f3f3e59ccdc64290295",
        "63b59f433e59ccdc64290299",
        "63b5e9e93dc6c3d7f204a018",
        "63b609e64f918637464a0b82",
        "63b60b49df6234929072aded",
        "63b60f3e8646f603f75e82cd",
        "63b6117539e56e413385997d",
        "63b61548fc7e0737289aac17",
        "63b62ddf027ef91946b85d16",
        "63b6354d2a42de50479bbafd",
        "63b65e6468c3a395507382c5",
        "63b65fde9eadd0bff377cf71",
        "63b665760944c339dffd2094",
        "63b6ebe785156d9053f9328f",
        "63b6fca9cd77a7348d0c14fa"
    ],
    "reviews": [],
    "money": 0,
    "biography": "ana batates m7amamra",
    "createdAt": "2022-12-14T21:22:01.804Z",
    "updatedAt": "2023-01-06T21:31:51.765Z",
    "__v": 0,
    "contract": true,
    "policy": true
 }
  ```
  10. **Add Course**
   - Route `/api/courses/getSubtitles?courseId=63b6ebe785156d9053f9328f`
   - Request Type `GET`
   - Response Body
  ``` 
  [
    {
        "_id": "63b6ec0585156d9053f93294",
        "title": "WEEK1",
        "totalHours": 12,
        "course": "63b6ebe785156d9053f9328f",
        "content": "this is batates",
        "tasks": [
            "63b6ec1585156d9053f932a0"
        ],
        "videos": [],
        "createdAt": "2023-01-05T15:25:57.840Z",
        "updatedAt": "2023-01-05T15:26:13.791Z",
        "__v": 1
    }
]
  ```
  11. **Get Subtitles**
   - Route `/api/subtitles/63b6ec0585156d9053f93294`
   - Request Type `GET`
   - Response Body
  ``` 
  {
    "_id": "63b6ec0585156d9053f93294",
    "title": "WEEK1",
    "totalHours": 12,
    "course": "63b6ebe785156d9053f9328f",
    "content": "this is batates",
    "tasks": [
        {
            "_id": "63b6ec1585156d9053f932a0",
            "title": "task1",
            "questions": [
                "63b6ec3f85156d9053f932a5",
                "63b6ec7b85156d9053f932d6"
            ],
            "subtitle": "63b6ec0585156d9053f93294",
            "grade": 0,
            "createdAt": "2023-01-05T15:26:13.670Z",
            "updatedAt": "2023-01-05T15:27:55.485Z",
            "__v": 2
        }
    ],
    "videos": [],
    "createdAt": "2023-01-05T15:25:57.840Z",
    "updatedAt": "2023-01-05T15:26:13.791Z",
    "__v": 1
  }
  ```
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests
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
Useful resources and youtube channels helped us building our project:
- [MERN Stack Playlist](https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm)
- [Frontend Tutorials](https://www.youtube.com/@NetNinja)
- [Authentication Guide](https://blog.loginradius.com/engineering/guest-post/nodejs-authentication-guide/)

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
