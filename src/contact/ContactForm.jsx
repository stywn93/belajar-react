import { useState } from "react";
import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};
export default function ContactForm() {
  //ini adalah default jika menggunakan useState
  // const [contact, setContact] = useState(initialData)
  //ini adalah contoh jika menggunakan useImmer
  const [contact, setContact] = useImmer(initialData);

  function handleNameChange(e) {
    /**
     * ini adalah contoh jika kita membuat clone object secara manual, proses ini bisa dipercepat dengan penggunaan library seperti immer dan useImmer
    setContact({
      ...contact,
      name: e.target.value,
    })
    */
    //contoh jika menggunakan bantuan library useImmer, tidak perlu clon secara keseluruhan, hanya perlu yang ingin diubah saja
    setContact((draft) => {
      draft.name = e.target.value;
    })
    console.info(contact);
  }
  function handleMessageChange(e) {
    setContact((draft) => {
      draft.message = e.target.value
    })
  }
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>

      <p>Name is : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </>
  );
}
