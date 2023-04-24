import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleandDetail, getCharactersDetail } from "../../redux/actions";


function DogCharacters() {

    const dispatch = useDispatch();
    const character = useSelector((state) => state.charactersDetail);
    const {id} = useParams();

    //componentDidMount
    //componentDidUpdate
    //componentWillUnMount

    useEffect(()=> {
        dispatch(getCharactersDetail(id));
        
        return ()=> {
            dispatch(cleandDetail())
        }
    }, [id]);

    return character;
};

export default DogCharacters;