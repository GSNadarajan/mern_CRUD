import React from 'react'

const Update = () => {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-40 bg-white rounded p-5">
        <form>
          <h2 className='align-items-center text-center'>Update user</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Age</label>
            <input type='text' placeholder='Enter Age' className='form-control' />
          </div>
          <button className='btn btn-success items-center'>Update</button>
        </form>

      </div>
    </div>
  )
}

export default Update;