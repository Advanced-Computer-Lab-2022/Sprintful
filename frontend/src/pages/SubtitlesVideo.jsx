import { Container } from 'react-bootstrap'
const SubtitlesVideo = () => {

    let params = new URLSearchParams(document.location.search);
    let link = params.get("link");
    console.log(link)
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('input').value],    
                    {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "notes.txt";
        document.body.appendChild(element);
        element.click();
      }
    //   downloadTxtFile();
    return (
    <div style={{overflow: "hidden"}}>
         <Container>
            <div className="ratio ratio-21x9"  style={{float: "left" , width:"700px" , position:"relarive", left:"-50px"}}>
                <iframe src={link} title="YouTube video" allowFullScreen></iframe>
            </div>
            </Container>
            <div style={{float: "right",  width:"1000px",position:"relative", top: "-325px" , left: "490px"}}>
                <h1 style={{marginTop:"30px"}}> Write Notes </h1>
             <textarea id="input" type="text" style= {{padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                    width :"50%",
                    
                    }}/>
             <button onClick={downloadTxtFile} style={{background: "#a4243b", color: "white",padding: "12px 0", fontSize: "2rem",  borderRadius: "25px", cursor: "pointer", width:"10%", borderRadius: "20px"}}>
             {/* position: "relative",left :"40px",top:"-30px" */}
                Download</button>  
            </div>
        </div>

    )


}
export default SubtitlesVideo;
