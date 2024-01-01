import { auth, googleProvider } from "../config/firebase"; 
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {useState} from "react"

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    const sighIn = async () => {
        try {
await createUserWithEmailAndPassword(auth, email, password )
    }catch (err){
console.error(err)
    }
} 

const sighInWithGoogle = async () => {
    try {
await signInWithPopup(auth, googleProvider )
}catch (err){
console.error(err)
}
} 

const logout = async () => {
    try {
await signOut(auth)
}catch (err){
console.error(err)
}
} 


    return (
    <div>
        <input placeholder="enter emeail"
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input placeholder="enter password"
        type="password"
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={sighIn}> Sign in </button>

        <button onClick={sighInWithGoogle}>Sigh in with Google</button>

        <button onClick={logout}>Log Out</button>
    </div>
    );
};