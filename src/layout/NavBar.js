import React from 'react'
import Head from 'next/head'

export default function NavBar(){
    return (
        <>  
            <Head>
                <title>Pasaredu</title>
                <link rel="icon" href="/pasaredu-logo.png"></link>
            </Head>
            <div className="border-2" style={{position: "sticky", top: "0", backgroundColor: "white", borderBottomColor: "gray"}}>
                <div className="flex items-center">
                    <div className="flex md:mx-40" style={{width:"45%"}}>
                        <div>
                            <a href="/">
                                <img 
                                    src="/pasaredu-logo.png"
                                    style={{width: "80%" , height: "100%"}}>
                                </img>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:mx-20 md:justify-end 2xl:justify-end" style={{width:"100%"}}>
                        <div className="flex 2xl:mx-40 md:mx-20">
                            <ul className="flex w-full md:space-x-10 2xl:space-x-10">
                                <li><a href="/login" className="text-xs md:text-base 2xl:text-base font-bold shadow tracking-widest">LOGIN</a></li>
                                <li><a href="/register/mentee" className="text-xs md:text-base 2xl:text-base font-bold shadow tracking-widest" style={{marginLeft: "15px"}}>SIGN UP</a></li>
                                <li><a href="/katalog" className="text-xs md:text-base 2xl:text-base font-bold shadow tracking-widest" style={{marginLeft: "15px"}}>TUTOR</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center md:border-4" style={{width: "32%",}}>
                        <button className="border-4 text-xs md:text-base 2xl:text-base font-bold tracking-widest" style={{borderBottomColor: "gold", borderRightColor: "gold", borderTopColor: "black", borderLeftColor: "black", padding:"0px 6px"}}>
                            <a href="/register/tutor">JADI TUTOR</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}