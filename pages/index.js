import {TextField} from '@material-ui/core'
import Navbar from '../src/layout/NavBar.js'
import Footer from '../src/layout/Footer.js'

export default function Home() {
  return (
    <>
      <div>
      <Navbar/>
        <main>
          <div>
            <div className="bg-pasaredu"> 
              <div className="h-[125px] 2xl:h-full md:h-full lg:w-full lg:h-full 2xl:w-full md:w-full flex flex-col" style={{transform: "none"}}>
                <h1 className="my-1 text-sm font-thin text-white font-montserrat md:text-4xl lg:text-6xl lg:my-20 2xl:text-6xl text-center md:my-20 2xl:my-20 font-extrabold tracking-widest">Selamat Datang di Pasaredu!</h1>
                <p className="text-xs text-white md:text-2xl lg:text-2xl lg:-my-15 2xl:text-2xl 2xl:-my-15 text-center font-semibold tracking-widest">Pasar daring yang memfasilitasi berbagai layanan</p>
                <p className="text-xs text-white md:text-2xl lg:text-2xl lg:my-0 2xl:text-2xl 2xl:my-0 text-center font-semibold tracking-widest">edukasi dengan menghubungkan tutor dan murid</p>
                <p className="text-xs text-white md:text-2xl lg:text-2xl lg:-my-0 2xl:text-2xl 2xl:-my-0 text-center font-semibold tracking-widest">di seluruh Indonesia</p>

                <div className="my-2 md:my-8 lg:my-10 2xl:my-10"></div>
                <div className="items-center p-0 mt-0 lg:mt-[20px] 2xl:mt-[20px] md:mt-[20px] md:p-[5px] lg:p-[5px] 2xl:p-[5px] mx-0 lg:mx-60 2xl:mx-60 md:mx-40" style={{background: "white", border: "1px solid", margin: "center", borderRadius: "25px", maxWidth: "1496px"}}>
                    <div style={{margin :"center", alignItems : "center", paddingLeft : "10px"}}>
                        <form><input placeholder="Masukkan Kategori" type="text" style={{width: "98%", outline: "none"}}></input></form>
                    </div>
                </div>
                <div className="my-2 md:my-10 lg:my-10 2xl:my-10"></div>
              </div>
            </div>   
          </div>

          <div className="items-center">
            <div className="text-center text-sm my-5 md:my-20 lg:my-20 2xl:my-20 tracking-widest md:text-3xl text-black uppercase lg:text-3xl 2xl:text-3xl">
                Pilihan Kategori
            </div>
            <div>
              <ul className="space-x-4 md:mx-5 md:w-full md:space-x-10 lg:-mx-5 2xl:-mx-5 flex lg:space-x-10 2xl:space-x-10" style={{justifyContent: "center"}}>
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
          
          <div className="my-10 h-[135px] 2xl:my-40 lg:my-40 md:my-20 md:h-[420px] lg:h-[612px] 2xl:h-[612px]">
            <div className="bg-benefit" style={{width: "100%", height:"100%"}}>
              <div className="flex md:flex lg:flex 2xl:flex">
                <div className="p-0 mx-[120px] my-[160px] md:flex lg:flex 2xl:flex md:mx-[830px] md:my-[370px] lg:mx-[1280px] lg:my-[550px] 2xl:mx-[1280px] 2xl:my-[550px]">
                  <button className="p-0 w-[150px] md:w-[250px] md:px-2 md:py-1 lg:py-2 2xl:py-2 lg:px-4 2xl:px-4 bg-yellow-400 border-4 border-yellow-400" style={{marginLeft: "10px", marginRight: "-100px"}}>
                      <a href="/register/tutor" className="text-xs font-semibold lg:text-base 2xl:text-base md:text-base lg:font-bold 2xl:font-bold md:font-bold uppercase ">Gabung jadi Tutor</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>    
    </>
  )
}
