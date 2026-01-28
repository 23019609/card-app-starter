import { useEffect, useState } from "react";

export default function CardForm({
    // values,
    // onChange,
    // onSubmit,
    // busy,
    // error,
    // submitText,
    initialData,
    onSubmit,
    disabled,
}) {
    /* TODO: Complete the CardForm component 
  - display form inputs for card_name and card_pic
  - display error message
  - display submit button 
  - handle form submission 
  - style as a form UI */

    const [values, setValues] = useState({
        card_name: "",
        card_pic: "",
    });

    // populate form when editing
    useEffect(() => {
        if (initialData) {
            setValues({
                card_name: initialData.card_name || "",
                card_pic: initialData.card_pic || "",
            });
        }
    }, [initialData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(values);
    }

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="card_name">Card Name</label>
                <input
                    id="card_name"
                    name="card_name"
                    value={values.card_name}
                    onChange={handleChange}
                    disabled={disabled}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="card_pic">Card Image URL</label>
                <input
                    id="card_pic"
                    name="card_pic"
                    value={values.card_pic}
                    onChange={handleChange}
                    disabled={disabled}
                    required
                />
            </div>

            <button className="form-submit" disabled={disabled}>
                {initialData ? "Update Card" : "Add Card"}
            </button>
        </form>
    );
}
