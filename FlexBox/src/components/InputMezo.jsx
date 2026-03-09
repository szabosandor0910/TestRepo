import { useEffect } from "react";

function InputMezo({sc}) {



    return(
        <>
            <input type="text" onChange={(e)=>{sc(e.target.value)}} />
        </>
    )
}

export default InputMezo;