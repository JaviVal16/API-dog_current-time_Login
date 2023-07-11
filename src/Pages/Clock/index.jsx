import { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar'


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
            <Navbar />
            <section className='bg-neutral-100 w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
                <span className='text-9xl'>
                    {date.toLocaleTimeString()}
                </span>
            </section>
        </Layout>
    );
}
export default Clock;