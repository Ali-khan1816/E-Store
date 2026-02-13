"use client"
import Container from '@/components/home/Container'
import React from 'react'

const error = () => {
  return (
    <Container className='col-span-4'>
        <h1 className='text-center font-bold text-red-600 my-10'>Something went Wrong!!!</h1>
    </Container>

  )
}

export default error
