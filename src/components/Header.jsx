import React from 'react'
import GetStarted from './Buttons/GetStarted'

const Header = () => {
    return (
        <div className='bg-green-600 fixed left-0 right-0 py-3'>
            <div className='max-w-[1200px] mx-auto w-full'>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/#" className='text-3xl font-bold text-white'>FCM</a>
                    </div>
                    <div>
                        <ul className='flex gap-4 items-center'>
                            <li className='text-white font-semibold'>
                                <a href="">Templates</a>
                            </li>
                            <li>
                                <GetStarted />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header