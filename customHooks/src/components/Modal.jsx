import { useRef, useEffect, forwardRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }, ref) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <div ref={ref}>
      <dialog className="modal" ref={dialog} onClose={onClose}>
        {open ? children : null}
      </dialog>
    </div>,
    document.getElementById('modal')
  );
}

export default forwardRef(Modal);
