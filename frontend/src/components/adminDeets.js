const AdminDetails = ({ admin }) => {

    return (
      <div className="admin-details">
        <h4>Current Admins</h4>
        <p><strong>User name: </strong>{admin.username}</p>
        <p><strong>Password: </strong>{admin.password}</p>
        <p>{admin.createdAt}</p>
      </div>
    )
  }
  
  export default AdminDetails