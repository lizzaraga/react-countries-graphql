import { Link } from "react-router-dom";

export function CountryItem({name, code, emoji, to}){
  return (
    <div className="country-item">
      <header className="d-flex align-items-center justify-content-between ">
        <div className="d-flex align-items-center gap-4 ">
          <span>{emoji}</span>
          <span>{name} <i className="text-black-50 ">({code})</i></span>
        </div>
        <Link to={to} className="btn btn-primary btn-sm fw-medium ">Details</Link>
      </header>
    </div>
  )
}
