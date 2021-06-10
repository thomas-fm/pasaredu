import Head from 'next/head'
import {TextField} from '@material-ui/core'

export default function Home() {
  return (
    <>
    <div>
        <Head>
          <title>Pasaredu</title>
          <link rel="icon" href="/pasaredu-logo.png" />
        </Head>
        
        <nav className="container mx-20 md:mx-20 md:w-full flex items-center border-b-4 border-gray-80">
          <div className="md:w-8/12 w-8/12 h-auto flex">
            <img
              src="/pasaredu-logo.png"
              alt="Logo Pasaredu"
            ></img>

          </div>
          <div className="md:w-3/12 w-3/12">
            <ul className="md:flex flex space-x-20">
              <li><a href="/login" className="font-bold tracking-widest uppercase shadow">Login</a></li>
              <li><a href="#" className="font-bold tracking-widest uppercase shadow">Sign Up</a></li>
            </ul>
          </div>
          
          <div className="md:flex flex items-center md:w-auto w-1/12">
            <button className="border-4 border-yellow-400 px-2 font-bold uppercase">
              Jadi Tutor
            </button>
          </div>
        </nav>
      </div>

      <div className="md:w-full">
        <div className="bg-pasaredu"> 
          <div className="flex flex-col transform scale-90">
            <h1 className="text-white font-montserrat text-6xl text-center my-40 font-extrabold tracking-widest">Selamat Datang di Pasaredu!</h1>
            <p className="text-white text-4xl -my-20 text-center font-semibold tracking-widest">Pasar daring yang memfasilitasi berbagai layanan</p>
            <p className="text-white text-4xl my-20 text-center font-semibold tracking-widest">edukasi dengan menghubungkan tutor dan murid</p>
            <p className="text-white text-4xl -my-20 text-center font-semibold tracking-widest">di seluruh Indonesia</p><br></br><br></br><br></br><br></br><br></br>

            <div className="items-center mx-60" style={{background: "white", border: "1px solid", margin: "center", marginTop: "20px", borderRadius: "25px", maxWidth: "1496px", padding: "5px"}}>
                <div style={{margin :"center", alignItems : "center", paddingLeft : "10px"}}>
                    <TextField
                        id="filled-required"
                        placeholder="Masukkan Kategori..."
                    />
                </div>
            </div>
          </div>
        </div>   
      </div>

      <div className="relative items-center">
        <div className="text-center my-20 tracking-widest font-normal text-black uppercase text-3xl">
            Pilihan Kategori
        </div>
        <div>
          <ul className="mx-60 flex space-x-10">
            <li>
              <button className="px-20 py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/math.png"/>
                Matematika
              </button>
            </li>
            <li>
              <button className="my-3 px-20 py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/fisika.png"/>
                Fisika
              </button>
            </li>
            <li>
              <button className="my-1 px-20 py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/computer.png"/>
                Komputer
              </button>
            </li>
            <li>
              <button className="my-4 px-20 py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/lang.png"/>
                Bahasa Asing
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-benefit">
        <div className="w-full h-[612px] my-40">
          <button style={{marginLeft: "1330px", marginTop: "550px"}} className="py-2 px-4 bg-yellow-400 border-4 border-yellow-400">
              <a href="#" className="font-bold uppercase ">Gabung jadi Tutor</a>
              </button>
        </div>
      </div>

      <div className="w-full bg-yellow-400 h-[250px] -my-20 flex">
        <div className="flex items-center bg-yellow-400">
          <div className="mx-40 my-20 h-auto flex">
            <img
              src="/pasaredu-logo.png"
              alt="Logo Pasaredu"
            ></img>
          </div>
        </div>
        <div>
          <ul className="flex space-x-60 space-y-10">
            <li>
              <h1 className="font-bold my-20">Kategori jenjang pendidikan</h1>
              <ul className="-my-5 flex space-x-10">
                <li className="-my-10">
                  <a href="#" className="font-normal text-md">SD</a>
                </li>
                <li className="-my-10">
                  <a href="#" className="font-normal text-md">SMA</a>
                </li>
              </ul>
              <ul className="my-8 space-x-7 flex">
                <li className="-my-5">
                  <a href="#" className="font-normal text-md">SMP</a>
                </li>
                <li className="-my-5">
                  <a href="#" className="font-normal text-md">UMUM</a>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-bold my-10">Contact</h1>
              <ul className="-my-5">
                <li>
                  <p>+62 81234579309</p>
                  <p className="my-2">pasaredu@gmail.com</p>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-bold my-10">Follow us</h1>
              <ul className="flex space-x-5 -my-5">
                <li>
                  <a href="#" >
                    <img src="/twitter.png"/>
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <img src="/facebook.png"/>
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <img src="/instagram.png"/>
                  </a>
                </li>
              </ul>
              <img src="/indo.png" className="my-10"/>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
