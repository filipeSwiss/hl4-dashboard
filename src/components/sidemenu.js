import './sidemenu.css';

function Sidemenu({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <h2>Saiba mais</h2>
      <button>desconectar</button>
    </div>
  );
}

export default Sidemenu;