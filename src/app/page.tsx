
"use client";
import {Button} from "@/components/ui/button";
import  {useState} from "react";
import { Input } from "@base-ui/react";

import { authClient } from "../lib/auth-client";

export default function Home() {

  const {data: session,} = authClient.useSession() 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const  onSubmit =  () =>{
     authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name

  },{
    onSuccess: () => {
      window.alert("succces")
    },
    onError: () => {
      window.alert("errror")
    },
  }
) 
}
  const  onLogin =  () =>{
     authClient.signIn.email({
        email, // user email address
        password, // user password -> min 8 characters by default


  },{
    onSuccess: () => {
      window.alert("succces logdnin")
    },
    onError: () => {
      window.alert("errror")
    },
  }
) 
}
if(session){
  return (
    
    <div className="p-4 flex flex-col  gap-y-4">
      <p>logedin</p>
      <Button onClick={() => authClient.signOut()}>sign out</Button>
      !</div>
  )
}

  return (<div className="p-4 flex flex-col  gap-y-10"
  >
   <div className="p-4 flex flex-col  gap-y-4">
    <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

   <Button onClick={onSubmit}>
    create account
   </Button>
   </div>
   <div className="p-4 flex flex-col  gap-y-4">

    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

   <Button onClick={onLogin}>
    Login in
   </Button>
   </div>
   
  </div>)
}