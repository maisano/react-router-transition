import React from 'react';

const Viewport = ({ children }) => (
  <div className="browser__viewport">
    <div className="browser__viewport__body">
      {children}
    </div>
  </div>
);

export default Viewport;
