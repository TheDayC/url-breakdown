import React, { useCallback, useState} from 'react';

import Error from './components/Error';
import Breakdown from './components/Breakdown';
import './App.css';

const App: React.FC = () => {
    const [savedURL, setURL] = useState<URL | null>(null);
    console.log("savedURL", savedURL)
    const [error, setError] = useState<string | null>(null);

    const onInput = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        console.log("value", value)
        try {
            const attemptAtUrl = new URL(value);
            setURL(attemptAtUrl);
            setError(null);
        } catch (err) {
            setError('Not a valid URL')
        }

        if (value === '') {
            setError(null);
        }
    }, []);

    return (
        <div className="App">
            <div className="wrapper">
                <p>Please enter a URL...</p>
                <input name="url" type="text" onKeyUp={onInput} />
                {savedURL && (
                    <Breakdown 
                        hash={savedURL.hash || null} 
                        host={savedURL.host || null} 
                        hostname={savedURL.hostname || null} 
                        href={savedURL.href || null} 
                        origin={savedURL.origin || null} 
                        pathname={savedURL.pathname || null} 
                        port={savedURL.port || null} 
                        protocol={savedURL.protocol || null} 
                        params={savedURL.search} 
                    />
                )}
                {error && <Error error={error} />}
            </div>
        </div>
    );
}

export default App;
