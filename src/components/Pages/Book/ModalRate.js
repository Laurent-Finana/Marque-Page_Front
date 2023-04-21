/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import { changeRateField, closeModalRate } from '../../../actions/book';
import FieldText from '../../FieldText';

function ModalRate() {
  const dispatch = useDispatch();
  const modalRate = useSelector((state) => state.book.modalRate);
  const commentaire = useSelector((state) => state.book.commentaire);
  const citation = useSelector((state) => state.book.citation);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalRate}
      onHide={() => {
        dispatch(closeModalRate());
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Vos avis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="settings-form g-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('c\'est le moment de faire ma requête !');
          }}
        >
          <FieldText
            identifier="commentaire"
            placeholder="Commentaire"
            label="Commentaire"
            value={commentaire}
            changeField={(identifier, newValue) => {
              dispatch(changeRateField(identifier, newValue));
            }}
          />
          <FieldText
            identifier="citation"
            placeholder="Citation"
            label="Citation"
            value={citation}
            changeField={(identifier, newValue) => {
              dispatch(changeRateField(identifier, newValue));
            }}
          />
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineCheckbox1">Lu
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineCheckbox2">A lire
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineCheckbox3">Acheté
              <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineCheckbox4">Mes envies
              <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineCheckbox5">Coup de coeur
              <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
            </label>
          </div>
          <p>Notez votre livre</p>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineRadio1">1
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineRadio2">2
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineRadio3">3
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineRadio4">4
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
            </label>
          </div>
          <div className="form-check form-check-inline">

            <label className="form-check-label" htmlFor="inlineRadio5">5
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
            </label>
          </div>

          <Modal.Footer>
            <button type="submit" className="btn btn-warning">Confirmer</button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>

  );
}

export default ModalRate;
