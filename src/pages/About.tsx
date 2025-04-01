import TerminalNav from '../components/TerminalNav';

const About = () => {
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <h1 className="terminal-title">C_A7-300-010</h1>
        <div className="terminal-id">1273595-0-9</div>
      </div>

      <div className="terminal-section">
        <h2 className="terminal-section-title" data-id="924649-1-2">$ cat cyberpunk_movies.txt</h2>
        <ul>
          <li>Ghost in the Shell (1995)</li>
          <li>The Matrix (1999)</li>
          <li>Blade Runner 2049 (2017)</li>
          <li>Altered Carbon (2018)</li>
        </ul>
      </div>

      <div className="terminal-section">
        <h2 className="terminal-section-title" data-id="724649-1-1">$ whoami</h2>
        <p>Desenvolvedor Fullstack</p>
        <p className="terminal-code">ID: 9575693-1-3</p>
      </div>

      <div className="terminal-section">
        <h2 className="terminal-section-title" data-id="856390-2-3">$ ls ./skills/</h2>
        <ul>
          <li>React.js [v18.2.0]</li>
          <li>Node.js [v20.x]</li>
          <li>TypeScript [v5.x]</li>
          <li>Python [v3.11]</li>
          <li>SQL [PostgreSQL]</li>
        </ul>
      </div>

      <div className="terminal-section">
        <h2 className="terminal-section-title" data-id="959529-0-2">$ cat mission.txt</h2>
        <p>
          {'>'} Desenvolvedor especializado em criar interfaces futuristas e sistemas robustos.<br />
          {'>'} Focado em performance, segurança e experiência do usuário.<br />
          {'>'} STATUS: Disponível para novos projetos<br />
          {'>'} LOCALIZAÇÃO: [REDACTED]
        </p>
      </div>

      <TerminalNav />
    </div>
  );
};

export default About; 