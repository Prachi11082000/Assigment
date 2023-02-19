import Data from "./Components/Data";
import{Routes,Route}from"react-router-dom"
import New from"./Components/New"
import Patent from"./Components/Patent"
import Folder from"./Components/Folder"
import Upload from"./Components/Upload"
function App(){
  return (
    <div className="App">
     <Data/>
     <Routes>
    <Route path="/new" element={<New/>}/>
    <Route path="/patent" element={<Patent/>}/>
    <Route path="/FOLDER" element={<Folder/>}/>
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/new" element={<New/>}/>
     </Routes>
    </div>
  )
}
export default App;
