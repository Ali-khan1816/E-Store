"use client"
import Container from '@/components/home/Container'
import React from 'react'

const error = () => {
  return (
    <Container>
        <h1 className='text-2xl font-bold text-red-400'> Something went wrong when fetching the products...!!!</h1>
    </Container>
  )
}

export default error
