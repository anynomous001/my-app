import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form-container-outer'>
            <div className='form-container-inner'>
                <h3>Register Your Name !</h3>
                <div className='form'>
                    <div class="form-el">
                        <label for="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div class="form-el">
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <button>Register Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Form