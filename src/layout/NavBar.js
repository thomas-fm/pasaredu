import React from 'react'
import Head from 'next/head'

const NavBar = () => {
    return (
        <>
            <div>
                <Head>
                <title>Pasaredu</title>
                <link rel="icon" href="/pasaredu-logo.png" />
                </Head>

                <div className="container 2xl:mx-20 md:mx-20 md-w-auto flex items-center border-b-4 border-gray-80">
                <div className="w-2/12 mx-2 md:w-6/12 2xl:w-8/12 2xl:h-auto flex">
                    <img
                    src="/pasaredu-logo.png"
                    alt="Logo Pasaredu"
                    className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] 2xl:w-[90px] 2xl:h-[90px]"
                    ></img>
                </div>
                <div className="flex w-6/12 my-2 md:w-3/12 2xl:w-3/12 md:mx-10">
                    <ul className="space-x-3 flex md:flex 2xl:flex 2xl:space-x-20">
                    <li><a href="/login" className="mx-6 text-xs 2xl:text-base font-bold tracking-widest uppercase shadow">Login</a></li>
                    <li><a href="/register/mentee" className="text-xs 2xl:text-base font-bold tracking-widest uppercase shadow">Sign Up</a></li>
                    </ul>
                </div>
                
                <div className="w-4/12 -mx-5 md:mx-20 flex items-center md:w-3/12 2xl:w-1/12 2xl:-mx-10" style={{marginLeft: "10px"}}>
                    <a href="/register/tutor" className="text-xs 2xl:text-base border-4 border-yellow-400 px-2 font-bold uppercase">
                    Jadi Tutor
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default NavBar