import React from 'react'
// import { useHistory } from "react-router-dom";
import { useNavigate ,useLocation} from 'react-router-dom';

export default function ProductR() {

    const navigate = useNavigate()

    const handleclick = ()=>{
        navigate("/about")
    }
const location = useLocation()
console.log(location.search);

  return (
    <div>ProductR

        <button onClick={handleclick}>Contact</button>
    </div>
  )
}
