import React, { useEffect, useRef } from 'react'
import style from "./signin.module.css"

type Props = {}

const Signin = (props: Props) => {
    const frontCard = useRef<HTMLSpanElement>(null);
    const signUpBtn = useRef<HTMLSpanElement>(null);
    const loginBtn = useRef<HTMLSpanElement>(null);
    const userEmailInp = useRef<HTMLSpanElement>(null);
    const userFNameInp = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        signUpBtn.current.addEventListener("click", () => {
            frontCard.current.classList.add(style.front_card_signup);
            userFNameInp.current.focus();

        })

        loginBtn.current.addEventListener("click", () => {
            frontCard.current.classList.remove(style.front_card_signup);
            userEmailInp.current.focus();

        })
    }, [])
    return (
        <>
            <div className="flex items-center justify-center h-[100vh] bg-[#333] w-full">
                <div className={style.container}>
                    <div ref={frontCard} className={style.front_card}>
                        <form action="#" className={style.login_form}>
                            <input type="email" className={style.user_email, style.input} ref={userEmailInp} placeholder="Email" autoFocus />
                            <input type="password" className={style.user_password, style.input} placeholder="Password" />
                            <button className={style.button,style.login_btn}>LogIn</button>
                        </form>
                        <form action="#" className={style.signup_form}>
                            <input ref={userFNameInp} type="text" className={style.user_full_name, style.input} placeholder="Full Name" />
                            <input type="email" className={style.user_email, style.input} ref={userEmailInp} placeholder="Email" />
                            <input type="password" className={style.user_password, style.input} placeholder="Password" />
                            <button className={style.button,style.login_btn}>SignUp</button>
                        </form>
                    </div>
                    <div className={style.back_card}>
                        <div className={style.login_msg}>
                            <h2 className='text-2xl font-bold'>Have account?</h2>
                            <button ref={loginBtn} className={style.login_msg_btn,style.button}>LogIn</button>
                        </div>
                        <div className={style.signup_msg}>
                            <h2 className='text-2xl font-bold'>Do not have account?</h2>
                            <button ref={signUpBtn} className={style.signup_msg_btn,style.button}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin