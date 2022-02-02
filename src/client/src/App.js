import React, { useEffect, useState } from 'react';
// import Login from './components/login';
import Homepage from './components/homepage';

function App() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsUserSignedIn(true);
        }
        else {
            setIsUserSignedIn(false);
        }
    }, []);

    const onLoginSuccessful = () => {
        setIsUserSignedIn(true);
    };

    const onLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        setIsUserSignedIn(false);
    };

    return (
        // (isUserSignedIn && <div>Hey there</div>) ||
        // (<div>user not signed in</div>)
        <Homepage />
        
    );
}

export default App;