import { Link } from "react-router-dom";

export default function Difficulty(){
    return (
        <div>
        <div><Link to = '/EasyGame'>Easy</Link></div>
        <div><Link to = '/MidGame'>Medium</Link></div>
        <div><Link to = '/HardGame'>Hard</Link></div>
        </div>
        
    )
}