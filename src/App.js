import './App.css';
import marked from 'marked';
import { useState } from 'react';

const App = () => {
    const [text, setText] = useState('');

    return (
        <div className="app">
            <div className="container">
                <h1>{'Editor'}</h1>
                <textarea id="editor" onChange={e => setText(e.target.value)} />
            </div>
            <div className="container">
                <h1>{'Preview'}</h1>
                <div
                    id="preview"
                    dangerouslySetInnerHTML={{
                        __html: marked(text)
                    }}
                />
            </div>
        </div>
    )
}

export default App;
