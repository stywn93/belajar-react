import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

export default function Profile() {
  const profile = useContext(ProfileContext);
  // console.log(profile)
  return (
    <>
      <h2>Profile</h2>
      <p>Hello {profile}</p>
    </>
  );
}
