import { useState } from "react";

import propTypes from "prop-types";

import Button from "../../atoms/Button/Button";
import UpdateUserForm from "../UserForm/UserForm";

const EditUserModal = ({ user }) => {
  const [open, setOpen] = useState(false);

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1040,
  };

  return (
    <span>
      <Button text="Edit" size="small" onClick={() => setOpen(!open)} />
      {open && (
        <>
          <div style={backdropStyle}></div>
          <div
            className="modal"
            tabIndex="-1"
            style={{ display: "block", zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit User</h5>

                  <Button
                    type="close"
                    color="none"
                    onClick={() => (setOpen(!open), window.location.reload())}
                  />
                </div>
                <div className="modal-body">
                  <UpdateUserForm
                    user={user}
                    buttonMessage={"Confirm"}
                    method="PATCH"
                  />
                </div>
                <div className="modal-footer">
                  <Button
                    text="Close"
                    color="dark"
                    onClick={() => (setOpen(!open), window.location.reload())}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </span>
  );
};

export default EditUserModal;

EditUserModal.propTypes = {
  user: propTypes.object.isRequired,
};
