import React from "react";

const AddModal = ({ closeModal }) => {
  return (
    <>
      <div
        class="absolute top-0 left-0 z-50 flex justify-center items-center w-full h-full"
      >
        <div onClick={() => closeModal(false)} class="w-[608px] h-[362px] inline-block bg-white shadow-xl cursor-pointer">
            close
        </div>
      </div>
    </>
  );
};

export default AddModal;
