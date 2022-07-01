import React from 'react';

const City = ({ city }) => {
    console.log(city);
    return (
        <div className='flex flex-col items-center h-screen bg-gray-200' >
            <div className='w-[350px] rounded-md shadow mx-auto'>
                <h1 className='text-5xl font-bold'>{city.main.temp}</h1>
                <h1 className='text-3xl font-semibold'>{city.name}</h1>
                <h1 className='text-2xl'>{city.weather[0].description}</h1>
            </div>
        </div>
    )
}

export default City





