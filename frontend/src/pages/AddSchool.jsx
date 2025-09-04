import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddSchool = () => {
  const navigate = useNavigate()
  return (
     <div className="min-h-screen bg-zinc-800 flex items-center justify-center p-6">
      <div className="w-full relative max-w-2xl rounded-2xl bg-zinc-900 p-8 shadow-xl border border-zinc-700">
        {/* Header */}
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
          Add School
        </h2>

        <small onClick={()=>navigate('/home')} className='text-sm text-emerald-400 absolute top-5 right-10 border rounded-xl border-zinc-600 py-1 px-4'>close</small>

        {/* Form */}
        <form className="space-y-5">
          {/* School Name */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              School Name
            </label>
            <input
              type="text"
              placeholder="Enter school name"
              className="mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              City
            </label>
            <input
              type="text"
              placeholder="Enter city"
              className="mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              State
            </label>
            <input
              type="text"
              placeholder="Enter state"
              className="mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              Contact Number
            </label>
            <input
              type="number"
              placeholder="Enter contact number"
              className="mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-zinc-200">
              School Image
            </label>
            <input
              type="file"
              className="mt-2 block w-full cursor-pointer rounded-lg border border-zinc-600 bg-zinc-800 text-sm text-zinc-100 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-500 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-emerald-400"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-emerald-500 px-6 py-2 font-semibold text-white hover:bg-emerald-400 ml-auto"
            >
              Save School
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSchool