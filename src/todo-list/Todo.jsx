export default function Todo({ text, isCompleted, isDeleted }) {
  if (isDeleted) {
    return null
  } else {
    return <li>{isCompleted ? `${text} ✅` : text}</li> //contoh menggunakan ternary operator agar lebih ringkas
  }
}