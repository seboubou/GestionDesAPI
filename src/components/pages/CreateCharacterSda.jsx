import { useState } from "react";
import { useNavigate } from "react-router-dom"
import CreationCharacterSdaForm from "./CreationCharacterSdaForm"
 
function CreateCharacterSda() {
    const [postSucceed, setPostSucceed] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        race: "",
        image: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((previousValue) => ({
            ...previousValue, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/api/sda", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(() => {
                setPostSucceed(true);

                setFormData({
                    name: "",
                    race: "",
                    image: ""
                })

                setTimeout(() => {
                    navigate("/LeSeigneurDesAnneaux");
                }, 4000)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <main className="admin-conteneur">
        <ul className="admin-page">
            {!postSucceed &&
                <li className="admin-page_title">
                    <h2>Créez votre personnage du Seigneur des anneaux</h2>
                </li>
            }
            <li className="admin-page_form">
                {!postSucceed &&
                    <CreationCharacterSdaForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                }
            </li>
            {postSucceed &&
                <li className="admin-page_message_success">
                    <div className="progress-bar"></div>
                    <p>Personnage créé !</p>
                </li>
            }
        </ul>
        </main>
    )
}

export default CreateCharacterSda;