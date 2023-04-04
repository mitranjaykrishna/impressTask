import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Info() {
  return (
    <>
        <div>
          <FloatingLabel controlId="floatingText" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>
        
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
          <Form.Control type="text" placeholder="Phone" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea" label="Address" className="mb-5">
            <Form.Control as="textarea" placeholder="Leave a Address here" />
          </FloatingLabel>
        </div>
    </>
  );
}

export default Info;
