import React, {Component} from 'react';
import {Button} from 'reactstrap';
import jsPDF from 'jspdf'
const { useState } = require("react");

//class Testpdf extends Component {
    class MyApp extends React.Component {
        downloadTxtFile = () => {
          const element = document.createElement("a");
          const file = new Blob([document.getElementById('input').value],    
                      {type: 'text/plain;charset=utf-8'});
          element.href = URL.createObjectURL(file);
          element.download = "notes.txt";
          document.body.appendChild(element);
          element.click();
        }
        render() {
          return (
           <div>
             <input id="input" style= {{padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px"}}/>
             <button onClick={this.downloadTxtFile}>Download</button>  
            </div>
          );
         }
       }
// const Testpdf = () => {
//     const [notes, setNotes] = useState("");

//     const pdfGenerate=()=>{
//         var doc = new jsPDF('landscape','px','a4', 'false');
//         doc.text(50, 10, notes)
        
//         doc.save('notes.pdf');
//     }
//     // render();
//     {
//         return(
//             <div style = {{textAlign: 'center'}}>
//                 <label>Enter your notes</label>
//                 <input 
//                         type="text"
//                         onChange={(e) => setNotes(e.target.value)}
//                         value={notes}/>

//                 <Button onClick={this.pdfGenerate}> Download PDF</Button>
//             </div>
//         );
//     }
// }
//export default Testpdf;

export default MyApp;