import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';
import { ContextValue } from '../context/ContextValue';

const catPromiseData = fetch("/categories.json").then(res => res.json());
const LeftSidebar = () => {
    const categories = use(catPromiseData)


    return (
        <div>
                <Suspense categories={categories} fallback={ <h2>Loading</h2>}>
                <div className='flex flex-col gap-4 items-center'>
                <h2>All Categories {categories.length}</h2>
                <div id='category' className='flex flex-col  gap-3'>
                    {
                        categories.map(category => 
                            <NavLink to={`/category/${category.id}`} key={category.id}><span 
                            id={`categoryBtn${category.id}`}
                            category={category}
                            className='hover:btn'
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