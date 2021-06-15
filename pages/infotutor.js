import Navbar from '../src/layout/NavBar.js'
import Footer from '../src/layout/Footer.js'

export default function InfoTutor(){
    return (
        <>
            <Navbar/>
            <div className="flex 2xl:w-full 2xl:h-full">
                <div className="flex items-center">
                    <ul className="flex 2xl:space-y-8 ">
                        <li>
                            <div className="2xl:mx-40 2xl:my-10">
                                <img src="/tutor1.png"></img>
                            </div>
                            <div style={{marginLeft: "140px"}}>
                                <button className="2xl:my-40 border-2 shadow" style={{borderRadius: "50px", padding:"5px 5px", backgroundColor:"gold", borderColor:"black"}}><a href="#" className="font-bold">Kontak Saya</a></button>
                                <button className="2xl:mx-5 border-2 shadow" style={{borderRadius: "50px", padding:"5px 5px", backgroundColor:"gold", borderColor:"black"}}><a href="#" className="font-bold">Dapatkan Pesan</a></button>
                            </div>
                            <div className="border-2" style={{borderTopColor: "gray", borderRightColor: "transparent", borderLeftColor: "transparent", borderBottomColor: "transparent", width:"70%", margin: "-130px 90px"}}>
                                <div className="2xl:my-5 2xl:mx-10 font-bold">Daerah asal</div>
                                <div className="2xl:-my-5 2xl:mx-10 font-bold">Bergabung sejak</div>
                                <div className="2xl:my-5 2xl:mx-10 font-bold">Keahlian</div>
                            </div>
                        </li>

                        <li>
                            <div className="border-2 px-4" style={{borderLeftColor: "black", borderTopColor: "transparent",borderBottomColor: "transparent",borderRightColor: "transparent"}}>
                                <h2 className="font-bold tracking-wider 2xl:text-xl">Materi</h2>
                                <div style={{marginLeft: "140px", marginTop: "20px"}}>
                                    <ul className="space-x-4 md:mx-5 md:w-full md:space-x-10 2xl:-mx-5 flex 2xl:space-x-10" style={{justifyContent: "center"}}>
                                        <li>
                                        <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold ">
                                            <a href="/infotutor" className="text-xs 2xl:text-base md:text-base"><img src="/math.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Matematika</a>
                                        </button>
                                        </li>
                                        <li>
                                            <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold">
                                                <a href="#" className="text-xs 2xl:text-base md:text-base"><img src="/fisika.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Fisika</a>
                                            </button>
                                        </li>
                                        <li>
                                        <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold">
                                            <a href="#" className="text-xs 2xl:text-base md:text-base"><img src="/computer.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Komputer</a>
                                        </button>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className="2xl:my-10 font-bold 2xl:text-lg tracking-wider">Review as Tutor</h2>
                                <div>

                                </div>
                            </div>
                        </li>
                    </ul>    
                </div>
            </div>
            <Footer/>    
        </>
    )
}