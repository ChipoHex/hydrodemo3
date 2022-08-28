/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const memoryOptions = [
  { name: '38', inStock: true },
  { name: '39', inStock: true },
  { name: '40', inStock: true },
  { name: '41', inStock: true },
  { name: '42', inStock: true },
  { name: '43', inStock: true },
  { name: '44', inStock: true },
  { name: '45', inStock: true },


]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Size() {
  const [mem, setMem] = useState(memoryOptions[0])

 
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-md font-semibold family-sans text-gray-900">Size</h2>
        
      </div>

      <RadioGroup value={mem} onChange={setMem} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-regal-red' : '',
                  checked
                    ? 'bg-regal-red border-transparent text-white hover:bg-regal-red'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              disabled={!option.inStock}
            >
              <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
