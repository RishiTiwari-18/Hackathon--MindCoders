import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function VirtualCard({i}: {i:string}) {
  return (
    <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={`/placeholder.svg?height=400&width=600`}
              alt={`Virtual Tour ${i}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">Modern Apartment {i}</h3>
                <p>Downtown, New York</p>
              </div>
            </div>
            <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
              VR Ready
            </div>
          </div>
          <CardContent className="p-4 ">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">$2,500/mo</span>
              <div className="flex text-sm dark:text-gray-400 text-gray-500">
                <span className="mr-2">2 beds</span>
                <span>2 baths</span>
              </div>
            </div>
            <Link href={`/virtual-tours/${i}`}>
              <Button className="w-full bg-blue-600 dark:text-white hover:bg-blue-700">Start Virtual Tour</Button>
            </Link>
          </CardContent>
        </Card>
  )
}
