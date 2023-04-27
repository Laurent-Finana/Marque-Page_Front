/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changeInput } from '../../../actions/book';
import { createUserInApi, updateFormErrors } from '../../../actions/user';
import Field from '../../Field';
import './styles.scss';

function Inscription() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alias = useSelector((state) => state.user.alias);
  const email = useSelector((state) => state.user.emailInscription);
  const password = useSelector((state) => state.user.passwordInscription);
  const avatar = useSelector((state) => state.user.avatar);
  const formErrors = useSelector((state) => state.user.formErrors);
  /* ********** Verification du formulaire */
  const validateForm = () => {
    const errors = {};
    // Vérifier les champs obligatoires
    if (!alias) {
      errors.alias = 'Veuillez saisir votre pseudo';
    }
    if (!email) {
      errors.email = 'Veuillez saisir votre adresse e-mail';
    }
    if (!password) {
      errors.password = 'Veuillez saisir votre mot de passe';
    }
    // Vérifier le format de l'adresse e-mail
    const emailRegex = /^[^\W][a-zA-Z0-9\-\._]+[^\W]@[^\W][a-zA-Z0-9\-\._]+[^\W]\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email)) {
      errors.email = 'Veuillez saisir une adresse e-mail valide';
    }
    // Vérification du format du password
    const regExPassaword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (password && !regExPassaword.test(password)) {
      errors.password = 'Le mot de passe doit comporter au moins 8 caractères, une majuscule, un chiffre et un caractère spécial';
    }
    dispatch(updateFormErrors(errors));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 col-12">
          <h2>Inscription</h2>
          <form
            className="row g-2 inscription"
            onSubmit={(e) => {
              e.preventDefault();
              validateForm();
              dispatch(createUserInApi());
            }}
          >
            <div className="col-md-6">
              <Field
                required
                identifier="alias"
                placeholder=""
                label="Alias *"
                value={alias}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
              {formErrors.alias && <p className="error">{formErrors.alias}</p>}
            </div>
            <div className="col-12">
            <Field
              identifier="emailInscription"
              placeholder=""
              label="Email *"
              value={email}
              changeField={(identifier, newValue) => {
                dispatch(changeInput(identifier, newValue));
              }}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div>
            <div className="col-12">
            <Field
              identifier="passwordInscription"
              placeholder=""
              label="Mot de passe *"
              type="password"
              value={password}
              changeField={(identifier, newValue) => {
                dispatch(changeInput(identifier, newValue));
              }}
            />
            {formErrors.password && <p className="error">{formErrors.password}</p>}
            </div>
            <div className="col-12">

            <Field
              identifier="avatar"
              placeholder="Coller l'url de votre image"
              label="Avatar"
              value={avatar}
              changeField={(identifier, newValue) => {
                dispatch(changeInput(identifier, newValue));
              }}
            />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-warning">Enregistrer</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Inscription;
