import axios from "axios"
import { useEffect, useState } from "react" 

interface User{
id:Number; 
name:String;
}

function App() { 
const [users,setUsers]=useState<User[]>([]);  
const [error,setError]=useState('');

useEffect(()=>{
axios.get<User[]>('https://jsonplaceholder.typicode.com/users')  
.then(res=>setUsers(res.data)) 
.catch(error=>setError(error.message)) 
},[])
  return (
    <>
    {error && <p className="text-danger">{error}</p>}
        <ul>
            {users.map(user=><li>{user.name}</li>)}
        </ul>
        </>  
  )
}

export default App