import { useState } from "react";

export default function Counter(){
  let [counter, setCounter] = useState(0)
  let [counter3, setCounter3] = useState(0)

  return(
    <div>
      <button onClick={
        () => {
          //perhatikan code berikut, meskipun setCounter() dipanggil 3x, hasil dari counter yang tampil hanya tertampil +1, bukan +3, hal ini dikarenakan adanya snapshot. Jadi, reactJS mengeksekusi perubahan state ini bukan berdasarkan berapa banyak dia dipanggil, akan tetapi saat component tersebut di-render maka dia akan berubah statenya.
          setCounter(counter + 1)
          setCounter(counter + 1)
          setCounter(counter + 1)
          console.log(counter)
        }
      }>Increment</button>
      <em>Counter : {counter}</em>
      <br />
      <button onClick={() => {
        //jika memang ingin agar counter naik sebanyak 3x, maka bukan dipanggil 3x akan tetapi increment-nya ditambah 3 seperti contoh berikut
        setCounter3(counter3 + 3)
        console.info(counter3)
      }}>Increment + 3</button>
      <em>Counter : {counter3}</em>
      <br />
      <button onClick={()=>{
        //ada cara lain agar nilai state tetap bisa berubah untuk mengatasi kondisi snapshot yang terjadi seperti contoh di atas, caranya adalah dengan menggunakan closure function
        setCounter(c => c + 1) //setCounter me-refer ke counter
        setCounter(c => c + 1)
        setCounter(c => c + 1)


      }}>Increment Tiap Klik</button>
      <em>Counter : {counter}</em>
    </div>
  )
}