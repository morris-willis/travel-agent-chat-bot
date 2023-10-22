import react, { useEffect, useState} from 'react'
import axios from 'axios'
import { IHotel } from '@/types/Hotel'
import {useRouter} from 'next/router'
import { DisplayBlock } from '@/components/hotels/displayBlock'
export default function ResultsPage() {
    //this page displays the results from the chatbot. it uses the router query to pass the data, although if the bot was looking for more fields, this would perhaps need to be changed to a global state using something like redux or context. 
    const router = useRouter()
    const [hotels, setHotels] = useState<IHotel[]>([])
    const [filteredHotels, setFilteredHotels] = useState<IHotel[]>([])
    const choicesObject = router.query
    //if there are no parameters, this forces uses back to the chatbot to create them
    useEffect(()=> {
        if(!router.query.continent || !router.query.tempRating){
            router.push('/')
        }
    })
    useEffect(()=>{
        axios.get("http://localhost:3000/api/hotels")
        .then((res)=> setHotels(res.data))
      },[])
    useEffect(()=>{
        const filter = hotels.filter(hotel => (hotel.Continent.toLowerCase() === choicesObject?.continent && hotel.TempRating.toLowerCase()===choicesObject.tempRating))
        setFilteredHotels(filter)
    },[hotels]) 
    const handleGoBack = ()=>{
        router.push('/')
    }
    //in cases where the users choices give no results, then the user is informed. otherwise, the data is displayed
    if(filteredHotels.length ==0 ){
        return (
            <>
                <button onClick={handleGoBack}>Back</button>
                <p>No results, please try something different</p>
            </>
        )
    } else {
        return(
            <>
            <button onClick={handleGoBack}>Back</button>
            <DisplayBlock hotels={filteredHotels} />
            </>
        )

    }
}