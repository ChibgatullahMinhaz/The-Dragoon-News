import React, { useContext } from 'react'
import { CategoryContext } from '../../Store/Context/Context'
import { NavLink } from 'react-router';

export const Categories = () => {
  const {categories} = useContext(CategoryContext);
  
  return (
    <div>
      <h className="text-primary text-xl font-semibold">All Category</h>
      <div className=" flex justify-between items-center flex-wrap md:grid md:grid-cols-1 mt-5 gap-3 shadow-sm rounded-sm p-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
