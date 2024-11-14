import { Link } from "react-router-dom";

export default function Home(){

    return (
    <div>
        <h1>MineSweeper</h1>


        <div><Link to='/Rules'>Rule</Link></div>
        <div><Link to='/difficulty'>Play</Link></div>

       </div>

        )

    }
