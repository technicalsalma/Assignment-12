import {useEffect,useState} from "react";

const useToken = user =>{
  const [token, setToken] = useState('');  
  useEffect (()=>{
      const email = user?.user?.email;
      const currentUser = {email: email}
      if(email){
       fetch(`http://localhost:5000/user/${email}`,{
         method: 'PUT',
         headers:{
           'content-type': 'application/json'
         },
         body:JSON.stringify(currentUser)
       })
       .then(res => res.json())
       .then(data => {
         console.log('data inside useToken',data)
         const accesstoken = data.token;
        localStorage.setItem('accessToken', accesstoken)
         setToken(accesstoken);
       })

      }
   
  } ,[user])
  return [token];
}

export default useToken;