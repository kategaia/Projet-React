import { Link } from "react-router"
import { Login } from "../auth/LoginOut"
import { Logout } from "../auth/LoginOut"
import { useAuth } from "../auth/AuthProvider"

export default function Home() {
    const { user } = useAuth();
    return (
    <>
        <Link to="/Game">
            <button>Voir les Jeux</button>
        </Link>
        <Link to="/Boss">
            <button>Voir les Boss</button>
        </Link>
        <Link to="/Character">
            <button>Voir les Personnages</button>
        </Link>
        <Link to="/Item">
            <button>Voir les Objets</button>
        </Link>
        <Link to="/Place">
            <button>Voir les Lieux</button>
        </Link>
        {user ? (
                <>
                <p></p>
                Bienvenue {user.username}
                <p></p>
                <Logout/>
                </>
            ):(
                <Login/>
            )}
    </>
    )
}