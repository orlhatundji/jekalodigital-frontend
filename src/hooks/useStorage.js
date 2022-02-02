import { useState, useEffect } from "react";
import axios from 'axios'

const baseAxiosMethod = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type':  'application/json',
    }
  });
  

export default () => {
    const [users, setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [deleting, setDeleting] = useState(false)
    const [creating, setCreating] = useState(false)
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        setLoading(true)
        try {
            const response = await baseAxiosMethod.get('/users')
            setUsers(response.data.data)
        } catch (err) {
            setErrorMessage('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const deleteUser = async (username) => {
        setDeleting(true)
        try {
            await baseAxiosMethod.delete(`/user`, { data: { username }})
            getUsers()
        } catch (err) {
            setErrorMessage('Something went wrong')
        } finally {
            setDeleting(false)
        }
    }

    const createUser = async (data) => {
        setCreating(true)
        try {
            await baseAxiosMethod.post(`/user`, { ...data  })
            getUsers()
        } catch (err) {
            setErrorMessage('Something went wrong')
        } finally {
            setCreating(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return {loading, users, creating, createUser, deleting, deleteUser, errorMessage}
}