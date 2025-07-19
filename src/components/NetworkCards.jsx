import React from 'react';

function NetworkCards({ name, image, info }) {
  return (
    <div className="bg-[#141412] border border-[#26250F] rounded-lg p-4 mb-4 shadow-lg hover:border-[#ffde59] transition-all duration-300">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 mr-3 overflow-hidden rounded-md flex items-center justify-center bg-white">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=48&width=48"
              e.currentTarget.alt = "Logo placeholder"
            }}
          />
        </div>
        <h3 className="text-lg font-semibold text-[#ffde59]">{name}</h3>
      </div>
      <p className="text-sm text-gray-300">{info}</p>
    </div>
  )
}

export default NetworkCards

