import EduExp from './EduExp';
import Info from './Info';
import "./styles/hero.css"

const Hero=()=>{
    return(
        <>
            <div className='wrapper'>
                <h1 className='mb-5 d-flex justify-content-center'>Impress FrontEnd Intern</h1>
                
                    <Info />
                
                <div>
                    <EduExp />
                </div>
            </div>
            
            
            
        </>
    )
}
export default Hero;