import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris-01.svg';
import bookWish from '../../../assets/images/wishlist.svg';
import defaultBook from '../../../assets/images/default-img.jpg';

import './styles.scss';

function All() {
  const libraries = useSelector((state) => state.book.libraries);
  const sortBy = useSelector((state) => state.book.sortBy);

  const sortedBooks = [...libraries].sort(((a, b) => {
    if (sortBy === 'title') {
      return a.book.title.localeCompare(b.book.title);
    }
    if (sortBy === 'publicationDate') {
      return a.book.publicationDate < (b.book.publicationDate);
    }
    if (sortBy === 'editor') {
      return a.book.editor.localeCompare(b.book.editor);
    }
    return 0;
  }));
  console.log(libraries);
  return (
    <div className="col-12 col-md-8 col-right">
      <h2>Bibliothèque</h2>
      <div className="row row-cols-1 row-cols-md-5 g-3">
        { sortedBooks.map((library) => (
          <div className="col bookCard text-center" key={library.book.id}>
            <div className="card h-100 border-warning">
              <Link
                to={`/bibliotheque/livre/${library.book.slug}`}
              >
                <img src={library.book.image ? library.book.image : defaultBook} className="img-fluid" alt={library.book.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{library.book.title}</h5>
              </div>

              <div className={library.finished ? 'card-footer bg-warning' : 'card-footer'}>
                {library.favorite && <img className="bookmark" src={bookHeart} alt="" />}
                {library.wishlist && <img className="bookmark" src={bookWish} alt="" />}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default All;
