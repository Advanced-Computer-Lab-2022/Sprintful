import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import "./AddQuestion.css"
import InstructorNavBarCom from '../components/InstructorNavBarCom'
import { useParams } from "react-router-dom";

const AddQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [choice1, setChoice1] = useState('')
    const [choice2, setChoice2] = useState('')
    const [choice3, setChoice3] = useState('')
    const [choice4, setChoice4] = useState('')
    const [correctl, setCorrect1] = useState(false)
    const [correct2, setCorrect2] = useState(false)
    const [correct3, setCorrect3] = useState(false)
    const [correct4, setCorrect4] = useState(false)
    const {courseid}=useParams();

    const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold"
        
      };
      const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
         console.log(id)
    
    
    const navigate=useNavigate();

    const handleNextSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        const taskid = params.get('taskid');
        console.log(taskid);

        // e.preventDefault()
        const ch1 = {
            text: choice1,
            isCorrect: correctl
        }
        const ch2 = {
            text: choice2,
            isCorrect: correct2
        }
        const ch3 = {
            text: choice3,
            isCorrect: correct3
        }
        const ch4 = {
            text: choice4,
            isCorrect: correct4
        }

        const choices = [ch1, ch2, ch3, ch4]
        console.log(choices)
        const question = {
            title: questionTitle,
            choices: choices,
            task: taskid
        }
        // console.log(taskid);

        // console.log("task defined");
        const response = await fetch(`http://localhost:5000/api/questions/addQuestion?taskid=${taskid}`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (response.ok) {

            //const taskId=json._id;
            console.log('Question added', json)
            setQuestionTitle('')
            setChoice1('')
            setChoice2('')
            setChoice3('')
            setChoice4('')

            //   navigate(`/addQuestion/${taskid}`);
            //   navigate(0);

        }
        else {
            console.log("fail")
        }
    }

    const anotherSubtitle = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        const taskid = params.get('taskid');
        console.log(taskid);

        // e.preventDefault()
        const ch1 = {
            text: choice1,
            isCorrect: correctl
        }
        const ch2 = {
            text: choice2,
            isCorrect: correct2
        }
        const ch3 = {
            text: choice3,
            isCorrect: correct3
        }
        const ch4 = {
            text: choice4,
            isCorrect: correct4
        }

        const choices = [ch1, ch2, ch3, ch4]
        console.log(choices)
        const question = {
            title: questionTitle,
            choices: choices,
            task: taskid
        }
        // console.log(taskid);

        // console.log("task defined");
        const response = await fetch(`http://localhost:5000/api/questions/addQuestion?taskid=${taskid}`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (response.ok) {

            //const taskId=json._id;
            console.log('Question added', json)
            setQuestionTitle('')
            setChoice1('')
            setChoice2('')
            setChoice3('')
            setChoice4('')
            navigate(`/addSubtitle/${courseid}`)

            //   navigate(`/addQuestion/${taskid}`);
            //   navigate(0);

        }
        else {
            console.log("fail")
        }
    }

    const addFinal = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        const taskid = params.get('taskid');
        console.log(taskid);

        // e.preventDefault()
        const ch1 = {
            text: choice1,
            isCorrect: correctl
        }
        const ch2 = {
            text: choice2,
            isCorrect: correct2
        }
        const ch3 = {
            text: choice3,
            isCorrect: correct3
        }
        const ch4 = {
            text: choice4,
            isCorrect: correct4
        }

        const choices = [ch1, ch2, ch3, ch4]
        console.log(choices)
        const question = {
            title: questionTitle,
            choices: choices,
            task: taskid
        }
        // console.log(taskid);

        // console.log("task defined");
        const response = await fetch(`http://localhost:5000/api/questions/addQuestion?taskid=${taskid}`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (response.ok) {

            //const taskId=json._id;
            console.log('Question added', json)
            setQuestionTitle('')
            setChoice1('')
            setChoice2('')
            setChoice3('')
            setChoice4('')

            //   navigate(`/addQuestion/${taskid}`);
            //   navigate(0);

        }
        else {
            console.log("fail")
        }
    }

    return (
        <div>
            <div id="topbar" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 p-0 text-center">
                            <ul class="top-menu">
                                <li><a href="tel:+201001004070">Phone:
                                        +201001004070</a></li>
                                <li><a href="mailto:info@cancham.org.eg">Email:
                                        info@cancham.org.eg</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 hidden-sm hidden-xs">
                            <div class="social-icons social-icons-colored-hover">
                                <ul>
                                    <li class="social-facebook"><a href="https://www.facebook.com/CanCham/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li class="social-youtube"><a href="https://www.youtube.com/channel/UC1ykoFKsMjVQCx3TeLIXDbg" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                    <li class="social-gplus"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="social-linkedin"><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>

           
  {/* <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <InstructorNavBarCom />
              </div>
          </div>
      </div>
  </header>
  <hr/>
  {/* <!-- ***** Header Area End ***** --> */}
  <div className="main-banner">
  <div id="page-wrapper" style={{width: "1200px", height: "1000px",left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
             <br/>
             <div id="page-inner" style={{width: "1100px", height: "900px", margin: 40, background: "white"}}>
                <br/>
                <div className="container">
                <div style={header}>Add a Question</div>
                <br/>
                <br/> <br/>
                <label style={{marginLeft: "375px",color: "black", fontFamily: "Times New Roman", fontSize: "10px"}}>Please tick the checkbox crossponding to the correct answer.</label>

 
  <div> 
        <div className="create">
            <form id="form">
                <label style={{color: "black", fontFamily: "Times New Roman"}}>Question Title: </label>
                <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px", width: "550px"
                   }}
                    type="text"
                    onChange={(e) => setQuestionTitle(e.target.value)}
                    value={questionTitle}

                />
                <br />
                <label style={{color: "black", fontFamily: "Times New Roman"}}> Choice 1</label>
                <input onClick={()=>setCorrect1(current => !current)} type="checkbox" id="1" style={{width: "15px", height: "15px"}}></input>
                {/* {console.log("correct1: " + correctl)} */}
                <input
                    type="text"
                    onChange={(e) => setChoice1(e.target.value)}
                    value={choice1}
                    required
                />

                <br />

                <label style={{color: "black", fontFamily: "Times New Roman"}}> Choice 2</label>
                <input onClick={() => setCorrect2(current => !current)} type="checkbox" id="2" style={{width: "15px", height: "15px"}}></input>
                <input
                    type="text"
                    onChange={(e) => setChoice2(e.target.value)}
                    value={choice2}
                    required
                />

                <br />
                <label style={{color: "black", fontFamily: "Times New Roman"}}> Choice 3</label>
                <input onClick={() => setCorrect3(current => !current)} type="checkbox" id="3" style={{width: "15px", height: "15px"}}></input>
                <input
                    type="text"
                    onChange={(e) => setChoice3(e.target.value)}
                    value={choice3}
                    required
                />

                <br />
                <label style={{color: "black", fontFamily: "Times New Roman"}}> Choice 4</label>
                <input onClick={() => setCorrect4(current => !current)} type="checkbox" id="4" style={{width: "15px", height: "15px"}}></input>
                <input
                    type="text"
                    onChange={(e) => setChoice4(e.target.value)}
                    value={choice4}
                    required
                />
                <br />
                <br />
                <br />
                <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "90px",
                                                    position: "relative",
                                                    marginLeft: "190px"}} onClick={handleNextSubmit}>Next Question</button>
            </form>
        </div>
 

        </div>
         <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "90px",
                                                    position: "relative",
                                                    marginLeft: "190px"}}  onClick={ addFinal} >Publish </button>




        </div>
                <br/>
                </div>
                </div>
            </div>
    
            <footer style={{height: "100px"}}>
                <div className="container" style={{height: "20px"}}>
                 
                        <div className="col-lg-4">
                            <div className="about">
                                    <img src="/upload/logo.png" alt="Homepage" style={{width: "180px", 
                                                                                    height: "70px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Contact Us</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>If you have any suggestions email us on info@cancham.org.eg</p>
                                <p style={{ fontFamily: "Times New Roman"}}>Call us +201001004070 from 9 AM to 4 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Location</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>Villa 25 Mourad street off Orouba, Heliopolis، Almazah, Heliopolis, Cairo Governorate 11475</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <label>© 2023 CANADIAN CHAMBER OF COMMERCE. ALL RIGHTS RESERVED.</label>
                            </div>
                        </div>
                    
                </div>
            </footer>

  
</div>  
  )
}

export default AddQuestion
