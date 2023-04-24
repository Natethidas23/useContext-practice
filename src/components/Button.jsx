import { UserStatus} from "../App.js";

import { useContext } from "react";

export default function Button (){
    //3) Use UserText 
    const [signedIn,setSignedIn]= useContext(UserStatus);

    return(
        <>
       <button onClick={()=> setSignedIn(!signedIn)}>
           {signedIn ? "Sign Out" : "Sign In"} 
        </button>
        </>
    )
}