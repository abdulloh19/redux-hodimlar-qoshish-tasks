import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import React from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalOpen = ({
  toggle,
  isOpen,
  save,
  modalLavozim,
  open,
  daveLavozim,
  openModalDarja,
  openDarja,
  addDaraja
}) => {
  function addSubmit(event, values) {
    save(values);
  }

  function AddModalLavozim(event, values) {
    daveLavozim(values);
  }

  function AddModalDarja(event, values) {
    addDaraja(values)
    
  }
  return (
    <div>
      <Modal toggle={toggle} isOpen={isOpen}>
        <ModalHeader>
          <h4>Hodimlar Qo'shish</h4>
        </ModalHeader>
        <ModalBody>
          <AvForm id="id1" onValidSubmit={addSubmit}>
            <AvField name="FirstName" label="FirstName" />
            <AvField name="LastName" label="LastName" />
            <AvField name="Phone" type="number" label="Phone" />
            <AvField name="Select" type="select" label="Lavozim">
              <option>Disegner</option>
              <option>Developer</option>
              <option>Programer</option>
              <option>TeamLead</option>
            </AvField>
            <AvField name="Ilmiy_Daraja" type="select" label="Ilmiy_Daraja">
              <option>Senior</option>
              <option>Middle</option>
              <option>Junior</option>
            </AvField>
          </AvForm>
        </ModalBody>
        <ModalFooter>
          <button form="id1" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={open} toggle={modalLavozim}>
        <ModalHeader>
          <h4>Hodimlar Qo'shish</h4>
        </ModalHeader>
        <ModalBody>
          <AvForm id="id2" onValidSubmit={AddModalLavozim}>
            <AvField name="Lavozim" label="Lavozim" placeholder="Lavozim..." />
            <AvField name="Maosh" label="Maosh" placeholder="Maosh..." />
          </AvForm>
        </ModalBody>
        <ModalFooter>
          <button form="id2" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={modalLavozim}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={openModalDarja} toggle={openDarja}>
        <ModalHeader>
          <h4>Ilmiy Daraja Qo'shish</h4>
        </ModalHeader>
        <ModalBody>
          <AvForm id="id3" onValidSubmit={AddModalDarja}>
            <AvField name="Nomi" label="Nomi" placeholder="Nomi..." />
            <AvField name="Bonus" label="Bonus" placeholder="Bonus..." />
          </AvForm>
        </ModalBody>
        <ModalFooter>
          <button form="id3" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={openDarja}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addDarjaUsers: (values) => {
      dispatch({
        type: "AddDaraja",
        qiymat: values,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(ModalOpen);
