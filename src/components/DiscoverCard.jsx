import left_1 from '../images/left_1.png'

const DiscoverCard = () => {
    const role = "Frotend Developer"
    const batch = "2020 - 2024"
    return (
        <div className="container max-w-xs max-h-sm m-auto my-5 border ring-1 rounded-xl">
            <img src={left_1} className="h-3/5 w-full" />
            <div className='h-full px-6 text-left'>
                <h1 className='font-bold text-2xl'>Jon Snow</h1>
                <p>{role}</p>
                <p>{batch}</p>
            </div>
            <button className='w-full py-2 mt-4 text-white bg-violet-700'>View full Profile</button>
        </div>
    )
}

export default DiscoverCard