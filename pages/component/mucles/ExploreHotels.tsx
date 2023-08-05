import React from 'react'
import SelectForm from '../atoms/SelectForm'
import DateInputComp from '../atoms/DateInput'
import DropDown from '../atoms/DropDown'
import Button from '../atoms/Button'
import Link from 'next/link'

const   ExploreHotels = () => {
  return (
    <form
    // onSubmit={form.onSubmit((values) => {
    //   //console.log(values)
    // })}
  >
    <div className="w-[100%]  ">
      <div className="p-3 shadow-2xl rounded-xl">
        <SelectForm />
        <div className="grid grid-cols-2 mt-4">
          <div className="col-span-2">
            <DateInputComp placeholder="Check-in - Check-out " />
          </div>
        </div>
        <div className="mt-4">
          <DropDown />
        </div>
        <Button variant="primary" className="p-2 px-4 w-[100%] mt-5 hover:bg-white hover:text-bg_banfsgy hover:border-bg_banfsgy hover:border-opacity-100 hover:border  ">
          <Link href="/search">Explore Hotels</Link>
        </Button>
      </div>
    </div>
  </form>
  )
}
export default ExploreHotels