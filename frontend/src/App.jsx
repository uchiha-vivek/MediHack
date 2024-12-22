import { Router,Route,Routes } from "react-router-dom"
import Chat from "./components/Chat"
import Join from "./components/Join"
function App(){
  return (
    <>
    <Routes>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/join" element={<Join/>}/>
    </Routes>
    </>
  )
}
export default App