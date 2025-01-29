import { kv } from '@vercel/kv';

interface Dog {
  name: string;
  image: string;
  breed: string;
}

export default async function DogPage() {
  const dogKeys = await kv.keys("dogs:*"); 
  const dogs = await Promise.all(dogKeys.map(async (key) => await kv.get<Dog>(key)));


  const validDogs = dogs.filter((dog): dog is Dog => dog !== null);

  return (
    <div>
      <h1>Dog Information</h1>
      <div>
        {validDogs.map((dog, index) => (
          <div key={index}>
            <p>Name: {dog.name}</p>
            <p>Breed: {dog.breed}</p>
            {dog.image && <img src={dog.image} alt={dog.name} style={{ width: '200px' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
