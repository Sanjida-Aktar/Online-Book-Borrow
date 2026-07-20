"use client"
import React from 'react';

const UpdatePage = () => {
    const onSubmit = (e)=>{
        e.preventDefault();
        const name= e.target.name.value;
        const image= e.target.image.value;

        console.log({name, image});
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
  <div className="w-full max-w-md p-8 rounded-xl shadow-xl bg-white">

    <h1 className="text-3xl font-bold text-center mb-6">
      Update Profile
    </h1>

    <form onSubmit={onSubmit} className="space-y-5">

      <div>
        <label>Profile Image URL</label>

        <input
          type="text"
          name="image"
          placeholder="Enter Image URL"
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label>Name</label>

        <input
          type="text"
            name="name"
          placeholder="Enter Your Name"
          className="input input-bordered w-full"
        />
      </div>

      <button type='submit' className="btn btn-success w-full rounded-3xl">
        Save
      </button>

    </form>

  </div>
</div>
    );
};

export default UpdatePage;