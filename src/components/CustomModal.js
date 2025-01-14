import React from "react";

function CustomModal({ children, open }) {
  return (
    open && (
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/25 flex justify-center items-center">
        <div>{children}</div>
      </div>
    )
  );
}

export default CustomModal;
