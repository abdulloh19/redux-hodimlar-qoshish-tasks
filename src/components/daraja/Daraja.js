import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import EditModal from "../EditModal";

const Daraja = ({
  searchDarajas,
  darja,
  searchDaraja,
  addDaraja,
  deleteDaraja,
  editUsers,  
}) => {
  const [openModalDarja, setOpenModalDarja] = useState(false);
  const [editOpenUser, setEditOpen] = useState(false);

  function Searchs(event) {
    const values = event.target.value;
    searchDaraja(values);
  }

  function openDarja() {
    setOpenModalDarja((p) => !p);
  }

  function saveDarja(data) {
    addDaraja(data);
    setOpenModalDarja((p) => !p);
  }

  function deleteDarajaa(index) {
    deleteDaraja(index);
  }

  function editModalUsers() {
    setEditOpen((p) => !p);
  }

  function editDarajaUser(item) {
    setEditOpen((p) => !p);
    editUsers(item);
  }
  return (
    <div className="container my-4 ">
      <div className="d-flex justify-content-between">
        <div className="col-md-2">
          <Modal
            openModalDarja={openModalDarja}
            openDarja={openDarja}
            addDaraja={saveDarja}
          />
          <EditModal editOpenUser={editOpenUser} editModalUser={editDarajaUser} />
          <input
            type="search"
            placeholder="Search..."
            className="form-control"
            onChange={Searchs}
          />
        </div>
        <h1 className="text-center">Ilmiy Daraja</h1>
        <div className="col-md-3">
          <button className="btn btn-dark float-end" onClick={openDarja}>
            Add
          </button>
        </div>
      </div>
      <table className="table table-bordered text-center table-dark my-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Nomi</th>
            <th>Bonus</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {darja
            .filter((item) => {
              if (searchDarajas === "") {
                return item;
              } else if (
                item.nomi.toUpperCase().includes(searchDarajas.toUpperCase())
              ) {
                return item;
              }
            })

            .map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nomi}</td>
                <td>{item.bonus}</td>
                <td className="col-md-3">
                  <button
                    className="btn btn-info mx-2"
                    onClick={() => editDarajaUser(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDarajaa(index)}
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

function mapSatateToProps(state) {
  return {
    searchDarajas: state.search,
    darja: state.ilmiyDaraja,
  };
}

function mapDsipatchToProps(dispatch) {
  return {
    searchDaraja: (event) => {
      dispatch({
        type: "SearchDaraja",
        event: event,
      });
    },

    addDaraja: (data) => {
      dispatch({
        type: "ADDDARJA",
        Nomi: data.Nomi,
        Bonus: data.Bonus,
      });
    },
    deleteDaraja: (index) => {
      dispatch({
        type: "DELETEDARAJA",
        id: index,
      });
    },
    editUsers: (item) => {
      dispatch({
        type: "EDITUSERS",
        change: item,
      });
    },
  };
}

export default connect(mapSatateToProps, mapDsipatchToProps)(Daraja);
