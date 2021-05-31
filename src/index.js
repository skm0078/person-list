import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className='person'>
      <img src={url} alt='Person' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className='person-list'>
      <Person img='34' name='John' job='Developer' />
      <Person img='36' name='Bob' job='Designer'>
        <p>lorem20</p>
      </Person>
      <Person img='22' name='Brad' job='Figma' />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById('root'));
