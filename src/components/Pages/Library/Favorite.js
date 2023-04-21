import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris-01.svg';

import './styles.scss';

function Favorite() {
  const libraries = useSelector((state) => state.book.libraries);
  const logged = useSelector((state) => state.user.logged);
  const filtredByFavorite = libraries.filter((book) => book.favorite === true);

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
        <div className="col-12 col-md-8 col-right">
          <h2>Coups de coeur</h2>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {filtredByFavorite
            && filtredByFavorite.map((library) => (
              <div className="col bookCard text-center border-warning" key={library.book.id}>
                <div className="card h-100">
                  <Link to={`/bibliotheque/livre/${library.book.id}`}><img src={library.book.image} className="img-fluid" alt="..." /></Link>
                  <div className="card-body">
                    <h5 className="card-title">{library.book.title}</h5>
                  </div>
                  <div className="card-footer bg-warning">
                    <img className="bookmark" src={bookHeart} alt="" />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

  );
}

export default Favorite;
