import React from "react";
export default function PrimaryButton({children}) {
    return <button className="bg-blue-900 text-white font-semibold w-30 h-10  rounded hover:bg-blue-700 ">
       {children}
    </button>
}