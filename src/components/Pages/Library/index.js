import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import All from './All';

import './styles.scss';

function Library() {
  const logged = useSelector((state) => state.user.logged);

  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container biblio mt-5">
      <div className="row">
        <div className="col-12 col-md-4 searchBiblio">
          <Link
            className="btn btn-warning btn-md"
            to="/ajout-livre"
            role="button"
          >
            ajouter un livre
          </Link>
          <ul className="navLibrary mt-3">
            <li><Link to="/bibliotheque">Tous mes livres</Link></li>
            <li><Link to="/bibliotheque/lus">Livres lus</Link></li>
            <li><Link to="/bibliotheque/a-lire">Pile à lire</Link></li>
            <li><Link to="/bibliotheque/envies">Mes envies</Link></li>
            <li><Link to="/bibliotheque/favoris">Coups de coeurs</Link></li>
          </ul>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue>Recherche par...</option>
            <option value="1">Titre</option>
            <option value="2">Auteur</option>
            <option value="3">Genre</option>
          </select>
        </div>
        <All />
      </div>
    </div>

  );
}

export default Library;
