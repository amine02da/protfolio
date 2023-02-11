import ReactDOM  from "react-dom";
import App from "./App"
import "./index.css"

ReactDOM.render(<App/>,document.getElementById("root"))

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})
const hiddnEl = document.querySelectorAll(".hidden")
hiddnEl.forEach((el)=> observer.observe(el))

