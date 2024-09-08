import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    const nav = useNavigate()
    const [token, setToken] = useState(() => localStorage.getItem("token"))
    useEffect(() => {
        if(!token) nav("/login")
    },[])
  return (
   token && children
  )
}
