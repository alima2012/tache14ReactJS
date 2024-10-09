import { NavLink, Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Projet de validation</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/ajout">Ajout Post</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}