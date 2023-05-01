import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGenderFromApi, putGenderIdInState, putIsbnInState, sendBookByIsbn,
} from '../../../../actions/book';
import { fetchUserInfo } from '../../../../actions/user';
import Loader from '../../../Loader';

function Gender() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.book.isLoading);
  const genderlist = useSelector((state) => state.book.gender);
  const libraries = useSelector((state) => state.book.libraries);
  const logged = useSelector((state) => state.user.logged);

  // eslint-disable-next-line eqeqeq
  const genderToDisplay = genderlist.find((gender) => gender.id == id);
  dispatch(putGenderIdInState('genderId', genderToDisplay.id));
  dispatch(getGenderFromApi());

  if (logged) {
    return (
      <div className=" row col-12 col-md-8 ">
        {isLoading && <Loader />}
        <h2>{genderToDisplay.name}</h2>
        <div className="row row-cols-1 row-cols-md-6 g-3">

          {genderToDisplay.books.map((genderBook) => (

            <div key={genderBook.id} className="col bookCard text-center">
              <div className="card h-100 border-warning">
                {!libraries.some((book) => book.book.id === genderBook.id)
            && (
            <Link to={`/livre/${genderBook.slug}`}>
              <img className="book-image img-fluid" src={genderBook.image} alt="" />
            </Link>
            )}
                {libraries.some((book) => book.book.id === genderBook.id) && (
                <Link to={`/bibliotheque/livre/${genderBook.slug}`}>
                  <img className="book-image img-fluid" src={genderBook.image} alt="" />
                </Link>
                )}
                <div className="card-body">
                  <h5 className="card-title">{genderBook.title}</h5>
                </div>
                {!libraries.some((book) => book.book.id === genderBook.id) && (

                <div className="card-footer bg-warning">
                  <button
                    className="btn btn-warning btn-sm"
                    type="submit"
                    onClick={() => {
                      dispatch(putIsbnInState(genderBook.isbn));
                      dispatch(sendBookByIsbn());
                      dispatch(fetchUserInfo());
                    }}
                  > ajouter a ma bibliothèque
                  </button>
                </div>
                )}
                {libraries.some((book) => book.book.id === genderBook.id) && (
                <p>Déja dans la bibliothèque</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
  return (
    <div className=" row col-12 col-md-8 ">
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-md-6 g-3">

        <h2>{genderToDisplay.name}</h2>
        {genderToDisplay.books.map((genderBook) => (

          <div key={genderBook.id} className="col bookCard text-center">
            <div className="card h-100 border-warning">
              <Link to={`/livre/${genderBook.slug}`}>
                <img className="book-image img-fluid" src={genderBook.image} alt="" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{genderBook.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Gender;
