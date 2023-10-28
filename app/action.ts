"use server";
import { setTimeout } from "timers/promises";

export const formSubmission= async(prevState:any,formData:FormData)=>{
    const email = formData.get("email");
    const name = formData.get("name");

    await setTimeout(3000);

    return{
        error : "failes"
    }
}