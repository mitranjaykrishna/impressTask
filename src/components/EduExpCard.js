import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const EduExpCard=(props)=>{
    return(
        <>
            {/* <div> */}
                <FloatingLabel controlId="floatingText" label={props.obj.o1} className="mb-3">
                <Form.Control type="text" placeholder={props.obj.o1} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingText" label={props.obj.o2} className="mb-3">
                <Form.Control type="text" placeholder={props.obj.o2} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingText" label={props.obj.o3} className="mb-4">
                <Form.Control type="text" placeholder={props.obj.o3} />
                </FloatingLabel>
            {/* </div> */}
        </>
    )
}

export default EduExpCard;