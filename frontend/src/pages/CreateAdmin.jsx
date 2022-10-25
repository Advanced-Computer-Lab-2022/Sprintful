import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { createAdmin, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function CreateAdmin() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData

        const navigate = useNavigate()
        const dispatch = useDispatch()

        const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }

        if (isSuccess || user) {
          navigate('/')
        }

        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username,
            password,
        }
        dispatch(createAdmin(userData))
    }

      if (isLoading) {
        return <Spinner />
      }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Create Admin
                </h1>
                <p>Please create an admin account</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Enter username'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Create Admin
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateAdmin