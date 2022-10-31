import { useEffect, useState } from "react"
import AdminDetails from "../components/adminDeets"
import adminForm from "../components/AdminForm"

const Home = () => {
    const[admins, setAdmins] = useState(null)


    useEffect(() => {
        const fetchAdmins = async () => {
            const response = await fetch('/api/admin/getAdmin')
            const json = await response.json()

            if(response.ok){
                setAdmins(json)
            }
        }
        fetchAdmins()
    }, [])


    return (
     <div className="home">
      <div className="admins">
        {admins && admins.map(admin => (
          <AdminDetails admin={admin} key={admin._id} />
        ))}
      </div>
      <adminForm/>
    </div>
    )
}

export default Home