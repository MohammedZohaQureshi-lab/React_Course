
import React from 'react'

const UserForm = () => {
    const submitHandler = event => {
        event.preventDefault();
        alert()
    }

    return (
        <form onSubmit={submitHandler}>
             <div className=''>
                <label htmlFor='name'>User Id</label>
                <input type='text' id='name' />
            </div>
            <div className=''>
                <label htmlFor='name'>User Name</label>
                <input type='text' id='name' />
            </div>
            <div className=''>
                <label htmlFor='email'>User Email</label>
                <input type='email' id='email' />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default UserForm



