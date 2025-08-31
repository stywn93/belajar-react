function HelloWorld() {
  const props = {
    teks: "ini adalah judul",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </>
  );
}
export default HelloWorld

function HeaderHelloWorld({teks = "default teks jika kosong"}){
  return(
    <h1>{teks.toUpperCase()}</h1>
  )
}

function ParagraphHelloWorld(){
  const text = "Selamat Belajar ReactJS kawan"
  return(
    <p>{text.toLowerCase()}</p>
  )
}

// export function HeaderHelloWorld({text = "Ini default text-nya"}){
//   return(
//     <h1 style={{
//       color:"red",
//       fontWeight: 700,
//     }}>{text.toUpperCase()}</h1>
//   )
// }

// export function ParagraphHelloWorld(){
//   const text = "Selamat Belajar ReactJS kawan, apakah benar hot reload?"
//   const style = {
//     color: "blue",
//     fontWeight: 500
//   }
//   return(
//     <p style={style}>{ text.toLowerCase()}</p>
//   )
// }

// export default HelloWorld
