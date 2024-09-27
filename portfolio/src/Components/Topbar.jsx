import { useNavigate } from "react-router-dom";


export default function Topbar({}){
    const navigate = useNavigate();
    return <div>
        <p>
            Divyansh Kumar
        </p>
        <button onClick={()=>{
            navigate("/github")
        }}>Projects</button>
        <button>About</button>
        <button>Contact</button>
    </div>
}