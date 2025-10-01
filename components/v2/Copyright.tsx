import React from 'react'

export default function Copyright() {
    return (
        <div className='fixed bottom-5 right-5 text-sm text-white bg-white/10 px-6 py-2 rounded-full backdrop-blur-lg border border-white/20 shadow shadow-white/10 z-[9999]'>
            &copy; {new Date().getFullYear()} UPT Komputer
        </div>
    )
}
