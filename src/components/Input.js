import { useCallback, useState } from 'react';

function Input({ inputs, onClick }) {
    const [inputType, setInputType] = useState(0);

    return (
        <div>
            {inputs[inputType].type}
        </div>
    )
} 

export default Input;