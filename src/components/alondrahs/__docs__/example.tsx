import React from "react";
import AlondraHS,{AlondraHSProps} from "../alondrahs";

function Example(props:AlondraHSProps){
    return(
        <AlondraHS
            message={props.message}
            messagecolor={props.messagecolor}
            color={props.color}
            icon={props.icon}
            />
    )
}
export default Example