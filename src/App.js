import AgoraChat from "./components/AgoraChat";
import AgoraPublisher from "./components/AgoraPublisher";
import Main from "./components/Main";
import Marketplace from "./components/Marketplace";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#181818] pb-4 min-h-screen flex flex-col">
      {/*Navbar*/}
      <Navbar />
      {/*Content*/}
      <div className="flex flex-1 justify-start items-stretch">
        <Sidebar />
        <div className="flex flex-col w-full flex-gw">
          <AgoraChat />
          <AgoraPublisher />

          <Main />
        </div>
      </div>
      <div>
        <Marketplace />
      </div>
    </div>
  );
}

export default App;
