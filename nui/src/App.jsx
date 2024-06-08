import { useState } from "react"
import { useNuiEvent } from "./hooks/useNuiEvents"
import { debugData } from "./utils/debugData"
import { fetchNui } from "./utils/fetchNui"

// debugData([
//   {
//     action: "test",
//     data: {
//       message : "Chozo Pratama"
//     }
//   }
// ])

const App = () => {
  const [name, setName] = useState("")
  useNuiEvent("test", (data) => {
    setName(data.message)
  })

  const clickHandler = async() => {
    const testaja = await fetchNui("testnuicallback",{message: "This From Nui"})
    console.log(testaja.message)
  }
  return (
    <>
      <div className="font-semibold flex h-screen justify-center items-center">
        Test Aja 
        {name}
        <div>
          <button onClick={() => {
            clickHandler()
          }}>Test Nui Fetch</button>
        </div>
      </div>
    </>
  )
}

export default App