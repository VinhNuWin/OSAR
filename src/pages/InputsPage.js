import Input from "../components/Input";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

function InputsPage() {
    const button = <Button />
    const dropdown = <Dropdown />

    const inputs = [
        {
            type: button,
        },
        {
            type: dropdown,
        }
    ];

    return <Input inputs={inputs} />
}

export default InputsPage;