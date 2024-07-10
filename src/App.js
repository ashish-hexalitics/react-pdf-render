import "./App.css";
import PDFEditor from "./components/PDFEditor";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1 className="text-3xl font-bold underline">Pdf Render!</h1>
      <PDFEditor document={"doc.pdf"} />
    </div>
  );
}

export default App;
