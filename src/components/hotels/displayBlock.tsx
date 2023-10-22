import { HotelCard } from "./hotelCard";
import React from 'react'
import { IHotel } from "@/types/Hotel";
import {DisplayBoxStyles} from '../../styles/components/displayBox'

export const DisplayBlock = (hotels: any) => {
// this simple component renders and styles the cards once the hotels data has been filtered using the data from the chatbot
return(
    <DisplayBoxStyles>
            {hotels.hotels[0] && hotels.hotels.map((hotel:IHotel) => (
                <HotelCard hotel={hotel} key={hotel.HolidayReference}/>
            )) }
    </DisplayBoxStyles>
)
}