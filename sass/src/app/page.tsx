"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-clinent";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { 
        data: session,
    } = authClient.useSession() 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const onSubmit = () => {
  authClient.signUp.email({
    email,
    name,
    password,
  },{onError: () => {
      window.alert("Error creating user");
    },
    onSuccess: () => {
      window.alert("successfully");
    }
  });
  
};
 const onLogin = () => {
  authClient.signIn.email({
    email,
    password,
  },{onError: () => {
      window.alert("Error creating user");
    },
    onSuccess: () => {
      window.alert("successfully");
    }
  });
  
}
if(session){
  return(
    <div className="flex flex-col p-4 gap-y-p gap-y-4">
      <p>
        Logged in as{session.user.name}
        
      </p>
       <button style={{margin: "10px",background: "red", color: "white"}} onClick={() => authClient.signOut()}>Sign Out</button>

    </div>
  )}

  return (
    <><div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-10">
        <div>
          <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />



          <Button onClick={onSubmit}>
            Create user
          </Button>
        </div></div>
        </div>
        <div className="flex flex-col gap-y-10">
          <div>
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />



            <Button onClick={onLogin}>
              Login
            </Button>
          </div></div></>
  );
  
}

