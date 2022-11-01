import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";

function AddColorForm(){
    const [formData, setFormData] = useState('');
    const {colors, setColors} = useOutletContext();

    function handleChange(evt){
        setFormData(evt.target.value);
    };

    // add new color to ColorHome state and reset form
    function handleSubmit(evt){
        evt.preventDefault();
        setColors(() => [...colors, formData]);
        setFormData('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> New Color
                <input type='text' placeholder="Add color" onChange={handleChange}/>
            </label>
            <button>Save</button>
        </form>
    )
}

export default AddColorForm;
