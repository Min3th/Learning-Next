import {kv} from '@vercel/kv'
import { revalidatePath } from 'next/cache';

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

    async function upDoggy(formData:FormData){
        "use server";
        await kv.set(key, {
            name: formData.get("title"),
            image: formData.get("image"),
            breed: formData.get("breed"),

        });
        revalidatePath(`/dogs/${params.id}/edit`)
    }
    return(
        <div>
            <form>
                <label>Name</label>
                <input name="title" type="text" defaultValue={dog?.name}/>
                <label>Image</label>
                <input name="image" type="text" defaultValue={dog?.image}/>
                <label>Breed</label>
                <input name='title' type='text' defaultValue={dog?.breed}/>
                <button type='submit'>Save</button>

            </form>
        </div>
    )
}