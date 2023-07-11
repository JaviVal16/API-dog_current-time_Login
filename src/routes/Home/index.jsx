import { useEffect, useState } from "react";

const Home = () => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const res = await fetch('https://api.thedogapi.com/v1/images/search?limit=10&breed_ids&api_key=live_7C3hDKBoVdLsCaIQld5INz5b3RED2ZXW23QQOdkKW2b9lbLCbxR8sfrCnGnK3oQM');
                const data = await res.json();
                setCats(data);
                console.log(data);

            } catch (error) {
                console.error(error)
            }
        }

        fetchCats();
    }, [])
    return (
        <div className='flex flex-wrap gap-10'>
            {cats.map((cat) => (

                <article className='w-80 h-80 flex items-center justify-center m-10' key={cat.id}>
                    <img className='w-full h-full object-cover' src={cat.url} />
                </article>
            ))
            }
        </div>
    );
}

export default Home;