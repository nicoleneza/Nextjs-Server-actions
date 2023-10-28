"use client"
import React from 'react'
import { formSubmission } from './action';
// import { useFormState } from "react-dom";

import { experimental_useFormState as useFormState,experimental_useFormStatus as useFormStatus} from 'react-dom'

export default function Form() {
const [state,formAction] = useFormState(formSubmission,{
    error:'',
    success: false
})
const error = state.error;
const success = state.success;
const formStatus = useFormStatus();
  return (
    <div>
        <form action={formAction} className='flex flex-col gap-4'>
            <input type="email" name='email' className=' h-11 rounded-lg text-black text-center'/>
            <input type="name" name='name' className='h-11 rounded-lg text-black text-center'/>
            {!!error && <p className=' text-red-500'>{error}</p>}
            <button type= "submit">
              {formStatus.pending ? "Loading...":"submit"}
            </button>
        </form>
    </div>
  )
}
