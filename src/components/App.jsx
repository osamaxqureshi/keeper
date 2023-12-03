import React from'react';
import Note from './Note';
import Header from './Header';
import Footer from './Footer';
import notes from "../notes";


const App = () => {
    return (
        <div>
 <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
        </div>
    );
}

export default App;