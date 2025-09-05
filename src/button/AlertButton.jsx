export default function AlertButton({text}){
  function handleClick(){
    alert("Hello bray")
  }
  return(
    <button onClick={handleClick}>{text}</button>
  )
}