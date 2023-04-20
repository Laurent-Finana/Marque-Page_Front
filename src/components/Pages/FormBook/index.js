import { useSelector, useDispatch } from 'react-redux';
import { changeInput, sendBookCreateInApi } from '../../../actions/book';
import Field from '../../Field';
import FieldText from '../../FieldText';
import './styles.scss';

function FormBook() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.book.title);
  const lastname = useSelector((state) => state.book.lastname);
  const firstname = useSelector((state) => state.book.firstname);
  const editor = useSelector((state) => state.book.editor);
  const collection = useSelector((state) => state.book.collection);
  const summary = useSelector((state) => state.book.summary);
  const price = useSelector((state) => state.book.price);
  const pages = useSelector((state) => state.book.pages);
  const isbn = useSelector((state) => state.book.isbn);
  const publication_date = useSelector((state) => state.book.publication_date);

  return (

    <div className="container divInscription">
      <div className="container text-center titleAdd">Entrez l'ISBN du livre <strong>OU</strong> remplissez le formulaire d'ajout</div>
      <div className="row justify-content-around mt-5">
        <div className="col-md-5 col-12  text-center">
          <form className="row  g-2 col-md-6 offset-md-3">
            <div className="col-12">
              <Field
                identifier="isbn"
                placeholder="isbn"
                label="ISBN"
                value={isbn}
                type="number"
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-warning">Ajouter</button>
            </div>
          </form>
        </div>
        <div className="col-md-5 col-12">
          <form
            className="row g-2"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(sendBookCreateInApi());
            }}
          >
            <div className="col-12">
              <Field
                identifier="title"
                placeholder="title"
                label="Titre"
                value={title}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="lastname"
                placeholder="lastname"
                label="Nom de l'Auteur"
                value={lastname}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="firstname"
                placeholder="firstname"
                label="Prenom de l'Auteur"
                value={firstname}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="editor"
                placeholder="editeur"
                label="Nom de l'Editeur"
                value={editor}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="collection"
                placeholder="collection"
                label="Collection"
                value={collection}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            {/* <div className="col-md-6">
            <label htmlFor="genre" className="form-label">Genre</label>
            <select id="genre" className="form-select">
              <option selected>Choix...</option>
              <option>...</option>
            </select>
          </div> */}
            <div className="col-md-6">
              <Field
                identifier="publication_date"
                placeholder="publication_date"
                label="Année de publication"
                value={publication_date}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-2">
              <Field
                identifier="price"
                placeholder="price"
                label="Prix"
                value={price}
                type="number"
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-4 ">
              <Field
                identifier="pages"
                placeholder="pages"
                label="Nbre de pages"
                type="number"
                value={pages}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-12">
              <FieldText
                identifier="summary"
                placeholder="summary"
                label="Résumé"
                value={summary}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-warning">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormBook;
