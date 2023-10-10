const Modal = ({ title, message, buttonTitle, withCancel, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-buttons">
          {withCancel && (
            <button className="me-16 bg-highlight" onClick={onCancel}>
              Cancel
            </button>
          )}

          <button onClick={onConfirm}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
