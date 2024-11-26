"use client"
import { submitAction } from "@/action/form";
import { useRef } from "react";
export default function Home() {

  let ref = useRef()
 
  return (
    <div className="w-2/3 mx-auto my=12">
      <form ref={ref} action={
        (e)=>{
          submitAction(e);
          ref.current.reset()
        }
      }>
        <div>
          <label htmlFor='name'>Name</label>
          <input name="name" id="name" className="text-black" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black" type='text' />
        </div>
        <button type="submit" className="bg-red-300">submit</button>
      </form>
    </div>
  );
}
