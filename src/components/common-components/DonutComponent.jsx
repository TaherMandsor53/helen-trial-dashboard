import React, { useState } from 'react';

export default function DonutComponent({ title, description, buttonText, customClass, customInnerClass }) {
  const [showMoreBtn, setShowMoreBtn] = useState(false);

  return (
    <div>
      <div
        className={`donut ${customClass}`}
        onMouseOver={() => setShowMoreBtn(true)}
        onMouseOut={() => setShowMoreBtn(false)}
      >
        <div className={`inner-content ${customInnerClass}`}>
          <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          <div>{description}</div>
          {showMoreBtn && <button>{buttonText}</button>}
        </div>
      </div>
    </div>
  );
}
