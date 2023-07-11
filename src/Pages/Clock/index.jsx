import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <Layout>
            <span>
                {date.toLocaleTimeString()}
            </span>
        </Layout>
    );
}
export default Clock;