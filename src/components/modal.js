const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, background: '#000a', width: '100%', height: '100%' }}>
      <div style={{ background: '#fff', margin: '10% auto', padding: 20, width: 300 }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
