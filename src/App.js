import Navbar from "./Components/Navbar";
import {Route , Routes} from "react-router-dom";
import Circulars from "./Components/Circulars"
import InsertFaculty from "./Components/InsertFaculty";
import DisplayFaculty from "./Components/DisplayFaculty";
import Updatefaculty from "./Components/UpdateFaculty";
import DisplayCourse from "./Components/DisplayCourse";
import Reset from "./Components/Reset";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
                <Route exact path="/" element={<Circulars />} />
                <Route exact path="/insertfaculty" element={<InsertFaculty />} />
                <Route exact path="/displayfaculty" element={<DisplayFaculty />} />
                <Route exact path="/updatefaculty" element={<Updatefaculty />} />
                <Route exact path="/displaycourse" element={<DisplayCourse />} />
                <Route exact path="/resetpassword" element={<Reset />} />
                
      </Routes>
    </>
  );
}

export default App;
