/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'


export default function Createtaskform() {

    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label" >Task Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Task Title" name="task-title" ref={register} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" >Task Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Task Description" name="task-desciption" ref={register} ></textarea>
            </div>

            <input type="submit" />
        </form>
    );
}
