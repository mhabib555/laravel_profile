import { Link, Head } from '@inertiajs/react';

export default function Profile(props) {
    console.log(props);
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="flex items-center h-screen w-full justify-center">

                    <div className="max-w-xs">
                        <div className="bg-white shadow-xl rounded-lg py-3">
                            <div className="photo-wrapper p-2">
                                {/* <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"> */}
                            </div>
                            <div className="p-2">
                                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{props.user.name}</h3>
                                <div className="text-center text-gray-400 text-xs font-semibold">
                                    <p>Web Developer</p>
                                </div>
                                <table className="text-xs my-3">
                                    <tbody><tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                        <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                    </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                            <td className="px-2 py-2">{props.user.email}</td>
                                        </tr>
                                    </tbody></table>

                                <div className="text-center my-3">
                                    <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="/login">Update Profile</a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
