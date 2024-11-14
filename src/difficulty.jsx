import { Link } from "react-router-dom";

export default function Difficulty(){
    return (
        <div>
        <Link to = '/EasyGame'>Easy</Link>
        <Link to = '/MidGame'>Medium</Link>
        <Link to = '/HardGame'>Hard</Link>
        </div>
        
    )
}