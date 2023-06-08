import { AvForm, AvField } from "availity-reactstrap-validation";
import React from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditModal = ({
  toggle,
  isOpen,
  SaveEdit,
  saveEditUser,
  editModalOpen,
  editModal,
  editOpenUser,
  saveUsers,
  editModalUser,
}) => {
  function editSubmit(event, values) {
    SaveEdit(values);
    toggle();
  }

  function editLavozim(event, values) {
    saveEditUser(values);
    editModalOpen();
  }

  function editDaraja(event, values) {
    saveUsers(values);
    editModalUser();
  }
  return (
    <div>
      <Modal toggle={toggle} isOpen={isOpen}>
        <ModalHeader>
          <h4>Hodimlar</h4>
        </ModalHeader>
        <ModalBody>
          <AvForm id="id" onValidSubmit={editSubmit}>
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
          <button form="id" className="btn btn-success">
            Update
          </button>
          <button className="btn btn-danger" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={editModal} toggle={editModalOpen}>
        <ModalHeader>
          <h4>Lavozim</h4>
        </ModalHeader>
        <ModalBody>
          <AvForm id="id3" onValidSubmit={editLavozim}>
            <AvField name="Lavozim" label="Lavozim" placeholder="Lavozim..." />
            <AvField name="Maosh" label="Maosh" placeholder="Maosh..." />
          </AvForm>
        </ModalBody>
        <ModalFooter>
          <button form="id3" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={editModalOpen}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={editOpenUser} toggle={editModalUser}>
        <ModalHeader>
          <h4>Ilmiy Darja</h4>
        </ModalHeader>
        <ModalBody>
          <AvForm id="id5" onValidSubmit={editDaraja}>
            <AvField name="Nomi" label="Nomi" placeholder="Nomi..." />
            <AvField name="Bonus" label="Bonus" placeholder="Bonus..." />
          </AvForm>
        </ModalBody>
        <ModalFooter>
          <button form="id5" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={editModalUser}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return {
    SaveEdit: (val) => {
      dispatch({
        type: "SavEdit",
        value: val,
      });
    },
    saveEditUser: (values) => {
      dispatch({
        type: "editSaveUser",
        value: values,
      });
    },
    saveUsers: (values) => {
      dispatch({
        type: "SAVEEDIT",
        val: values,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
