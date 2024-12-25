import React from 'react'
import Image from 'next/image'

export default function Fifth() {
  return (
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Freshly Sourced Ingredients
        </h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">At PlatterFood, we prioritize the freshness of our ingredients. Every dish is crafted using locally sourced produce and the finest quality meats and spices, ensuring that every bite bursts with flavor. Freshness is key to our philosophy, and we make sure that only the best ingredients make it onto your plate.
      </p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image src="/c.jpg" alt="vagann" width={720} height={400}/> 
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Flavorful Combinations
          </h2>
          <p class="leading-relaxed text-base">Our platters feature a delightful mix of flavors, carefully paired to create a balanced, satisfying meal. From savory to sweet, spicy to mild, each platter is designed to offer a variety of tastes that cater to different preferences. We believe in the power of combination to elevate each dish.
          </p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image src="/d.jpg" alt="vagann" width={720} height={400}/> 
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Creative Presentation
          </h2>
          <p class="leading-relaxed text-base">At PlatterFood, we not only focus on taste but also on the visual appeal of our platters. Each dish is presented with care, making it a feast for the eyes as much as for the palate. Whether it's a vibrant salad or an artfully arranged platter, we ensure that every meal looks as good as it tastes.
          </p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image src="/e.jpg" alt="vagann" width={720} height={400}/> 
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Variety for Every Diet
          </h2>
          <p class="leading-relaxed text-base">We understand that everyone has different dietary needs. That's why we offer a variety of options, including vegetarian, vegan, gluten-free, and low-carb choices. Whether you're looking for plant-based meals or indulgent comfort food, we ensure theres something for everyone to enjoy.
          </p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
        <Image src="/a.jpg" alt="vagann" width={720} height={400}/> 
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Perfect for Sharing
          </h2>
          <p class="leading-relaxed text-base">Our platters are made with sharing in mind. Ideal for family dinners, social gatherings, or casual get-togethers, they offer a variety of flavors and textures that everyone can enjoy. Share a platter with friends, and create lasting memories over great food.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
