import React, { useState } from "react";
import { connect } from "react-redux";
import ModalOpen from "./Modal";
import EditModal from "./EditModal";
import Header from "./Header/Header";

const Hodimlar = ({ hodimlar, Data, EditData, Delete, Search, search }) => {
  const [modal, setModal] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function remove(index) {
    Delete(index);
  }

  function saveUser(data) {
    Data(data);
    setModal((prev) => !prev);
    console.log(data);
  }

  function editUser(item) {
    EditData(item);
    setEditOpen((prev) => !prev);
  }

  return (
    <div className="row my-4">
      <div className="d-flex justify-content-between">
        <ModalOpen toggle={toggle} isOpen={modal} save={saveUser} />
        <EditModal toggle={editUser} isOpen={editOpen} />
        <Header Search={Search} toggle={toggle} />
      </div>
      <div>
        <table className="table table-bordered table-dark text-center my-3">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Ism</th>
              <th>Familiya</th>
              <th>Telefon</th>
              <th>Lavozim</th>
              <th>Ilmiy daraja</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hodimlar
              .filter((item, index) => {
                if (search === "") {
                  return item;
                } else if (
                  item.ismi.toUpperCase().includes(search.toUpperCase()) ||
                  item.familiya.toUpperCase().includes(search.toUpperCase())
                ) {
                  return item;
                }
              })

              .map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.ismi}</td>
                  <td>{item.familiya}</td>
                  <td>{item.telefon}</td>
                  <td>{item.ilmiy_Daraja}</td>
                  <td>{item.lavozim}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => editUser(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    hodimlar: state.hodimlar,
    search: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Data: (data) => {
      dispatch({
        type: "XODIMLAR",
        FirstName: data.FirstName,
        LastName: data.LastName,
        Phone: data.Phone,
        Select: data.Select,
        Ilmiy_Daraja: data.Ilmiy_Daraja,
      });
    },
    EditData: (item) => {
      dispatch({
        type: "EDIT_XODIMLAR",
        edit: item,
      });
    },
    Delete: (index) => {
      dispatch({
        type: "DELETE",
        id: index,
      });
    },
    Search: (event) => {
      dispatch({
        type: "Search",
        value: event,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hodimlar);
