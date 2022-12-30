import logo from './logo.svg';
import './App.css';
import Header from "./Skeleton/Header/Header";
import Sidebar from "./Skeleton/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="main_suite">
                <Header/>
                <Sidebar/>
                <div className="main_storage">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs/>} />
                        <Route path="/profile" element={<Profile/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
