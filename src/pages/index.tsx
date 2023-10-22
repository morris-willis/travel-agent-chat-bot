import React, {useEffect, useState} from 'react'
import { DisplayBlock } from '@/components/hotels/displayBlock'
import { Chatbox } from '@/components/chat/chatbox'
import axios from 'axios'
import { IChoicesObject } from '@/types/Message'
export default function Home() {
  return (
    <>
      <Chatbox />
    </>
  )
}

