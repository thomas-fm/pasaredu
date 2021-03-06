import Navbar from '../src/layout/NavBar.js'
import Footer from '../src/layout/Footer.js'

export default function Home() {
  return (
    <>
      <div>
      <Navbar/>
        <main >
          <div className="items-center">
            <div className="bg-pasaredu"> 
              <div className="items-center flex flex-col">
                <h1 className="my-1 text-sm font-thin text-white font-montserrat md:text-2xl lg:text-6xl lg:my-20 2xl:text-6xl text-center md:my-20 2xl:my-20 font-extrabold tracking-widest">Selamat Datang di Pasaredu!</h1>
                <p className="text-xs text-white md:text-2xl 2xl:text-2xl 2xl:-my-15 text-center font-semibold tracking-widest">Pasar daring yang memfasilitasi berbagai layanan</p>
                <p className="text-xs text-white md:text-2xl 2xl:text-2xl 2xl:my-0 text-center font-semibold tracking-widest">edukasi dengan menghubungkan tutor dan murid</p>
                <p className="text-xs text-white md:text-2xl 2xl:text-2xl 2xl:-my-0 text-center font-semibold tracking-widest">di seluruh Indonesia</p>

                <div className="my-2 md:my-8 2xl:my-10"></div>
                <div className="items-center p-0 mt-0 lg:mt-[20px] 2xl:mt-[20px] md:mt-[20px] md:p-[5px] lg:p-[5px] 2xl:p-[5px] mx-0 lg:mx-60 2xl:mx-60 md:mx-40" style={{background: "white", border: "1px solid", margin: "center", borderRadius: "25px", width: "80%"}}>
                    <div style={{margin :"center", alignItems : "center", paddingLeft : "10px"}}>
                        <form><input placeholder="Masukkan Kategori" type="text" style={{width: "98%", outline: "none"}}></input></form>
                    </div>
                </div>
                <div className="my-2 md:my-4 2xl:my-10"></div>
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
        
          <div className="mt-10 md:mt-40 2xl:mt-40">
            <div className="bg-benefit">
              <div className="mx-2 md:mx-10 w-full">
                <h1 className="font-semibold text-white text-xs 2xl:font-bold md:font-bold md:text-2xl 2xl:text-2xl"><br></br>Kenapa harus menggunakan pasaredu</h1>
                <ul>
                  <li><ul className="flex">
                    <li><div className="flex mt-5 md:mt-10 2xl:mt-20">
                      <img src="/harga-icon.png" style={{width: "6%", height: "6%"}}></img>
                      <p className="mx-2 md:mx-5 md:text-left 2xl:text-left 2xl:mx-5 text-xs font-thin md:text-base 2xl:text-base 2xl:font-semibold md:font-semibold text-white">Harga Terjangkau</p></div>
                    <div style={{width: "60%", marginTop: "20px"}}>
                      <p className="text-center text-xs font-thin md:text-left 2xl:text-left md:font-normal 2xl:font-normal md:text-base 2xl:text-base text-white">
                      Yuk, ikuti berbagai layanan les privat online dengan harga terjangkau yang pastinya gak bikin saldo ATM kamu kering.
                      </p>
                    </div></li>
                    <li>
                    <div className="-mx-5 md:-mx-40 flex mt-5 md:mt-10 2xl:mt-20">
                      <img src="/proses-icon.png" style={{width: "3%", height: "3%"}}></img>
                      <p className="mx-2 font-thin md:mx-5 2xl:mx-5 text-xs 2xl:text-base md:text-base 2xl:font-semibold md:font-semibold text-white">Cepat dan Mudah</p></div>
                    <div className="-mx-5 md:-mx-40" style={{width: "52%", marginTop: "20px"}}>
                      <p className="text-xs text-center font-thin md:text-left 2xl:text-left md:font-normal 2xl:font-normal md:text-base 2xl:text-base text-white">
                      Udah gak jaman mau ikut les aja urusannya ribet banget. Di sini kamu tinggal pilih tutor dan layanan les yang kamu mau, pilih jadwal, chek out, udah deh kamu bisa langsung les dengan tutor pilihan kamu.
                      </p></div>
                    </li>
                  </ul></li>
                  <li><ul className="flex">
                    <li><div className="flex mt-5 md:mt-5 2xl:mt-5">
                      <img src="/les-icon.png" style={{width: "4%", height: "4%"}}></img>
                      <p className="mx-2 md:mx-5 md:text-left 2xl:text-left 2xl:mx-5 text-xs font-thin md:text-base 2xl:text-base 2xl:font-semibold md:font-semibold text-white">Pilihan Lengkap</p></div>
                    <div style={{width: "44%", marginTop: "20px"}}>
                      <p className="text-xs text-center font-thin md:text-left 2xl:text-left md:font-normal 2xl:font-normal md:text-base 2xl:text-base text-white">
                      Kamu mau les apa nih? Les akademik, bahasa, seni, musik, olah raga, bahkan softskill pun ada di sini. Buruan cobain semuanya!
                      </p>
                    </div></li>
                    <li className="md:-mx-96">
                      <div className="flex -mx-16 mt-5 md:-mx-24 2xl:mx-12 md:mt-5 2xl:mt-5">
                        <img src="/transaksi-icon.png" style={{width:"3.5%", height: "3.5%"}}></img>
                        <p className="mx-2 md:mx-5 md:text-left 2xl:text-left 2xl:mx-5 text-xs font-thin md:text-base 2xl:text-base 2xl:font-semibold md:font-semibold text-white">Transaksi Aman</p>
                      </div>
                      <div className="-mx-14 md:-mx-24 2xl:mx-12" style={{width: "45%", marginTop: "18px"}}>
                          <p className="text-xs text-center font-thin md:text-left 2xl:text-left md:font-normal 2xl:font-normal md:text-base 2xl:text-base text-white">
                          Dengan melakukan transaksi di sini, uang kamu bakal aman banget deh. Uang kamu akan disalurkan ke tutor setelah kamu mengisi rating dan review tutor.
                          </p>
                      </div>
                    </li>
                  </ul></li>
                </ul>
                <div className="2xl:my-20 md:my-5"><br></br></div>
              </div>
            </div>
            <div className="2xl:mx-40 2xl:-my-24">
              <div className="md:mx-60 md:-my-12 2xl:mx-96  w-full">
                <div className="md:mx-96 2xl:mx-96 mx-10">
                  <div className="mt-5 mx-20 md:mx-96 2xl:mx-96 md:mt-5 2xl:mt-5 w-full">
                      <button className="border-2 font-bold" style={{backgroundColor: "gold", borderColor:"gold", padding: "2px 10px"}}><a href="/register/tutor">Gabung Jadi Tutor</a></button>
                  </div>
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
