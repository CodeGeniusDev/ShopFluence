"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Container from '@/components/Container'


const page = () => {
  return (
    <>
    <Container>
    <main className='bg-main'>
    <Button variant="default" className='bg-[var(--main)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md p-3 sm:text-sm font-bold transition-colors cursor-pointer'>Subscribe</Button>
    <Button variant="destructive">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="link">Button</Button>
    <Card>lorem</Card>
    </main>
    </Container>
    </>
  )
}

export default page