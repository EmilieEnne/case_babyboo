import {useState , useEffect} from 'react';
import { getRandomBeers } from './ApiService';
import './ProduktCard.css'


interface Beer {
  id: number; 
  name: string; 
  image_url: string;
  tagline: string; 
}

export default function ProduktCard() {
  const [beersList, setBeersList] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      setLoading(true); //sættes til true inden man laver api request
      try { 
        const beers = await getRandomBeers();
        setBeersList(beers);
      } catch (error) {
        console.error('Error fetching beers:', error);
      } finally {
        setLoading(false); //sættes til false efter response er modtaget
      }
    };

    fetchBeers()
  }, []);

  return (
    <div className="produkt">
      
      {loading ? (
        <p>Loader...</p> ) : (
          <div className="api-data">
            {beersList.map((beer, index) => (

            <div key={index} className="produkt-data">
              <div className="produkt-billede">
              <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="text-wrapper">
                <div className="produkt-info">
                  <div className="produkt-navn">
                  {beer.name}
                  </div>
                  <div className="produkt-tagline">
                  {beer.tagline}
                  </div>
                </div>
                <div className="antal-pris">
                  <span>1 STK</span>
                  <span>-12 %</span>
                  <span> 499,99 DKK</span>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}
    </div>
  )
}