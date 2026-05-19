import { Link, Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/v7";
    }
    return location.pathname === path;
  };

  return (
    <div className="size-full flex flex-col">
      <nav className="bg-slate-100 border-b border-slate-200 px-6 py-4">
        <div className="flex gap-3">
          <Link
            to="/v1"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v1")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V1 - Breathing
          </Link>
          <Link
            to="/v2"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v2")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V2 - Pulse
          </Link>
          <Link
            to="/v3"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v3")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V3 - Mesh
          </Link>
          <Link
            to="/v4"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v4")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V4 - Ethereal Aura
          </Link>
          <Link
            to="/v5"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v5")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V5 - Split Brain
          </Link>
          <Link
            to="/v6"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v6")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V6 - Organic Split
          </Link>
          <Link
            to="/v7"
            className={`px-4 py-2 rounded transition-colors ${
              isActive("/v7") || isActive("/")
                ? "bg-orange-500 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            V7 - Rotating Pulse
          </Link>
        </div>
      </nav>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}