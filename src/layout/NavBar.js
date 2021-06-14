import React from 'react'
import Head from 'next/head'

export default function NavBar(){
    return (
        <>
            <div>
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
                        <div className="flex mx-40 2xl:mx-40">
                            <ul className="flex space-x-10 2xl:space-x-10">
                                <li><a href="/login" className="text-xs  md:text-base 2xl:text-base font-bold tracking-widest">LOGIN</a></li>
                                <li><a href="/register/mentee" className="text-xs md:text-base 2xl:text-base font-bold tracking-widest">SIGN UP</a></li>
                                <li><button  className="border-4 text-xs md:text-base 2xl:text-base shadow font-bold tracking-widest" style={{borderBottomColor: "gold", borderRightColor: "gold", borderTopColor: "black", borderLeftColor: "black", padding:"0px 6px"}}>
                                <a href="/register/tutor">JADI TUTOR</a></button> </li>
                            </ul>
                        </div>     
                    </div>
                </div>
            </div>

        </>
    )
}