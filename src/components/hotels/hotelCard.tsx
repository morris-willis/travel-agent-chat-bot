import React from "react";
import {Card} from '../../styles/components/card'
export const HotelCard = (hotel:any) => {
    //this component is used to style and disply individual hotels details
    return (
        <Card>
            <p>{hotel.hotel.HotelName}</p>
            <p>{hotel.hotel.City}, {hotel.hotel.Country}</p>
            <p>{hotel.hotel.StarRating} stars</p>
            <p>${hotel.hotel.PricePerNight} per night</p>
        </Card>
    )
}