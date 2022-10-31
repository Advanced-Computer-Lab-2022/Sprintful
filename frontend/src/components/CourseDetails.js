const CourseDetails = ({ course }) => {
    return (
        <div>
            <div>
            <h4>{course.title}</h4>
            </div>
            <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Price: </strong>{course.price} EGP</p>
            <p><strong>Discount: </strong>{course.discount*course.price} EGP</p>
            <p><strong>Total Hours: </strong>{course.totalhours}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
            <p><strong>Short Summary: </strong>{course.shortsummary}</p>
            {/* <p><strong>Preview Video Link: </strong>{course.previewvideolink}</p> */}
            <div>
                <h4>Course Content</h4>
                {course.subtitles.map((subtitle) => (
                    <p><strong>{subtitle.title}</strong></p>
                    
                ))}
                {/* // <p>{course.subtitles}</p> */}
            </div>
        </div>
        
    )
}

export default CourseDetails