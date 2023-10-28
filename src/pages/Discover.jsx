import React from 'react';
import search from '../images/discover/search.svg';
import sort from '../images/discover/sort.svg';
import DiscoverCard from '../components/DiscoverCard';
import left_1 from '../images/left_1.png';
import GITHUB from '../images/GITHUB.png';
import github_small from '../images/github_small.png';
import discover_bg from '../images/discover/discover_bg.jpeg'
import profile from '../images/discover/profile.jpeg'

const PeopleList = [
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
    {
        profile: left_1,
        name: 'Premsai Varma',
        role: 'Fullstack Developer',
        batch: '2021-2025'
    },
];

const Discover = () => {
    return (
        <div className="h-screen w-screen bg-gradient-to-r from-violet-400 via-pink-300 to-violet-200" >
            <div className="navbar w-full px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='my-auto'><a>Home</a></li>
                            <li className='my-auto'><a>Discover</a></li>
                            <li className='my-auto'><a>Trending</a></li>
                            <li className='my-auto'><a>About Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl outline-none lg:hidden">
                        <img src={github_small} style={{ height: "45px", width: "45px" }} alt="github-icon" className='focus:outline-none hover:outline-none' />
                    </a>
                </div>
                <div className=" bg-[#E3DBFF] navbar-center hidden lg:flex px-8 xl:px-16 rounded-xl w-3/5">
                    <ul className="menu menu-horizontal px-1 w-full flex justify-evenly font-bold text-xl">
                        <li className='my-auto'><a>Home</a></li>
                        <li className='my-auto'><a>Discover</a></li>
                        <img src={GITHUB} style={{ height: "70px", width: "70px" }} alt="github-icon" className='' />
                        <li className='my-auto'><a>Trending</a></li>
                        <li className='my-auto'><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end pr-5 self-center my-auto">
                    <a className="rounded-full pr-4"><img src={profile} className="m-auto w-[60px] h-[60px] rounded-full" /> </a>
                </div>
            </div>
<<<<<<< HEAD
            <div className='w-full md:flex md: align-center m-auto px-16'> 
                <h1 className='font-normal my-3 text-6xl py-5 text-center md:text-left md:w-4/6 self-center'>Discover People</h1>
                <div className='flex m-auto md:w-2/6 text-center w-full max-w-xs space-x-3 ml-auto'>
                    <div className="m-auto border-2 border-gray-500 rounded-md w-full max-w-[300px] lg:max-w-sm flex align-center">
                    <input type="text" placeholder="Type here" className="focus:outline-none w-full px-4 py-2" />
                    <img src={search} style={{height:"40px", width:"40px"}} alt="search" className='self-center pr-1'/>
=======
            <div className='w-full md:flex m-auto px-16'>
                <h1 className='font-normal my-3 text-6xl py-5 text-center md:text-left md:w-4/6'>Discover People</h1>
                <div className='flex m-auto md:w-2/6 text-center w-full max-w-md space-x-3 ml-auto'>
                    <div className="py-1 px-2 m-auto border-0 rounded-full w-full max-w-[320px] lg:max-w-md lg:w-[450px] flex align-center bg-[#E3DBFF]">
                        <input type="text" placeholder="Type here" className="border-0 rounded-full bg-[#E3DBFF] focus:outline-none w-full px-4 py-2" />
                        <img src={search} style={{ height: "40px", width: "40px" }} alt="search" className='self-center pr-1' />
>>>>>>> e54c27f (completed the discover page)
                    </div>
                    <img src={sort} style={{ height: "40px", width: "40px" }} alt="search" className='self-center px-1' />
                </div>
            </div>
            <div className='bg-gradient-to-r from-violet-400 via-pink-300 to-violet-200 w-full px-8 gap-3 smd:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {PeopleList.map((people, index) => <DiscoverCard key={index} details={people} />)}
            </div>
        </div>
    );
};

export default Discover;
