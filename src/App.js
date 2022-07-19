import './App.css';
import { Navbar } from "./components/navbar";
import { Main } from "./components/main";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="bg-zinc-800">
      <Navbar />
      <div className="flex justify-start w-screen">
        <div className="w-2/12">
        <Sidebar />
        </div>
        <div className="w-10/12 p-3">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
