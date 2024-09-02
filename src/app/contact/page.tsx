import { IconBrandFacebook, IconBrandX } from '@tabler/icons-react'
import React from 'react'

export default function Contactpage() {
  return (
    <div className='text-center my-4'>
        <p className='fw-bold fs-4'>Contact page</p>
        <p>
            <strong><IconBrandFacebook/>Facebook:</strong>
            TOP10IMDB
        </p>
        <p>
            <strong><IconBrandX/>Twitter:</strong>
            @TOP10IMDB
        </p>
    </div>
  )
}
