import { Link } from "react-router"
import { Login } from "../auth/LoginOut"

export default function Home() {
    return (
    <>
        <Login />
        <Link to="/Game">
            <button>Voir les Jeux</button>
        </Link>
        <Link to="/Boss">
            <button>Voir les Boss</button>
        </Link>
    </>
    )
}