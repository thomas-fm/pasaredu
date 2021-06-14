import {TextField} from '@material-ui/core'
import Navbar from '../src/layout/NavBar.js'

export default function Home() {
  return (
    <>
      <div>
      <Navbar/>
        <main>
          <div>
            <div className="bg-pasaredu"> 
              <div className="h-[125px] 2xl:h-full md:h-full 2xl:w-full md:w-full flex flex-col" style={{transform: "none"}}>
                <h1 className="my-1 text-sm font-thin text-white font-montserrat md:text-4xl 2xl:text-6xl text-center md:my-20 2xl:my-20 font-extrabold tracking-widest">Selamat Datang di Pasaredu!</h1>
                <p className="text-xs text-white md:text-2xl 2xl:text-2xl 2xl:-my-15 text-center font-semibold tracking-widest">Pasar daring yang memfasilitasi berbagai layanan</p>
                <p className="text-xs text-white md:text-2xl 2xl:text-2xl 2xl:my-0 text-center font-semibold tracking-widest">edukasi dengan menghubungkan tutor dan murid</p>
                <p className="text-xs text-white md:text-2xl 2xl:text-2xl 2xl:-my-0 text-center font-semibold tracking-widest">di seluruh Indonesia</p>

                <div className="my-2 md:my-10 2xl:my-10"></div>
                <div className="items-center p-0 mt-0 2xl:mt-[20px] md:mt-[20px] md:p-[5px] 2xl:p-[5px] mx-0 2xl:mx-60 md:mx-40" style={{background: "white", border: "1px solid", margin: "center", borderRadius: "25px", maxWidth: "1496px"}}>
                    <div style={{margin :"center", alignItems : "center", paddingLeft : "10px"}}>
                        <form><input placeholder="Masukkan Kategori" type="text" style={{width: "98%", outline: "none"}}></input></form>
                    </div>
                </div>
                <div className="my-2 md:my-10 2xl:my-10"></div>
              </div>
            </div>   
          </div>

          <div className="items-center">
            <div className="text-center text-sm my-5 md:my-20 2xl:my-20 tracking-widest md:text-3xl text-black uppercase 2xl:text-3xl">
                Pilihan Kategori
            </div>
            <div>
              <ul className="space-x-4 md:mx-5 md:w-full md:space-x-10 2xl:-mx-5 flex 2xl:space-x-10" style={{justifyContent: "center"}}>
                <li>
                  <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                    <a href="/infotutor" className="text-xs 2xl:text-base md:text-base"><img src="/math.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Matematika</a>
                  </button>
                </li>
                <li>
                  <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                    <a href="#" className="text-xs 2xl:text-base md:text-base"><img src="/fisika.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Fisika</a>
                  </button>
                </li>
                <li>
                  <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                    <a href="#" className="text-xs 2xl:text-base md:text-base"><img src="/computer.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Komputer</a>
                  </button>
                </li>
                <li>
                  <button className="-mx-2 px-3 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                    <a href="#" className="text-xs 2xl:text-base md:text-base"><img src="/lang.png" className="mx-2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] 2xl:w-[100px] 2xl:h-[100px]"/>Bahasa</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="my-10 h-[135px] 2xl:my-40 md:my-20 md:h-[420px] 2xl:h-[612px]">
            <div className="bg-benefit" style={{width: "100%", height:"100%"}}>
              <div className="flex md:flex 2xl:flex">
                <div className="p-0 mx-[120px] my-[160px] md:flex 2xl:flex md:mx-[830px] md:my-[370px] 2xl:mx-[1280px] 2xl:my-[550px]">
                  <button className="p-0 w-[150px] md:w-[250px] md:px-2 md:py-1 2xl:py-2 2xl:px-4 bg-yellow-400 border-4 border-yellow-400">
                      <a href="/register/tutor" className="text-xs font-semibold 2xl:text-base md:text-base 2xl:font-bold md:font-bold uppercase ">Gabung jadi Tutor</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 h-[200px] 2xl:my-40 2xl:w-full 2xl:h-[200px] md:w-[1180px] md:h-[200px]">
                <div className="items-center h-[300px] bg-yellow-400 md:h-[365px] 2xl:h-[375px] flex">
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
        </main>
      </div>    
    </>
  )
}
