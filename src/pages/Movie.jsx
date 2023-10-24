import { useParams, useNavigate, useLocation, useResolvedPath } from "react-router-dom";

function Movie(){
    const {id} = useParams();
    const navigate = useNavigate();
    let location = useLocation();
    const url = useResolvedPath("").pathname;

    const handleClick = () => {
      // Now you can navigate programmatically to other pages using navigate
      navigate('/');
    };

    return (
    <>
        <h1>Some Movie id = {id}</h1>
        <button className="btn" onClick={handleClick}>Go back</button>
    </>
    );
}

export {Movie}