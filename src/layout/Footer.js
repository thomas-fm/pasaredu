import React from 'react'

export default function Footer(){
    return (
        <>
            <footer>
                <div className="w-full h-full mt-10 md:mt-40 2xl:mt-40" style={{backgroundColor: "gold"}}>
                    <div className="flex items-center">
                        <div className="flex md:mx-40 2xl:mx-40">
                            <div>
                                <a href="/">
                                    <img src="/pasaredu-logo.png" style={{width: "80%" , height: "100%"}}></img>
                                </a>
                            </div>
                        </div>
                        <div className="md:my-20 2xl:my-20">
                            <div className="md:-mx-20 2xl:-mx-20">
                                <h2 className="text-xs font-semibold md:text-base 2xl:text-base 2xl:font-bold md:font-bold">Kategori Pendidikan</h2>
                                <div className="md:my-5 2xl:mt-10">
                                    <ul className="flex justify-left">
                                        <li><a href="#" className="text-xs md:text-base 2xl:text-base">SD</a></li>
                                        <li><a href="#" className="text-xs md:text-base 2xl:text-base mx-4 md:mx-8">SMA</a></li>
                                    </ul>
                                    <ul className="flex justify-left">
                                        <li><a href="#" className="text-xs md:text-base 2xl:text-base">SMP</a></li>
                                        <li><a href="#" className="text-xs md:text-base 2xl:text-base mx-2 md:mx-5">UMUM</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:my-20 2xl:my-20">
                            <div className="md:mx-60 2xl:-mx-20 md:-my-12">
                                <h2 className="text-xs font-semibold md:text-base 2xl:text-base 2xl:font-bold md:font-bold">Contact</h2>
                                <div className="md:my-5 2xl:mt-10 my-2">
                                    <p className="text-xs md:text-base 2xl:text-base">+62 81234579309</p>
                                    <p className="text-xs md:text-base 2xl:text-base">pasaredu@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:my-20 2xl:my-20">
                            <div className="md:-mx-10 2xl:-mx-20 md:my-6 mx-2">
                                <h2 className="text-xs font-semibold md:text-base 2xl:text-base 2xl:font-bold md:font-bold">Find Us</h2>
                                <div className="md:my-5 2xl:mt-10 my-2">
                                    <ul className="flex">
                                        <li><a href="#">
                                            <img src="/twitter.png"
                                            style={{width:"100%", height:"80%"}}>
                                                </img></a></li>
                                        <li><a href="#"><img src="/instagram.png" className="md:mx-5 mx-3" style={{width:"40%", height:"80%"}}></img></a></li>
                                        <li><a href="#"><img src="/facebook.png" style={{width:"90%", height:"80%"}}></img></a></li>
                                    </ul>
                                    <img src="/indo.png" className="md:my-5" style={{width:"70%", height:"70%"}}></img>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}