import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const Home = () => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_7C3hDKBoVdLsCaIQld5INz5b3RED2ZXW23QQOdkKW2b9lbLCbxR8sfrCnGnK3oQM');
                const data = await res.json();
                setCats(data);

            } catch (error) {
                console.error(error)
            }
        }

        fetchCats();
    }, [])
    return (
        <Layout>
            <div className='flex flex-wrap gap-10 bg-neutral-500'>
                {cats.map((cat) => (
                    <article className='w-80 h-80 flex items-center justify-center m-5 rounded-lg border-4 border-slate-600' key={cat.id}>
                        <img className='w-full h-full object-cover' src={cat.url} />
                    </article>
                ))
                }
            </div>
        </Layout>
    );
}

export default Home;