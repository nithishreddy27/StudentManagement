import React,{useState} from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useUser } from '../lib/hooks'
import Link from "next/link"



export default function form() {
    
    const {register , handleSubmit ,control} = useForm({
        defaultValues:{
            test:[{}]
        }
    });
    const {fields, append , remove }=useFieldArray({control,name:"test"});

    const onFormSubmit = data =>{
        console.log(data);
    }
  return (
    <div>   
        <form onSubmit={handleSubmit(onFormSubmit)}>
    
    <label htmlFor="branch">branch</label>
    <input type="text" id='branch' name='branch'/>
    <button onClick={()=>append({name:""})} >Append new input</button>
    <div className='flex flex-col'>
        {fields.map(({id},index)=>{
            return (
                <div key={id}>
                    <input type="text" className='m-2' {...register( `test.${index}.name`)} />
                    <button onClick={()=>remove(index)}>remove</button>
                </div>
            )
        })}
    </div>
    <button type="submit">Submit</button>
</form>
          
   
</div>
  )
}

