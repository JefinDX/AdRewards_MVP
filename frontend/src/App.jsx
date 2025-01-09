/**
 * Discord inspired left side bar
 */
// import "./App.css";
// import Sidebar from "./Sidebar";

// function App() {
//   return (
//     <div className="flex justify-center items-center">
//       <Sidebar />
//       hello world
//     </div>
//   );
// }

/**
 * Youtube inspired top navigation
 */
import PageHeader from "./components/PageHeader";
function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
    </div>
  );
}

export default App;
