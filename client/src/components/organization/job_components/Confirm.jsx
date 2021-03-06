const Confirm = ({message, deleteCancel, deleteConfirm}) => {

  return(
    <section className="delete-confirmation">
      <div className="delete-msg">
        {message}
      </div>
      <div className="delete-actions">
        <button className="delete-actions" onClick={deleteCancel}>Cancel</button>
        <button className="delete-actions" onClick={deleteConfirm}>Confirm</button>
      </div>
    </section>
  );
};

export default Confirm;