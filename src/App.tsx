import React from 'react';
import './App.scss';

const links = [
  { name: 'music', link: 'https://soundcloud.com/julesnyc' },
  { name: 'code', link: 'https://github.com/julientregoat' },
  { name: 'ig', link: 'https://instagram.com/jules.nyc' },
  { name: 'linkedin', link: 'https://linkedin.com/in/julientregoat' },
  { name: 'contact', link: 'mailto:jt-inquiry@pm.me' },
];

const App: React.FC = () => {
  return (
    <div className={'container'}>
      <div className={'title-container'}>
        <h1 className={'title'}>JULES</h1>
      </div>

      <div className={'menu'}>
        {links.map((l) => (
          <a target={'_blank'} rel={'noreferrer'} href={l.link}>
            {l.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
