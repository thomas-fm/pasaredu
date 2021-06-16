import React from 'react'

export default function Footer(){
    return (
        <>
            <footer>
                <div className="my-20 h-[200px] 2xl:my-40 2xl:w-full 2xl:h-[200px] md:w-full md:h-[400px]">
                    <div className="items-center h-[300px] bg-yellow-400 md:h-[300px] 2xl:h-[375px] flex">
                        <div className="items-center bg-yellow-400">
                            <div className="w-6/12 2xl:mx-40 2xl:my-20 md:mx-40 md:my-20 flex">
                                <img src="/pasaredu-logo.png" alt="Logo Pasaredu"></img>
                            </div>
                        </div>
                        <div>
                            <ul className="flex -mx-5 space-x-2 space-y-3 2xl:space-x-60 md:space-x-20 md:space-y-[80px] 2xl:space-y-10">
                                <li>
                                    <h1 className="my-14 text-xs 2xl:text-base md:text-base font-bold 2xl:my-20 md:my-[120px]">Kategori</h1>
                                    <ul className="space-x-4 2xl:my-8 2xl:space-x-7 md:space-x-7 flex">
                                        <li className="-my-12 md:-my-20 2xl:-my-14">
                                            <a href="#" className="text-xs md:text-base 2xl:text-base text-md">SD</a>
                                        </li>
                                        <li className="-my-12 md:-my-20 2xl:-my-14">
                                            <a href="#" className="text-xs md:text-base 2xl:text-base text-md">SMA</a>
                                        </li>
                                    </ul>
                                    <ul className="mx-2 space-x-2 2xl:my-8 2xl:space-x-7 md:space-x-7 flex">
                                        <li className="-mx-2 -my-5 md:-my-7 2xl:-my-12">
                                            <a href="#" className="text-xs md:text-base 2xl:text-base text-md">SMP</a>
                                        </li>
                                        <li className="-my-5 md:-my-7 2xl:-my-12">
                                            <a href="#" className="mx-2 2xl:-mx-1 text-xs md:text-base 2xl:text-base text-md">UMUM</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h1 className="my-11 text-xs md:text-base 2xl:text-base font-bold 2xl:my-12 md:my-10">Contact</h1>
                                    <ul className="-my-7">
                                        <li>
                                            <p className="text-xs md:text-base 2xl:text-base">+62 81234579309</p>
                                            <p className="my-2 2xl:my-3 md:my-3 text-xs md:text-base 2xl:text-base">pasaredu@gmail.com</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h1 className="mx-2 text-xs md:text-base 2xl:text-base font-bold my-12">Follow us</h1>
                                    <ul className="mx-2 flex space-x-1 -my-7 2xl:space-x-5 md:space-x-5 2xl:-my-5 md:-my-5">
                                        <li>
                                            <a href="#" >
                                            <img src="/twitter.png" className="w-[12px] h-[12px] md:w-[24px] md:h-[25px] 2xl:w-[24px] 2xl:h-[25px]"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" >
                                            <img src="/facebook.png" className="w-[12px] h-[12px] md:w-[24px] md:h-[25px] 2xl:w-[24px] 2xl:h-[25px]"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" >
                                                <img src="/instagram.png" className="w-[12px] h-[12px] md:w-[24px] md:h-[25px] 2xl:w-[24px] 2xl:h-[25px]"/>
                                            </a>
                                        </li>
                                    </ul>
                                    <img src="/indo.png" className="mx-2 my-11 2xl:my-18 w-[45px] h-[9px] md:w-[90px] md:h-[18px] 2xl:w-[90px] 2xl:h-[18px]"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </footer>
        </>
    )
}