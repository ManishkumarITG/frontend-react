import PrimaryButton from "./PrimaryButton";
import React from "react";
export default function Login() {

    return (<>
        <div className="signContainer flex justify-center ">
            <form className="">
                <div className="flex flex-col items-center gap-5 bg-blue-500 w-60 py-20 rounded">
                     <input className="bg-blue-300 rounded py-1 px-2" 
                     type="Number"
                        placeholder="Phone Number"
                    />

                    <input className="bg-blue-300 rounded py-1 px-2" 
                     type="password"
                        placeholder="Password"
                    />
                   
                    <PrimaryButton> Login </PrimaryButton>
                    
                </div>
            </form>
        </div>
    </>)
}