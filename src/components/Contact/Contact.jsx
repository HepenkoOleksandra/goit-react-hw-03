import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({contact}) => {
  return (
    <li>
          
          <h3>
              <BiSolidUser />
              {contact.name}</h3> 

          <p>
              <BsFillTelephoneFill />
              {contact.number}</p>
          <button>Delete</button>
    </li>
  )
}

export default Contact