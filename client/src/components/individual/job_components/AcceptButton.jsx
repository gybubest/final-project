import { React, useState } from 'react';

const AcceptButton = (props) => {
  const { reference_id, handleAccept } = props;
  const [show, setShow] = useState(true);

  const handelClick = (event) => {
    event.preventDefault();
    handleAccept(reference_id);
    setShow(false)
  };

  return (
    <div>
      {show && <button onClick={handelClick}>Accept</button>}
      {!show && <button disabled={true}>Accepted</button>}

    </div>
  )
  
};

export default AcceptButton;