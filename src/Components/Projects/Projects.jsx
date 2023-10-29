import React from 'react'
import "./Projects.css"
const Projects = () => {
  return (<div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols  -1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://652714b9c634f2238705857d--fanciful-twilight-37d544.netlify.app/assets/img-cb301173.png" className="h-full w-full object-cover object-center group-hover:opacity-75 logo"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Wash My Ride</h3>
        <button className="text-gray-300 bg-gray-700 hover:bg-white-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">More Details</button>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 logo">
          <img src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Khalek Bdarak Super Market</h3>
        <button className="text-gray-300 bg-gray-700 hover:bg-white-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">More Details</button>
      </a>
      </div>
  </div>
  </div>
  )
}

export default Projects