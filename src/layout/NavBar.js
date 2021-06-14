import React from 'react'
import Head from 'next/head'

export default function NavBar(){
    return (
        <>  
            <Head>
                <title>Pasaredu</title>
                <link rel="icon" href="/pasaredu-logo.png"></link>
            </Head>
            <div style={{position: "sticky", top: "0", backgroundColor: "white"}}>
                <div className="flex items-center">
                    <div className="flex items-center w-full 2xl:w-full md:mx-40 2xl:mx-40 ">
                        <div>
                            <a href="/">
                                <img 
                                    src="/pasaredu-logo.png"
                                    className="w-[45px] h-[45px] md:h-[90px] md:w-[90px] 2xl:h-[90px] 2xl:w-[90px]">
                                </img>
                                </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center 2xl:justify-end" style={{width:"100%"}}>
                        <div className="flex mx-40 2xl:mx-20">
                            <ul className="flex space-x-10 2xl:space-x-10 w-full">
                                <li><a href="/login" className="text-xs md:text-base 2xl:text-base font-extrabold shadow tracking-widest">LOGIN</a></li>
                                <li><a href="/register/mentee" className="text-xs md:text-base 2xl:text-base font-extrabold shadow tracking-widest">SIGN UP</a></li>
                                <li><a href="/katalog" className="text-xs md:text-base 2xl:text-base font-extrabold shadow tracking-widest">TUTOR</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full" style={{width: "30%"}}>
                        <button  className="border-4 text-xs md:text-base 2xl:text-base shadow font-extrabold tracking-widest" style={{borderBottomColor: "gold", borderRightColor: "gold", borderTopColor: "black", borderLeftColor: "black", padding:"0px 6px"}}>
                                <a href="/register/tutor">JADI TUTOR</a></button>
                    </div>
                </div>
            </div>

        </>
    )
}