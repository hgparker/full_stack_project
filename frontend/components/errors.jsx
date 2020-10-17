import React from 'react';

const Errors = (props) => {
    if (!props.errors)
        return null;
    return (
        <ul>
            {
                props.errors.map((error) => {
                    return (
                        <li className="ErrorMessage" key={error[0]}>
                            {error}
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Errors;

