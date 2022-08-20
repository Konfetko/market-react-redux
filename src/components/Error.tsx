import React from 'react';


export interface IErrorProps{
    error:string
}

const Error = ({error}:IErrorProps) => {
    return (
        <div
            style=
                {{
                    color:"red",
                    fontSize:"13pt",
                    fontWeight:"bold",
                    maxWidth:"300px"
                }}
        >
            {error}
        </div>
    );
};

export default Error;