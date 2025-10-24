import PrimaryButton from "./PrimaryButton";
import React from "react";
export default function Signup() {
    return (<>
        <div className="signContainer flex justify-center">
            <form className="">
                <div className="flex flex-col items-center gap-5 bg-blue-500 w-60">
                    <input type="text"
                        placeholder="Name"
                        name="name"
                    />
                  
                    <input type="password"
                        placeholder="Password"
                    />
                    
                    <input type="Number"
                        placeholder="Phone Number"
                    />
                    <PrimaryButton> ragister </PrimaryButton>
                </div>
            </form>
        </div>
    </>)
}