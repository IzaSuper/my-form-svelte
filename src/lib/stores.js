import {readable} from 'svelte/store'
import {writable} from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date())
  }, 1000)
  return function stop() {
    clearInterval(interval)
  }
})

export const array = writable()
export const sum = writable()

export const prices = readable([
  {
    "name": "Jumeirah",
    "cost": {
      "adults": 200,
      "children": 100
    },
    "message": "adult: 200$/night. child: 100$/night"
  },
  {
    "name": "TRYP",
    "cost": {
      "adults": 150,
      "children": 70
    },
    "message": "adult: 150$/night. child: 70$/night"
  }
])
export const hotelMap = writable( {

  "Jumeirah": "hotel/ae/sky-villa-penthouse-five-jvc.en-gb.html",
  "TRYP": "hotel/ae/tryp-by-wyndham-dubai.en-gb.html"
})

export const selectedHotel = writable("")
export const adultPrice = writable(null)
export const childrenPrice = writable(null)
export const total = writable(0)

