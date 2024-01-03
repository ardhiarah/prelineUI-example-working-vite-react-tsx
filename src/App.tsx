import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import Navigator from './components/Navigator';

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

function App() {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);

    return <Navigator></Navigator>;
}

function RootComponent() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default RootComponent;
