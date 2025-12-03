import React from 'react';

const Navbar = () => {
    return (
       <div className="main bg-slate-700">
         <nav className='flex justify-between  text-white items-center p-4 container mx-auto'>
            <div className='logo'>
                <span className='font-bold text-2xl'>iTask</span>
            </div>
            <ul className='flex gap-4 p-4 text-center'>
                <navLink className="cursor-pointer">Home </navLink>
                <navLink className="cursor-pointer">Your Task</navLink>
            </ul>
        </nav>
       </div>
    );
};

export default Navbar;