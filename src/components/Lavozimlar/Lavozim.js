import React from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import ModalOpen from "../Modal";
import { useState } from "react";
import EditModal from "../EditModal";

const Lavozim = ({
  search,
  DELETE,
  lavozim,
  SearchLavozimm,
  AddLavozim,
  EDITLAVOZIM,
}) => {
  function searchLavozim(event) {
    const value = event.target.value;
    SearchLavozimm(value);
  }

  const [modalVisible, setModalvisible] = useState(false);
  const [editModal, setEditModal] = useState(false);

  function modalLavozim() {
    setModalvisible((prev) => !prev);
  }

  function saveLavozim(data) {
    AddLavozim(data);
    setModalvisible((p) => !p);
  }

  function deleteLavozim(index) {
    DELETE(index);
  }

  function EditLavozim(item) {
    EDITLAVOZIM(item);
    setEditModal((p) => !p);
  }

  function editModalOpen() {
    setEditModal((p) => !p);
  }

  return (
    <div className=" row container my-4 ">
      <ModalOpen
        open={modalVisible}
        modalLavozim={modalLavozim}
        daveLavozim={saveLavozim}
      />
      <EditModal editModal={editModal} editModalOpen={editModalOpen} />
      <div className="d-flex justify-content-between">
        <div className="col-md-2">
          <input
            type="search"
            placeholder="Search..."
            className="form-control"
            onChange={searchLavozim}
          />
        </div>
        <h1 className="text-center">Lavozim</h1>
        <div className="col-md-3">
          <button className="btn btn-dark float-end" onClick={modalLavozim}>
            Add
          </button>
        </div>
      </div>
      <table className="table table-bordered mt-4 text-center table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nomi</th>
            <th>Maosh</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lavozim
            .filter((item, index) => {
              if (search === "") {
                return item;
              } else if (
                item.title.toUpperCase().includes(search.toUpperCase())
              ) {
                return item;
              }
            })

            .map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.maosh}</td>
                <td className="col-md-3">
                  <button
                    className="btn btn-info "
                    onClick={() => EditLavozim(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteLavozim(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    search: state.search,
    lavozim: state.lavozim,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SearchLavozimm: (event) => {
      dispatch({
        type: "SEARCHLAVOZIM",
        value: event,
      });
    },

    AddLavozim: (data) => {
      dispatch({
        type: "AddLavozim",
        Lavozim: data.Lavozim,
        Maosh: data.Maosh,
      });
    },

    DELETE: (index) => {
      dispatch({
        type: "DELETELAVOZIM",
        id: index,
      });
    },
    EDITLAVOZIM: (item) => {
      dispatch({
        type: "EDITLAVOZIM",
        editUser: item,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lavozim);
