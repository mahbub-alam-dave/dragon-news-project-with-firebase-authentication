import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';
import { ContextValue } from '../context/ContextValue';

const catPromiseData = fetch("/categories.json").then(res => res.json());
const LeftSidebar = () => {
    const categories = use(catPromiseData)


    return (
        <div className=''>
                <Suspense categories={categories} fallback={ <h2>Loading</h2>}>
                <div className='flex flex-col gap-4 w-full'>
                <h2 className='text-[color:var(--color-primary)] text-lg md:text-xl font-semibold leading-[30px]'>All Categories</h2>
                <div id='category' className='flex flex-col w-full  gap-3'>
                    {
                        categories.map(category => 
                            <NavLink to={`/category/${category.id}`} key={category.id} className={'hover:bg-gray-100 hover:py-2 w-full text-[color:var(--color-accent-two)] text-lg md:text-xl font-medium leading-[30px]'}><span 
                            id={`categoryBtn${category.id}`}
                            category={category}
                            className='pl-12'
                           >{category.name}</span></NavLink>
                        )
                    }
                </div>
                </div>
                </Suspense>
        </div>
    );
};

export default LeftSidebar;