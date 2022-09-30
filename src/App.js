import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

const items = [
  {
    index: 1,
    title: "Blockchain foundations",
    completed: true,
    saved: false,
    duration: "12:33",
  },
  {
    index: 2,
    title: "The technical side",
    completed: true,
    saved: true,
    duration: "32:02",
  },
  {
    index: 3,
    title: "Blockchain in use",
    completed: true,
    saved: true,
    duration: "16:59",
  },
  {
    index: 4,
    title: "Use cases",
    completed: true,
    saved: false,
    duration: "45:49",
  },
  {
    index: 5,
    title: "Blockchain smart contracts",
    completed: false,
    saved: false,
    duration: "27:30",
  },
  {
    index: 6,
    title: "Decentralised applications",
    completed: false,
    saved: false,
    duration: "28:29",
  },
  {
    index: 7,
    title: "Blockchain platforms",
    completed: false,
    saved: false,
    duration: "20:21",
  },
  {
    index: 8,
    title: "Next steps",
    completed: false,
    saved: false,
    duration: "07:20",
  },
];

function App() {
  return (
    <div className="App flex flex-col w-full">
      <Header />
      <div className="w-full flex">
        <Sidebar items={items} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
