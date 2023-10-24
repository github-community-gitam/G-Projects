import search from '../images/discover/search.svg'
import sort from '../images/discover/sort.svg'

import DiscoverCard from '../components/DiscoverCard'

const Discover = () => {


    return (
        <div className="h-screen w-screen">
            <div className="navbar bg-base-100 w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            <div className='w-full'> 
                <h1 className='text-lg text-base font-normal text-5xl py-5 text-center'>Discover People</h1>
                <div className='flex m-auto text-center w-full'>
                    <div className="m-auto border-2 border-gray-500 rounded-md w-full max-w-[300px] lg:max-w-sm flex align-center">
                    <input type="text" placeholder="Type here" className="focus:outline-none w-full px-4 py-2" />
                    <img src={search} style={{height:"40px", width:"40px"}} alt="search" className='self-center pr-1'/>
                    </div>
                    <img src={sort} style={{height:"40px", width:"40px"}} alt="search" className='self-center px-1'/>
                </div>
            </div>
            <DiscoverCard />
        </div>

    )
}
export default Discover