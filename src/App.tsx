import './App.css'
import { Clock } from './components'
import React from 'react'

function App(): JSX.Element {
	const [reverse, setReverse] = React.useState<boolean>(false)
	const [isPaused, setIsPaused] = React.useState<boolean>(false)
	const [tickSpeed, setTickSpeed] = React.useState<number>(1000)

	return (
		<div className="flex h-screen w-screen justify-center items-center gap-10 flex-wrap">
			<div className="flex flex-col items-center gap-5 ">
				{/* <span>Current Time</span> */}
				<Clock
					customerBorder="border-green-500"
					hourHand={<div className="bg-green-200 w-2 h-3/6 rounded-lg" />}
					minuteHand={<div className="bg-green-200 w-2 h-4/6 rounded-lg" />}
					secondHand={<div className="bg-green-200 w-1 h-4/6 rounded-lg" />}
					customCenter={<div className="rounded-full w-4 h-4 bg-green-300 border-2 border-white" />}
					background={'bg-gray-500'}
					// customScreen={<div className="bg-[url('../public/clock.png')] rounded-full w-full h-full bg-center bg-cover" />}
				/>
			</div>

			{/* <div className="flex flex-col items-center gap-5">
				<span>Custom Time</span>
				<Clock 
					reverse={reverse} 
					isPaused={isPaused} 
					tickSpeed={tickSpeed} 
					customTime={{ hours: 4, minutes: 15, seconds: 30 }} 
				/>

				<div>
					<span>Set Tick Speed</span>
					<input
						type="number"
						value={tickSpeed}
						onChange={(e) => setTickSpeed(Number(e.target.value))}
					/>
				</div>
				<div>
					<span>Pause</span>
					<input
						type="checkbox"
						checked={isPaused}
						onChange={(e) => setIsPaused(e.target.checked)}
					/>
				</div>
				<div>
					<span>Reverse</span>
					<input
						type="checkbox"
						checked={reverse}
						onChange={(e) => setReverse(e.target.checked)}
					/>
				</div>
			</div> */}

<Clock
  customerBorder="border-yellow-500"
  hourHand={<div className="bg-yellow-300 w-2 h-3/6 rounded-lg shadow-lg" />}
  minuteHand={<div className="bg-yellow-400 w-2 h-4/6 rounded-lg shadow-md" />}
  secondHand={<div className="bg-red-500 w-1 h-4/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-yellow-200 border-2 border-black" />}
  background={'bg-yellow-50'}
/>

<Clock
  customerBorder="border-gray-800"
  hourHand={<div className="bg-black w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-black w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-gray-700 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-black" />}
  background={'bg-white'}
/>

<Clock
  customerBorder="border-pink-500"
  hourHand={<div className="bg-pink-500 w-2 h-3/6 neon" />}
  minuteHand={<div className="bg-blue-500 w-2 h-4/6 neon" />}
  secondHand={<div className="bg-green-500 w-1 h-5/6 neon" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-purple-600 border-2 border-black neon" />}
  background={'bg-black'}
/>

<Clock
  customerBorder="border-gold-500"
  hourHand={<div className="bg-gold-300 w-2 h-3/6 rounded-lg shadow-lg" />}
  minuteHand={<div className="bg-gold-400 w-2 h-4/6 rounded-lg shadow-lg" />}
  secondHand={<div className="bg-silver-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-gold-500 border-2 border-silver-300" />}
  background={'bg-white'}
/>

<Clock
  customerBorder="border-blue-600"
  hourHand={<div className="bg-blue-400 w-1 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-blue-300 w-1 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-blue-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-blue-500 border-2 border-silver-200" />}
  background={'bg-black'}
/>

<Clock
  customerBorder="border-green-600"
  hourHand={<div className="bg-green-500 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-green-400 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-green-300 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-green-700 border-2 border-white" />}
  background={'bg-emerald-50'}
/>

<Clock
  customerBorder="border-brown-600"
  hourHand={<div className="bg-brown-500 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-brown-400 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-red-700 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-brown-600 border-2 border-beige" />}
  background={'bg-beige'}
/>

<Clock
  customerBorder="border-black"
  hourHand={<div className="bg-gray-900 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-gray-800 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-red-900 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-black border-2 border-red-600" />}
  background={'bg-gray-700'}
/>

<Clock
  customerBorder="border-silver-500"
  hourHand={<div className="bg-silver-400 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-silver-300 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-chrome-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-silver-500 border-2 border-chrome" />}
  background={'bg-black'}
/>

<Clock
  customerBorder="border-silver-500"
  hourHand={<div className="bg-silver-400 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-silver-300 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-chrome-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-silver-500 border-2 border-chrome" />}
  background={'bg-black'}
/>

<Clock
  customerBorder="border-gray-800"
  hourHand={<div className="bg-white w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-gray-300 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-gray-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-gray-800 border-2 border-white" />}
  background={'bg-white'}
/>







<Clock
  customerBorder="border-gradient-to-r from-orange-400 to-pink-500"
  hourHand={<div className="bg-orange-500 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-pink-500 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-pink-700 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-orange-500 border-2 border-white" />}
  background={'bg-gradient-to-r from-pink-200 to-orange-100'}
/>

<Clock
  customerBorder="border-gradient-to-r from-teal-400 to-cyan-500"
  hourHand={<div className="bg-teal-600 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-cyan-500 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-cyan-700 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-teal-500 border-2 border-white" />}
  background={'bg-gradient-to-b from-cyan-100 to-teal-100'}
/>

<Clock
  customerBorder="border-blue-800"
  hourHand={<div className="bg-blue-900 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-blue-700 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-blue-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-blue-900 border-2 border-gray-200" />}
  background={'bg-blue-100'}
/>

<Clock
  customerBorder="border-green-600"
  hourHand={<div className="bg-green-700 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-green-500 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-green-400 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-green-600 border-2 border-white" />}
  background={'bg-gradient-to-b from-green-200 to-green-100'}
/>

<Clock
  customerBorder="border-purple-700"
  hourHand={<div className="bg-purple-800 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-purple-600 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-purple-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-purple-700 border-2 border-gray-100" />}
  background={'bg-purple-100'}
/>

<Clock
  customerBorder="border-gradient-to-b from-blue-400 to-teal-500"
  hourHand={<div className="bg-blue-500 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-teal-500 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-teal-700 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-teal-500 border-2 border-white" />}
  background={'bg-gradient-to-t from-teal-100 to-blue-100'}
/>


<Clock
  customerBorder="border-pink-600"
  hourHand={<div className="bg-pink-600 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-pink-400 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-pink-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-pink-600 border-2 border-yellow-300" />}
  background={'bg-pink-100'}
/>


<Clock
  customerBorder="border-gray-400"
  hourHand={<div className="bg-gray-500 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-gray-300 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-gray-400 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-gray-500 border-2 border-white" />}
  background={'bg-gray-100'}
/>

<Clock
  customerBorder="border-gradient-to-r from-yellow-400 to-orange-500"
  hourHand={<div className="bg-yellow-600 w-2 h-3/6 rounded-lg" />}
  minuteHand={<div className="bg-orange-500 w-2 h-4/6 rounded-lg" />}
  secondHand={<div className="bg-yellow-500 w-1 h-5/6 rounded-lg" />}
  customCenter={<div className="rounded-full w-4 h-4 bg-orange-500 border-2 border-white" />}
  background={'bg-gradient-to-r from-orange-100 to-yellow-100'}
/>



		</div>
	);
}

export default App