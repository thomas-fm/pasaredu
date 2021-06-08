import Head from 'next/head'
import {TextField} from '@material-ui/core'

export default function Home() {
  return (
    <>
      <nav className="lg:w-full w-full h-20 flex items-center border-b-4 border-gray-80">
        <div className="w-30 h-30 flex mx-40 lg:w-full">
          <img
            src="/pasaredu-logo.png"
            alt="Logo Pasaredu"
            className="w-auto h-auto px-2"
          ></img>
        </div>
        <div className="flex items-center w-full mx-40">
          <div className="relative mx-58"></div>  
          <div className="relative mx-20"></div> 
          <div className="relative mx-5"></div> 
          <div className="relative mx-10">
            <a href="/login" className="text-black-100 font-bold shadow"> LOGIN </a>
          </div>
          <div className="relative mx-5">
            <a href="#" className="text-black-100 font-bold shadow"> SIGN UP </a>
          </div>
        </div>

        <div className="flex items-center w-20 h-20 py-5 lg:w-4/12">
          <button className="border-4 border-yellow-400 px-2 py-1 font-bold">
            JADI TUTOR
          </button>
        </div>
      </nav>

      <body>
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/bg-home.png"
              alt="Background Home Pasaredu"
              className="w-full h-auto"
            ></img>
          </div>
          <div className="absolute inset-0 z-10">
            <div className="flex flex-col transform scale-75 space-y-4">
              <div className="text-white text-6xl text-center my-40 font-black">Selamat Datang di Pasaredu!
                <p className="text-white text-4xl text-center font-semibold"><br></br>Pasar daring yang memfasilitasi berbagai layanan</p>
                <p className="text-white text-4xl text-center font-semibold">edukasi dengan menghubungkan tutor dan murid</p>
                <p className="text-white text-4xl text-center font-semibold">di seluruh Indonesia</p>
              </div>

              <div className="items-center" style={{background: "white", border: "1px solid", margin: "10px", alignContent: "center"}}>
                  <div style={{margin :"10px 0", alignItems : "center", paddingLeft : "10px"}}>
                      <TextField
                          id="filled-required"
                          placeholder="Masukkan Kategori"
                      />
                  </div>
              </div>
            </div>
          </div>
        </div>
            
      </body>
    </>
  )
}
