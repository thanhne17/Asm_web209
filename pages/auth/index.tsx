import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signin, signup } from '../../api/auth'
import AuthLayout from '../../components/layout/AuthLayout'

type Props = {}

type formInput = {
  email: string,
  password: string
}


const Register = (props: Props) => {
  const toartSuccess = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm()
  const router = useRouter()
  const onSubmit: SubmitHandler<formInput> = (data) => {
    signin(data)
      .then(() => {
        toartSuccess.current.classList.toggle("hidden")
        toartSuccess.current.classList.toggle("block")
      })
      .then(() => {
        router.push("/")
      })
      .catch(() => {
        setError(false)
      })
  }

  return (
    <>
      <div ref={toartSuccess} id="toast-success" className="absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 hidden" role="alert">
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Đăng nhập thành công.</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                  <h1 className='text-2xl font-semibold pb-4'>Đăng nhập</h1>
                </div>

                <div className="mb-6">
                  <input
                    {...register('email', { required: true })}
                    name="email"
                    type="text"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border ${error ? " border-gray-300" : `border-[red]`}  ${Object.keys(errors).length == 0 ? "border-gray-300" : `border-[red]`}`}
                    placeholder="Email"
                  />
                  {
                    // !error ? (<p className='text-[red]'>Email đã được sử dụng</p>) : 
                    Object.keys(errors).length !== 0 && (
                      <>
                        {errors.email?.type === "required" && (<p className='text-[red]'>Email không được bỏ trống</p>)}
                      </>
                    )}
                </div>

                <div className="mb-6">
                  <input
                    {...register("password", { required: true, minLength: 8 })}
                    name="password"
                    type="password"
                    className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${Object.keys(errors).length == 0 ? "border-gray-300" : `border-[red]`}`}
                    placeholder="Mật khẩu"
                  />
                  {
                    // !error ? (<p className='text-[red]'>Email đã được sử dụng</p>) : 
                    Object.keys(errors).length !== 0 && (
                      <>
                        {errors.password?.type === "required" && (<p className='text-[red]'>Mật khẩu không được bỏ trống</p>)}
                        {errors.password?.type === "minLength" && (<p className='text-[red]'>Mật khẩu có tối thiểu 8 kí tự</p>)}
                      </>
                    )}
                </div>

                <div className="text-center lg:text-left flex justify-between items-center">
                  <button
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Đăng nhập
                  </button>
                  <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-300 ease-in-out">
                    <Link
                      href="/auth/register"
                    >Đăng kí
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Register.Layout = AuthLayout
export default Register