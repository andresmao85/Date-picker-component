import { useState } from "react"
import { DatePicker } from "./DatePicker"
import "./styles.css"
function App() {
  const [value, setValue] = useState()
  return <DatePicker value={value} onChange={setValue} />
}

export default App
