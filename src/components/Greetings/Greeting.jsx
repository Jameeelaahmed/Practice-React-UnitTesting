import { useState } from "react"
import Output from "../Outputs/Output";
function Greeting() {
    const [changed, setChanged] = useState(false);
    function hancleClick() {
        setChanged(true);
    }
    return (
        <div>
            {!changed && <p><Output>say hi to the user</Output></p>}
            {changed && <p><Output>Changed</Output></p>}
            <button onClick={hancleClick}>Click</button>
        </div>
    )
}

export default Greeting
