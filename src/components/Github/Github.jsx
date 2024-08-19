import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState();

    // useEffect(() => {
    //     fetch('https://api.github.com/users/TahaInvo2022')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("🚀 ~ useEffect ~ data:", data)
    //             setData(data)
    //         })
    // }, []);
            

  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
          <img src={data.avatar_url} alt="avatar" width={300} className='text-center' />
          {data?.bio}
      </div>
  )
}

export const githubInfo = async () => { 
    const res = await fetch('https://api.github.com/users/TahaInvo2022');
    const data = await res.json();
    return data;
}