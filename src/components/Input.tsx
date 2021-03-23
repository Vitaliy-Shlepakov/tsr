import React, {useState, useRef} from 'react';

const Input = () => {

    const [name, setName] = useState<string>("")
    const ref = useRef<HTMLInputElement | null>(null);
    return (
        <input
            ref={ref}
            value={name}
            onChange={e=> setName(e.target.value)}
        />
    );
};

export default Input;