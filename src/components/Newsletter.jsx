import React from 'react'

const Newsletter = () => {
  return (



<div class="bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 py-16 text-[#333] font-[sans-serif]">
<div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 p-4">
  <div class="w-full text-center lg:text-left">
    <h2 class="text-5xl font-extrabold mb-6">Stay Updated</h2>
    <p class="text-lg">Subscribe to our newsletter for the latest updates, tips, and exclusive offers.</p>
  </div>
  <div class="w-full">
    <form class="flex items-center">
      <input type="email" placeholder="Enter your email" class="w-full lg:w-[300px] bg-white py-3.5 px-4 text-base border border-[#ddd] border-r-0 rounded-l-lg outline-none focus:border-blue-600" required />
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-3.5 px-6 border border-blue-600 rounded-r-lg outline-none">
        Subscribe
      </button>
    </form>
  </div>
</div>
</div>
  )
}

export default Newsletter