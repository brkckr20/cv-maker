import React from 'react';
import { useParams } from 'react-router-dom'

const Template = () => {
    const { id } = useParams();
    return (
        <div className='w-full h-full'>
            <div className='max-w-[1200px] mx-auto w-full pt-20'>
                <div className='flex justify-between '>
                    <div className='w-full border-r border-gray-300'>sol</div>
                    <div className='w-full'>
                        <h1 className='p-2'>Preview</h1>
                        <div className='grid grid-cols-3 p-1 border'>
                            <div className='col-span-1 bg-slate-600 py-4'>
                                <div className='flex justify-center'>
                                    <img className='w-24 h-24 rounded-full' src="https://picsum.photos/id/235/200/300" alt="https://picsum.photos/id/237/200/300" />
                                </div>
                                <div className='p-2'>
                                    <h2 className='text-white border-b mt-8 mb-4 font-semibold'>Contact</h2>
                                    <div className='text-white mt-3'>
                                        <p className='text-base font-semibold'>Phone</p>
                                        <p className='text-xs'>+90 000 000 0000 </p>
                                    </div>
                                    <div className='text-white mt-3'>
                                        <p className='text-base font-semibold'>Email</p>
                                        <p className='text-xs'>lorem@ipsum.com</p>
                                    </div>
                                    <div className='text-white mt-3'>
                                        <p className='text-base font-semibold'>Address</p>
                                        <p className='text-xs'>Test St. No : 123</p>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <h2 className='text-white border-b mt-8 mb-4 font-semibold'>Education</h2>
                                    <div className='text-white mt-3'>
                                        <p>2008</p>
                                        <p className='text-base font-semibold'>Enter Your Degree</p>
                                        <p className='text-xs'>Ultimate College</p>
                                    </div>
                                    <div className='text-white mt-3'>
                                        <p>2008</p>
                                        <p className='text-base font-semibold'>Enter Your Degree</p>
                                        <p className='text-xs'>Ultimate College</p>
                                    </div>
                                    <div className='text-white mt-3'>
                                        <p>2008</p>
                                        <p className='text-base font-semibold'>Enter Your Degree</p>
                                        <p className='text-xs'>Ultimate College</p>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <h2 className='text-white border-b mt-8 mb-4 font-semibold'>Expertise</h2>
                                    <ul>
                                        <li className='text-white'> - UI/UX</li>
                                        <li className='text-white'> - UI/UX</li>
                                        <li className='text-white'> - UI/UX</li>
                                        <li className='text-white'> - UI/UX</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h2 className='text-white border-b mt-8 mb-4 font-semibold'>Language</h2>
                                    <ul>
                                        <li className='text-white'>Turkish</li>
                                        <li className='text-white'>English</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className='p-2'>
                                    <h1 className='text-4xl'><span className='font-semibold'>Your Name</span> Here</h1>
                                    <h2 className='text-lg'>Marketing Manager</h2>
                                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum?</p>
                                </div>
                                <div className='p-2'>
                                    <h1 className='text-lg font-bold border-b-2'>Experience</h1>
                                </div>
                                <div className='p-2'>
                                    <div className='mb-2'>
                                        <p className='font-semibold bg-slate-400 text-white p-1 inline-block'>2019-2022</p>
                                        <p className='text-sm italic'>Company Name Here</p>
                                        <p className='font-bold'>Job Position Here</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repellat consectetur, dicta corrupti molestiae sint eum animi rem mollitia facilis sapiente, recusandae vitae fugit quos sed error. Vero cumque porro asperiores eligendi praesentium earum, placeat aliquam laudantium, fugit at animi.</p>
                                    </div>
                                    <div className=''>
                                        <p className='font-semibold bg-slate-400 text-white p-1 inline-block'>2019-2022</p>
                                        <p className='text-sm italic'>Company Name Here</p>
                                        <p className='font-bold'>Job Position Here</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique natus officiis consequatur laboriosam dignissimos deleniti voluptatem, labore voluptas, est id blanditiis tempora? Reiciendis ut aspernatur sequi, dignissimos ab atque.</p>
                                    </div>
                                    <div className=''>
                                        <p className='font-semibold bg-slate-400 text-white p-1 inline-block'>2019-2022</p>
                                        <p className='text-sm italic'>Company Name Here</p>
                                        <p className='font-bold'>Job Position Here</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique natus officiis consequatur laboriosam dignissimos deleniti voluptatem, labore voluptas, est id blanditiis tempora? Reiciendis ut aspernatur sequi, dignissimos ab atque.</p>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <h1 className='text-lg font-bold border-b-2'>Reference</h1>
                                    <div>
                                        <div>
                                            <h1 className='font-bold text-base'>Name Surname</h1>
                                            <p className='italic'>Job position</p>
                                            <h2><span className='font-semibold'>Phone</span> : phone here</h2>
                                            <h2><span className='font-semibold'>Email</span> : email here</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template