import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="App">
      <Header />

      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{ display: "flex", width: "60%", justifyContent: "center" }}>
          <div style={{ width: "70%" }}>
            <Post title="title one" body="body one " />
            <Post title="title two" body="body two "/>
            <Post title="title three" body="body three " />
            <Post />
        
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
