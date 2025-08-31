// function HelloWorld(){
//   return(
//     <>
//     <HeaderHelloWorld/>
//     <ParagraphHelloWorld/>  
//     </>
//   )
// }

// export function HeaderHelloWorld(){
//   const text = "Hello World"
//   return(
//     <h1>{text.toUpperCase()}</h1>
//   )
// }

// export function ParagraphHelloWorld(){
//   const text = "Selamat Belajar ReactJS kawan, apakah benar hot reload?"
//   return(
//     <p>{text.toLowerCase()}</p>
//   )
// }

export function HeaderHelloWorld(){
  const text = "Hello World"
  return(
    <h1 style={{
      color:"red",
      fontWeight: 700,
    }}>{text.toUpperCase()}</h1>
  )
}

export function ParagraphHelloWorld(){
  const text = "Selamat Belajar ReactJS kawan, apakah benar hot reload?"
  const style = {
    color: "blue",
    fontWeight: 500
  }
  return(
    <p style={style}>{ text.toLowerCase()}</p>
  )
}

// export default HelloWorld