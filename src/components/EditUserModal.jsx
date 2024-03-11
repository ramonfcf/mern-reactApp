import { useState } from "react";

const EditUserModal = () => {
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
      <button
        type="button"
        className="btn btn-primary ms-2 btn-sm p-1"
        onClick={() => setOpen(!open)}
      >
        Edit
      </button>
      {open && (
        <>
          <div style={backdropStyle}></div>
          <div
            className="modal"
            tabIndex="-1"
            style={{ display: "block", zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit User</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setOpen(!open)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setOpen(!open)}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
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
