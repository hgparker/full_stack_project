import React from 'react';

// component is list item component
// itemCallback returns mSTP-style object with props needed by component

const List = ({component: Component, list, itemCallback, listClassName}) => {
    if (!list)
        return null;   
    return (
        <ul className={listClassName}>
            {
                list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Component {...itemCallback(item)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default List;