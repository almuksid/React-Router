import Nav from "../components/Nav";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <div id="sidebar"> 
        <Nav/>
       
        
      </div>
      <div id="detail">
        <Outlet/>
        <footer style={{ textAlign: "center", padding: "1rem" }}>
            This is our footer
        </footer>
      </div> 
      <div className="">
        
      </div>
    </>
  );
}
