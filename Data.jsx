import React from 'react'
import {Link}from"react-router-dom"
import {AiOutlinePlus}from"react-icons/ai"
import {RiContactsLine}from"react-icons/ri"
import {AiOutlineFolderOpen}from"react-icons/ai"
import {GrDocumentUpload}from"react-icons/gr"
import{BsFileEarmarkMedical}from"react-icons/bs"
import{AiOutlineSetting}from"react-icons/ai"
import {FiLogOut}from"react-icons/fi"
import {GrDocumentPdf}from"react-icons/gr"

import {FiRefreshCw}from"react-icons/fi"
import {BsToggleOff}from"react-icons/bs"
import "./style.css"
 function Data() {
  return (
    <div>
        <div className='data1'>
            <div >
            <img className='data2'src ="https://st2.depositphotos.com/3776273/7567/i/950/depositphotos_75671057-stock-photo-cardiac-frequency-in-green-colour.jpg"></img>
            </div>
     <Link to="/new"><AiOutlinePlus/><br></br>New</Link>  
     <Link to="/patent"><RiContactsLine/><br></br>Patient</Link>
     <Link to="/FOLDER"><AiOutlineFolderOpen/><br></br>Folder</Link>
     <Link to="/upload"><GrDocumentUpload/><br></br>Upload</Link>
     <Link to="/ricent"><BsFileEarmarkMedical/><br></br>Ricent</Link>
     <Link to="/seting"><AiOutlineSetting/><br></br>Setting</Link>
     <Link to="/logout"><FiLogOut/><br></br>Logout</Link>
    </div>
    <div className="data4">

    </div>
    <div className='data3'>
        <h1>View Report</h1>
    </div>
    <div className='data5'>
        <p>Patient Name : David Allen&nbsp;&nbsp;&nbsp;&nbsp;      Data Uploaded:&nbsp;&nbsp; 04/28/2018 16:05:51</p>
    </div>
    <div className="data6">
      <button><GrDocumentPdf/>&nbsp;Download pdf</button>
    </div>
    <div className='data7'>
      <h1>LTMK3729373</h1>
    </div>
    <div className='f'>
      <h4>Refresh&nbsp;&nbsp; <br></br>&nbsp;&nbsp;   <FiRefreshCw/></h4>
      <h4>Connected <br></br>&nbsp;&nbsp; <BsToggleOff/> </h4>
    </div>
    <div className='g'>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8SDw8PERISDxEUEhIREBASERESEA8RGBUZHBgaGRgcIS4lHB4rIxgWJjsmKy8xNTU1GiQ/QDs0Py42NTEBDAwMEA8QHhISHzErJSw0NDQ0NDY0MTQ0NDU0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYCBQcEA//EAD8QAAIBAgEIBgcGBgIDAAAAAAABAgMRBAUGEiExQVGBEyJCYXGRMlJToaKx0RRicpPB0gczVIKS8CPhc6Pi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EADERAAIBAQUECQQDAQAAAAAAAAABAgMEERIhMRRBUbEFEyJhcYGh0fBCkcHhFTLxM//aAAwDAQACEQMRAD8A7MAAAAAAAAAAAAAAAAAAAQACCAACAAAYggAkgEAAAAAAgAAAAAAA9IAAAAAAAAAAAAAABFwQACAQAADEAyMQQACAAAAAACAAAAACAAAAAD1AAAAAAAAAAEAEkEMhgEkA+datCEJTnJRhFOUpN2UUgD6HmxGMo0/5lSFPulKMW+TKRlnOurVbhQbo09mmv5k1xv2V3LX37iu6223rb1tvW2+9mOpa0soq8yytK+nM6jHLOEepV6X+VvmeyE4ySlFqUXslFpp80cmR6MLialKWnTnKEvuuyfitj5latzvzj88xG0PejqRBochZwRrNUqtoVezJao1PpLu3+43xtp1I1I4ommMlJXoAAmeggAAAEAEkAAAAkAgEgA9IAAAAAABFwAyAQACAAAUHPTKznV+ywfUg1p27VTh4R+d+BbMuZRWGw86urSto00+1N7PLb4JnLNJtuTbbbbbe1t7WzJaqlywLeZLVUuWBbyUWnJeaVScVOvJ0YvWoJJ1Ld99UfDWz55l5MVSo8RNXhTdop7JVP/la/FovhXZ7OpLFIjQoqSxSK3PM/D26tSrF8ZaEl5WXzK7lXI1bDNOVpwbtGpH0b8Guyzox8cTQhUhKnNXhJOLX6rvLalkhJdlXM0SoxayyOYxdmmtT2pramX/N/KPT0U5P/kj1Z9/CXNe9Mo2MwsqVWdKW2ErX9ZbnzVme7IOP6GvGTdoS6s+Gi9j5Oz8zBZ6rpVO1po/ndyvKaUsMsy/AA7JrABAAAAABIAAAAAAAPSAAAQLkAAgEAAAxAMjEGsziyn9mws6i9N9SkuM2tT5a3yPG0lezyUlFXsp2eeU+lxPQxd4Ubx1bJVH6T5alyfE0NGnKUowgtKUpKMVxk3ZHyT3vW97ettltzGybpTliprqwvGn3za6z5J2/u7jmXOrU8TlRxVaniW7JeBjh6FOjHXorrP1pvXJ+dz1AHTSSyR1krskAQD0FbzuwGlCOJitcbQn3wb6r5N+8qkTptWnGcZQkrxknGS4pqzOdY7Cyo1Z0pdl6n60Xri/KxyrdSuljWj5marG53lwzbx3S0FCTvOnaMuLj2X5K3I25QcjY3oa0Jv0H1J/ge/lqfIvprslXrKdz1WXz5uLacr0AAaiwEgAAAAAkAAAAA9BBBABJBAAABiACAACTmueOU+nxLpxd6dG9ONtkp9t+aS/t7y5ZzZU+zYac4u1SXUpcVJ7Zcld+XE5cjJaZ/SjDbKmkF4s+uGoznONOKvKUlCK727HWcn4OFCjTow2Rja/rS2yfN3ZUsxMm3lPFTWqN4Ur75W60uS1c2XYlZqdyxPfyJ2SndHE9/IEAGk1gAAAr+deB06ca8V1oap98G9vJ/Nm/IlFSTjJXTTTT2NPaV1aaqQcWeSjiVxzRF0zaxvSUejk+vTtHxj2Xy2ckVXKGEdGtOm9id4P1oP0X/u9M+uSsY6NaE+z6Mlxg9v15HGoVHQq9rwfzuM8HhZfgQmmk1rT1prY0Sd00gAkAAAAAEgEAkAH0IAABiCACSAQACQaPOzKn2bCy0XapU/46fFX9KXJe9o8bSV7IzkoRcnuKZnblT7RipKLvTpXpw4Sfblzat4JGrweGnVqQpQV5zkox4Jve+5beR5kXfMPJnp4ua406V/jl+n+Rz0nUnmcimpVque/NltwOFhRpQow9GEVFcXxb727vmfYGnzjy3DCUk0lOrO6pwezvlL7q9+w6DairzrylGEb3kke3KGUqGHjp1aihf0Y7Zz8IrWytYnPXW1So6t0qktf+K+pTq+JqVZyqVJOc5PXJ/JcF3Ex3f7cwVbTJ/wBckYJWuUn2cl6lphnfit8KPhoy+pscHnXBtKrTcPvQekvJ6/mVKOFqpaTpzS4uE0vOxlTM7tNaL1+5ZGrPidMw2JhUgp05KUeK3dzW5n0OfYDFzpTU6bs967M1waLzgMXCtTU46t0o74S3o22a1Rrdl5Pn4GqMsRrM6MD0lJVorr0/S74Pb5bfMqSOkNJppq6as09jRQsp4N0a06fZ9KD4xez6cjJ0hRufWLfk/EhUjneWTNnG6dJ0pPrQ9Hvg9nls8jdFDydinSqwqLYnaS9aD2r/AHgi+RkmlJO6aTT4p7DTYa3WU8L1XLcTg70SADaTABIAJBkAYgyAAMQQAAQAAAAAcszpyp9pxUpRd6cOpS4NJ9aXN+5IumeOVfs+FcYu1SteEOMY9uXJO3jJHMYmW0T+k5tuq5qmvF/hfk9WAws61anRh6U5KKe6K3t9yV3yOu4XDwpU4UoK0IxUY+C49+8qmYWTNGEsXNa53hSvuin1pc2rcnxLgTs8Lo4uJdY6WGGJ6vl+wcjy5lJ4nFVK17wvoU1ujCL1eet+LZ07LdZwwmJktTVKei+D0Wl8zj9MhaXoinpCb7MPP2NjknATxFaFGntetyeyEFtk/wDd6Om5KyRQw0UqcU5261SSTnLnuXcjQfw+wyVKvW7UpKmnwjGOl85e4txKhTSWJ6svslJRgp72Tc1eVMi0q8W0lCpunFWu/vJbV7zaAunCM1dLNGpq/JnOp0pQlKEloyi3GS7zb5vYp06yg/Rn1H+Lsvz1cz6Z1UUq1Oa2yi1LvcXt8mvI1VKbi4yW1NNeKdz5+pfZ62T0fp/hSlhdxfzT5yYHpKPSRXXp3l4x7S5beTNzcWO/UpqpFwe8uavVxzmJa82cZpU3Rk+tDXHvi/o/mjQ5VwXQ1pQXoPrQ/A93LWuRhgcS6VSFRdl6160d68jg0ajs9btbsn89UVRyZfQRTnGUYyi7xklKL4p7DI+hLiCQZAAAkAgEgA+ZAAAAAAIuCvZ65SdHCOEXadZuEXvUO2/Ky/uPJNRV7IVJqEXJ7ikZy5U+1YqU4u9OHVpcNBX63N3flwPLkzBSr16dCO2crN+rFa5S5JNniidBzByZoU5Yqa61S8Kd9qpp63za8oriYYxdSeZxaMXXq57838+yRasPRhCEKcFowjFQiuEUrIzAN53Tx5ZoueFxEI65SpTUVxlou3vsceps7acnziyY8NiqlO1oSelSe505PZyd1y7zNaI5JnOt8G8M/ItH8PsVHQr0G+spKrFcYtJS8rLzLicfydjJ0Ksa1N2nF8pLemt6Z0nJWcOHxCSuqVTtU5Ozv91vVJe/uFCqrsL1LbJWTgoPVG3AbSV20lxvqNNlPOGjSTjTkqtTYtF3jF8ZPf4L3F05xgr5O41tpamszprqVeEFr0IdbulLXbyUfM1lGDlKMVtk1FeLdjzucpScpNylJtyb2ts3mbmEc6vSNdSGvxl2V+vJHAmnaa/i/T/CqLvd5bLEgH0RcarOHBdJRc0rzp3kuLj2l7r8ioxOiFKyzguhrSilaEutDwe1cn+hyekqOlVeD/D/AB9iua3m4zYxl4SoSeuPWj3xb1rk37zelCweIlSnCpHbF3txW9c1cvtOalGMo64ySknxTV0XdH18dPA9Y8t3sSjoZAEnQJAkEgAEgA84BABJAAAOdfxDruWLo090KSa/FNu/ujHyOinNv4gQaxsZbpUYNcnJP5FVf+hit/8Aw80V/CUXUq06a1OdSEE+F5Jfqdmo0owjGnBaMIxUIpbFFKyOOZNrKniKFR7IVKc5eEZJv5HZWV2feVdGpXSe+9AAk0nSBrMvZHhi6XRy6k43lTna7jLv4xe9fQ2YPGk1czyUVJXPQ5DjMDVoVHTqwcJLZvjJcYvejGJ1rF4OlWh0dWEZx4SWx8U9qfeiuYrMyi23Sqyp/dnHpEvB3T+ZhqWWX05nPlZJRfZzXqVCGyx96ZYoZm1Pbwt/45X8rmxweatCDTnOdV8PQh5LX7zNslWT05FkKM+BX8l4CpXnowVor05P0Yr9X3F6weFhShGnBaltb2ye9vvM6VKMIqEIqEVsjFJJH0N1nssaOer4+xrjDCQCQaiQNTnNh1LD6e+Ek0+6TUWvevI3Bq84pqOFmt8nCK8dJP5JlFpSdGd/Bnj0Kei55AqaWFp33aS5KTt7rFMRcs3I2wsHxlN/Fb9Dk9Gt9c/B80RjqbQmwRJ3SYAAAAAB5gAAAQAAVH+IOT3OhTxMVd0pOMvwTtr5SS/yZbjGtShUjOE0pQnFxnF7JRas0RnHFG4rrU1Ug4PecTR0fM/L0atOGHqyUa0Vowbdumhutxklqa32vxtTs4MiTwdbRd5UpNulU3SXqv7y/wCzWLd5+DMMZSpyOLRqTs83eu5o7YDleGzkx8IqMa8mlqWnGE2uck2ehZ15Q9svyqP7TRtMO86SttN7mdMJOaLOnKHtV+VR/aZLOjH+1X5VH9p5tUO8ltdPvOkknOFnPj/ar8ql+0lZzY/2q/Lo/tPNsp95LaYd50Yk52s5cd7VflUv2mSzkx3tV+XS/aebbT4P55nu0Q7zoQKAs48b7X/10v2mSzixvtPgpftI7dT4P55kuuj3l/JKCs4cZ7T4KX7TNZwYz2nwUvoefyFLg/t+z1VUXmUlFOUmopK7bdkl3sp2XMpKvNRh/LjfRfrS3y+n/Z4MTj69X+ZOU16upR8lqPijDarb1scMVct/E8c79D604OUoxiryk0kuLewv+FoqnThTXZSjfi7bTRZu5KcbV6is7f8AHF7Vfe/0LIauj7O4Rc5avl+9ScUAAdIkAAAAAAeYgAAAEgEEgAHyxWFp1YSp1IRnCW2Mlq8e596KXlLMeSblhaia9nUupLwnv5peJeSSE6cZ6lVWjCr/AGXucrnmzlCLs8PJ98ZU5L3SCzex/wDT1POP1OqElOzR4so2KC3v09jlizex39PU84/UzWb+O/p6nw/U6gSebLHiz3Y4cX6HMVkDHf09T4fqSsgY32FTzj9TpoPNjhxfp7EtljxZzZZBxvsKnw/UyWQsb7Cp5x+p0kk82KHF+nsSVnjxOcLIeM9hP4fqZLIeM9hLzj9TooI7BT4v09j3qInPVkXF+xl8P1MlkXF+xl8P1Ogk2PP4+nxfp7HvVIo2HzfxUnrgoLjKUV7ldm/ybkCnTalN9LNa1dWin4b34m7BZTsNGm77r33+2hNRSAANZIAAAAAAAAA8oBIAAAAAJAAAAABIABIABkAACQSACRYkAAAAAAAAAAAAAAAAAAA8wAABIAAAAAJAABIMgAASAQSDKwBBJIAAAAAAAAAAAAAAAAAAAAAAPMSgAAEAACQAAiQADIAAAkAAklAAEgAAAAAAAAAAAAAAAAAAAAAAA//Z"></img>
    </div>
    <div className='t'>
      
    </div>
    <div className='data8'>
      <h1>Diane Cooper</h1>
      <p>diane.cooper@example.com</p>
    </div>
    <div className='data9'>
      <h3>15<br></br>past&nbsp;&nbsp;</h3>
      <h3>02<br></br>upcoming</h3>
    </div>
    <div className='b'>

    </div>
    <div className='b1'>
      <h1>LEGENDS</h1>
      <ul>
     <li>  . PVC - Premature Ventricular  Contractors</li>
     <li> PAC -  Premature Atrial Contractors</li>
     <li> Second Degree- Second Degree type -1/type/2 type</li>
     <li> NB - Noke on Beat</li></ul>
    </div>
    </div>
  )
}
export default Data;