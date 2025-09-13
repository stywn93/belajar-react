import { useContext } from "react"
import { ProfileContext } from "./ProfileContext.jsx"

export default function ProfileAddress(){
  const profile = useContext(ProfileContext)
  // console.log(profile)
  return(
    <>
    <h2>Profile Address</h2>
    <p>Address {profile}</p>
    </>
  )
}