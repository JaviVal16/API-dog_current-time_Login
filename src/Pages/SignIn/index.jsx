
const SignIn = ({ login }) => {
    return (
        <section className='w-full h-screen flex flex-col items-center justify-center bg-gray-200 font-mono'>
            <section className='w-80 h-80 flex flex-col items-center justify-center gap-6 rounded-lg shadow-xl bg-slate-50'>
                <h1 className='text-lg'>Sign in into your account</h1>
                <article className='flex flex-col gap-3'>
                    <section className='flex flex-col'>
                        <label >User name</label>
                        <input className='rounded-md bg-blue-100 text-black focus:outline focus:outline-offset-2 focus:outline-blue-300' type="text" required></input>
                    </section>
                    <section className='flex flex-col'>
                        <label>Password</label>
                        <input className='rounded-md bg-blue-100 text-black focus:outline focus:outline-offset-2 focus:outline-blue-300' type='password'></input>
                    </section>
                </article>
                <button
                    type="submit"
                    className='w-44 font-medium bg-blue-300 h-7 rounded-md hover:bg-blue-400'
                >Sign in</button>
            </section>
        </section>
    );
}

export default SignIn;