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

        <div className="container 2xl:mx-20 md:mx-20 md-w-auto flex items-center border-b-4 border-gray-80">
          <div className="md:w-6/12 2xl:w-8/12 2xl:h-auto flex">
            <img
              src="/pasaredu-logo.png"
              alt="Logo Pasaredu"
            ></img>

          </div>
          <div className="md:w-3/12 2xl:w-3/12 md:mx-10">
            <ul className="md:flex 2xl:flex space-x-20">
              <li><a href="/login" className="font-bold tracking-widest uppercase shadow">Login</a></li>
              <li><a href="#" className="font-bold tracking-widest uppercase shadow">Sign Up</a></li>
            </ul>
          </div>
          
          <div className="md:mx-20 flex items-center md:w-3/12 2xl:w-1/12 2xl:-mx-10" style={{marginLeft: "10px"}}>
            <button className="border-4 border-yellow-400 px-2 font-bold uppercase">
              Jadi Tutor
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-pasaredu"> 
          <div className="flex flex-col transform scale-90">
            <h1 className="text-white font-montserrat md:text-4xl 2xl:text-6xl text-center md:my-20 my-40 font-extrabold tracking-widest">Selamat Datang di Pasaredu!</h1>
            <p className="text-white md:text-2xl 2xl:text-4xl -my-20 text-center font-semibold tracking-widest">Pasar daring yang memfasilitasi berbagai layanan</p>
            <p className="text-white md:text-2xl 2xl:text-4xl my-20 text-center font-semibold tracking-widest">edukasi dengan menghubungkan tutor dan murid</p>
            <p className="text-white md:text-2xl 2xl:text-4xl -my-20 text-center font-semibold tracking-widest">di seluruh Indonesia</p><br></br><br></br><br></br><br></br><br></br>

            <div className="items-center 2xl:mx-60 md:mx-40" style={{background: "white", border: "1px solid", margin: "center", marginTop: "20px", borderRadius: "25px", maxWidth: "1496px", padding: "5px"}}>
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

      <div className="items-center">
        <div className="text-center my-20 tracking-widest font-normal text-black uppercase text-3xl">
            Pilihan Kategori
        </div>
        <div>
          <ul className="md:mx-5 md:w-full md:space-x-10 2xl:-mx-5 flex 2xl:space-x-10" style={{justifyContent: "center"}}>
            <li>
              <button className="md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/math.png"/>
                Matematika
              </button>
            </li>
            <li>
              <button className="md:my-3 md:px-10 md:py-10 2xl:my-3 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/fisika.png"/>
                Fisika
              </button>
            </li>
            <li>
              <button className="md:my-1 md:px-10 md:py-10 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/computer.png"/>
                Komputer
              </button>
            </li>
            <li>
              <button className="md:px-10 md:py-10 md:my-5 2xl:my-4 2xl:px-20 2xl:py-10 border-b-8 shadow border-yellow-400 font-semibold rounded-2xl">
                <img src="/lang.png"/>
                Bahasa Asing
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="lg:my-40 md:my-20 md:h-[420px] 2xl:h-[612px] md:w-shrink-0">
        <div className="bg-benefit" style={{width: "100%", height:"100%"}}>
          <div className="md:flex 2xl:flex">
            <div className="md:flex 2xl:flex md:mx-[830px] md:my-[370px] 2xl:mx-[1280px] 2xl:my-[550px]">
              <button className="md:w-[250px] md:px-2 md:py-1 2xl:py-2 2xl:px-4 bg-yellow-400 border-4 border-yellow-400">
                  <a href="#" className="font-bold uppercase ">Gabung jadi Tutor</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:my-40 2xl:w-full 2xl:h-[100px] md:w-[1180px] md:h-[200px]">
        <div className="items-center bg-yellow-400 md:h-[365px] 2xl:h-[375px] flex">
          <div className="items-center bg-yellow-400">
            <div className="2xl:mx-40 2xl:my-20 md:mx-40 md:my-20 flex ">
              <img
                src="/pasaredu-logo.png"
                alt="Logo Pasaredu"
              ></img>
            </div>
          </div>
          <div>
            <ul className="flex 2xl:space-x-60 md:space-x-20 md:space-y-[80px] 2xl:space-y-10">
              <li>
                <h1 className="font-bold 2xl:my-20 md:my-[120px]">Kategori jenjang pendidikan</h1>
                <ul className="-my-5 flex space-x-10">
                  <li className="md:-my-20 2xl:-my-10">
                    <a href="#" className="font-normal text-md">SD</a>
                  </li>
                  <li className="md:-my-20 2xl:-my-10">
                    <a href="#" className="font-normal text-md">SMA</a>
                  </li>
                </ul>
                <ul className="2xl:my-8 space-x-7 flex">
                  <li className="md:-my-7 2xl:-my-5">
                    <a href="#" className="font-normal text-md">SMP</a>
                  </li>
                  <li className="md:-my-7 2xl:-my-5">
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
      </div>
    </>
  )
}
