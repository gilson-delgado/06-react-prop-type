import PropTypes from "prop-types";
import "./style.css";

const Count = (props) => {
    return (
        <div className="card">
            <h1 className="titulo">Vite + React</h1>
            <button onClick={props.incrementCount}>
                count is {props.count}
            </button>
            <p>
                Edite <code>src/App.jsx</code> e salve para testar.
            </p>
            <p className="read-the-docs">
                Clique nos logotipos Vite e React para saber mais.
            </p>
        </div>
    )
}
Count.PropTypes = {
    count: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired,
}
export default Count;