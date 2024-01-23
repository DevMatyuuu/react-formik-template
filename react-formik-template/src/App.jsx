import React from 'react'
import Img from '../src/assets/formImg.jpg'
import { useFormik } from 'formik'

const validate = values => {
  const errors = {};
  if (!values.userName) {
    errors.userName = '';
  } else if (values.userName.length > 15) {
    errors.userName = 'Must be 15 characters or less';
  }

  if (!values.password) {
    errors.password = '';
  } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  return errors;
};

function App() {

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validate,
  });

  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-slate-400'>
        <div className='flex h-[500px] lg:h-[500px] md:h-[500px] shadow-2xl'>
          <form onSubmit={formik.handleSubmit} className='flex flex-col bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-[400px] lg:w-[450px] md:w-[350px] text-center items-center py-12 rounded-xl md:rounded-r-none'>
              <h1 className='mb-16 mt-16 md:mt-12 text-white text-3xl md:text-xl lg:text-3xl font-bold'>Sample Formik Form</h1>
              <div className='flex justify-start flex-col items-center gap-10'>
                <div className='flex-col flex'>
                  <div className='flex items-center gap-4'>
                    <span className='text-white'>Username: </span>
                    <input onChange={formik.handleChange} value={formik.values.userName} id="userName" name="userName" type='text' className='px-2 py-1 rounded-sm'/>
                  </div>
                  <div className='ml-[90px] mt-2'>{formik.errors.userName ? <div className='text-red-500'>{formik.errors.userName}</div> : null}</div>
                </div>
                <div className='flex-col flex mb-16'>
                  <div className='flex items-center gap-4'>
                    <span className='text-white mr-1.5'>Password: </span>
                    <input onChange={formik.handleChange} value={formik.values.password} id="password" name="password" type='text' className='px-2 py-1 rounded-sm'/>
                  </div>
                  <div>{formik.errors.password ? <div className='text-red-500'>{formik.errors.password}</div> : null}</div>
                </div>
              </div>
              <div className='items-center text-center'>
                <button type='submit' className='bg-white py-2 px-20 rounded-md font-semibold hover:bg-slate-500 hover:text-white'>Log in</button>
              </div>
          </form>
          <div>
            <img src={Img} alt='formImg' className='h-full w-[350px] rounded-r-2xl lg:block hidden md:block'/>
          </div>
       </div>
      </div>
    </div>
  )
}

export default App