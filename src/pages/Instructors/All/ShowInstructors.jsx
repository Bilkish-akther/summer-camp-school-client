import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../hooks/useAxiosFetch';

const ShowInstructors = () => {
    const axiosInstance = useAxiosFetch();
    const [instructors, setInstructors] = useState([]);
    console.log("🚀 ~ file: ShowInstructors.jsx:7 ~ ShowInstructors ~ instructors:", instructors)
    useEffect(() => {
        axiosInstance.get('/users')
            .then(res => setInstructors(res.data))
    }, [])
    return (
        <div className='my-16 w-[80%] mx-auto'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-28">
                {
                    instructors.map(instructor =><div key={instructor._id} className="max-w-xs">
                            <div className="bg-white border hover:-translate-y-1 hover:border-secondary cursor-pointer duration-200 rounded-lg py-3">
                                <div className="photo-wrapper p-2">
                                    <img className="w-32 h-32 rounded-full mx-auto" src={instructor.photoUrl} alt="John Doe" />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{instructor.name}</h3>
                                    <div className="text-center text-gray-400 text-xs font-semibold">
                                        <p>Instructor</p>
                                    </div>
                                    <table className="text-xs my-3">
                                        <tbody><tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td className="px-2 py-2">{instructor.address}</td>
                                        </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td className={`px-2 py-2 ${instructor.phone || 'text-red-400'}`}>{instructor.phone ? instructor.phone : 'Not Provided'}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td className="px-2 py-2">{instructor.email}</td>
                                            </tr>
                                        </tbody></table>

                                    <div className="text-center my-3">
                                        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ShowInstructors;