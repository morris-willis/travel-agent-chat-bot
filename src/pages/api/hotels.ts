import type { NextApiRequest, NextApiResponse } from 'next'
import {hotels} from './data/hotels'
//this fucntion just creates a simple api to return the provided data in a format that is more like production, and takes the data from a json file that i converted the csv into
export default function (req: NextApiRequest, res:NextApiResponse){
    return res.status(200).json(hotels)
}


