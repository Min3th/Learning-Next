import {kv} from '@vercel/kv'

interface Dog{
    name:string;
    image:string;
    breed:string;
}

export default async function DogEditPage({
    params,
}:{params:{id:string};}){

    const key = `dogs:${params.id}`;
    const dog = await kv.get<Dog>(key);
    return(
        <div>
            <form>
                <label>Name</label>
                <input name="title" type="text" defaultValue={dog?.name}/>
                <label>Image</label>
                <input name="image" type="text" defaultValue={dog?.image}/>
                <label>Breed</label>
                <input name='title' type='text' defaultValue={dog?.breed}/>
                

            </form>
        </div>
    )
}