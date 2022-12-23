const reportDetails = () => {
    useEffect( ()=>{
        const fetchReport =async () =>{
            await axios.get(`http://localhost:5000/api/report/${id}`).then(
           (res) => { 
               const reports = res.data
               console.log(reports)
               setReport(reports)
           }
            );
        }
        fetchReport()
    }, [])

    return (
        <div>
            <h1>Report Details</h1>
        </div>
    );
}

export default reportDetails;