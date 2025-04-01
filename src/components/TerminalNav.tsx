import { Link } from 'react-router-dom';

const TerminalNav = () => {
  return (
    <nav className="terminal-nav">
      <ul>
        <li>
          <Link to="/" className="terminal-link">
            $ home
          </Link>
        </li>
        <li>
          <Link to="/sobre" className="terminal-link">
            $ sobre
          </Link>
        </li>
        <li>
          <Link to="/projetos" className="terminal-link">
            $ projetos
          </Link>
        </li>
        <li>
          <Link to="/contato" className="terminal-link">
            $ contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TerminalNav; 