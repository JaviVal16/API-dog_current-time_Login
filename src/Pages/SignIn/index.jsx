import { useState } from "react";
import login from "../../services/login/index";


const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await login.login({
                username,
                password
            })
            console.log(user)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <section className='w-full h-screen flex flex-col items-center justify-center bg-gray-200 font-mono'>
            <form onSubmit={handleSubmit}>
                <section className='w-80 h-80 flex flex-col items-center justify-center gap-6 rounded-lg shadow-xl bg-slate-50'>
                    <h1 className='text-lg'>Sign in into your account</h1>
                    <article className='flex flex-col gap-3'>
                        <section className='flex flex-col'>
                            <label >User name</label>
                            <input className='rounded-md bg-blue-100 text-black focus:outline focus:outline-offset-2 focus:outline-blue-300'
                                type="text"
                                required
                                value={username}
                                name='Username'
                                onChange={({ target }) => setUsername(target.value)}
                            >
                            </input>
                        </section>
                        <section className='flex flex-col'>
                            <label>Password</label>
                            <input
                                className='rounded-md bg-blue-100 text-black focus:outline focus:outline-offset-2 focus:outline-blue-300'
                                type='password'
                                required
                                value={password}
                                name='Password'
                                onChange={({ target }) => setPassword(target.value)}
                            >
                            </input>
                        </section>
                    </article>
                    <button
                        className='w-44 font-medium bg-blue-300 h-7 rounded-md hover:bg-blue-400'
                    >Sign in</button>
                </section>
            </form>
        </section>
    );
}

export default SignIn;