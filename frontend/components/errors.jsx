import React from 'react';

const Errors = ({errors}) => {
    return (
        <ul>
            {
                errors.map((error) => {
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

