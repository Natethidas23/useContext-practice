import { UserStatus} from "../App.js";
import { useContext } from "react";
export default function SubPage (){
    //3) Use UserText 
    const [signedIn,setSignedIn]=useContext(UserStatus);
    
    return(
        <>
        <h2>Subpage</h2>
        <button onClick={()=> setSignedIn(!signedIn)}>
           {signedIn ? "Sign Out" : "Sign In"} 
        </button>
        </>
    )
}