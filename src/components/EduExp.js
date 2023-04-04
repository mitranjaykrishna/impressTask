import { useState } from 'react';
import EduExpCard from './EduExpCard';
import Button from 'react-bootstrap/Button';

const EduExp=()=>{
    

    const [edu,setEdu]=useState(1);
    const [exp,setExp]=useState(1);

    

    return(
        <>
            <div>
                { [...Array(edu)].map(()=>(
                    <EduExpCard obj= {{ o1: "Institue/College",o2:"Year",o3:"Degree"}}  />
                ))
                }
                <Button variant="primary" className="mb-5 " onClick={()=>setEdu(edu+1)}>ADD</Button>
            </div>
            <div>
                { [...Array(exp)].map(()=>(

                    <EduExpCard obj= {{ o1: "Company Name",o2:"Year",o3:"Designation"}}  />
                    ))
                }
                <Button variant="primary" onClick={()=>setExp(exp+1)}>ADD</Button>
            </div>
        </>
    )
}

export default EduExp;