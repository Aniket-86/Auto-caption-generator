import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
     const user = useSelector((state)=>state?.user?.data?.user)
    console.log(user)
   const renderposts = (
  <div className="flex flex-wrap gap-20">
    {[...(user?.posts ?? [])]  // safe fallback
      .reverse()
      .map((post) => (
        <div
          key={post._id}
          className="border-2 w-80 h-100 rounded-xl overflow-auto"
        >
          <img
            className="w-full h-50 object-cover rounded-xl"
            src={post.image}
            alt=""
          />

          <h1 className="mt-1 px-5 text-xl font-semibold">
            Your Shining Caption :-
          </h1>

          <div className="relative">
            <button className="absolute text-xl text-gray-500 right-5 -top-5 cursor-pointer">
            </button>

            <p className="mt-2 px-4">{post.caption}</p>
          </div>
        </div>
      ))}
  </div>
);
 
  return (
  <>
    {user ? (
      <>
        <div>These are your recent images</div>
        <h1>{user.username}</h1>
        <h1 className='bg-gray-100'>{renderposts}</h1>
      </>
    ) : null}
  </>
);

}

export default History