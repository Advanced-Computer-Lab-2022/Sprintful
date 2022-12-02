import { Container } from 'react-bootstrap'
const Video = () => {

    let params = new URLSearchParams(document.location.search);
    let link = params.get("link");
    console.log(link)
    return (
        <div>
            <Container>
            <div className="ratio ratio-16x9">
                <iframe src={link} title="YouTube video" allowFullScreen></iframe>
            </div>
            </Container>
            
        </div>

    )


}
export default Video;
