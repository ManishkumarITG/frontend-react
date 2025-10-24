import PrimaryButton from "./PrimaryButton";
import React ,{ useEffect , useState} from "react";
export default function Effect() {
    const [data , setData] = useState(0)
    console.log("mar")
    const handleClick = ()=>{
        setData(data+1)
    }
  useEffect(()=>{
    console.log("manish")
  },[data])

  return (
    <>
    <p>{data}</p>
        <button onClick={handleClick}>Click</button>
    </>
  )
}