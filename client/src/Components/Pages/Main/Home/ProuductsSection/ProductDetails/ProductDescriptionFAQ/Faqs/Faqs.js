import React from 'react';

const Faqs = ({toggle}) => {
    return (
        <div className={toggle === 2 ? "block" : "hidden"}>
        <h1>ProductsFaqs</h1>
    </div>
    );
};

export default Faqs;