import { useLocation, useNavigate } from "react-router";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      {displayName !== "Accueil" && (
        <a onClick={handleGoBack} style={{ cursor: "pointer", display: "flex", alignItems: "left" }}>
            <img src="15-SS.png" alt="Lyre Skyward Sword" />
        </a>
      )}
      <h1 className="header__title">{displayName}</h1>
      <h4>Bienvenu au marché Zelda</h4>
    </div>
  );
}