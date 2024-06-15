import React, { useEffect, useRef, useState } from 'react'

const Chatbot = (onClose) => {
    const [requests, setRequests] = useState([])
    const [responses, setResponses] = useState([])
    const [prompt, setPrompt] = useState('')
    const messagesEndRef = useRef(null)
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [responses, requests])

    const chatBox = () => {
        const chats = []
        for (let i = 0; i < requests.length; i++) {
            chats.push(
                <div className='flex justify-end m-2'>
                    <div className='w-[85%] rounded-lg bg-blue-500 text-white p-2'>{requests[i]}</div>
                </div>
            )
            if (i < responses.length) {
                chats.push(<div className='w-[85%]'>{responses[i]}</div>)
            }
        }
        return chats.map((chat) => {
            return chat
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPrompt('')
        setRequests([...requests, prompt])
        const formData = new FormData();
        formData.append('msg', prompt);
        console.log('prompt', prompt)
        await fetch('http://localhost:5000/get', {
            method: 'POST',
            body: formData
        })
            .then(data => data.text())
            .then(data => {
                // console.log(data, responses)
                setResponses([...responses, data]);
            })
            .catch(err => console.log(err));

    }
    return (
        <div className='fixed z-50 bottom-20 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col'>
            <div className='flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg'>
                <h3 className='text-lg'>Chatbot</h3>
                <button onClick={onClose} className='text-white hover:text-gray-200'>
                    X
                </button>
            </div>
            <div className='flex-1 p-4 overflow-y-auto'>
                <div className='w-[85%]'>Xin chào! Tôi có thể giúp gì cho bạn</div>
                {chatBox()}
                <div ref={messagesEndRef} />
            </div>
            <form className='flex justify-between pb-5 items-center  mx-5' onSubmit={handleSubmit}>
                <input
                    className='outline-none  border border-gray-600 rounded-full w-[90%] p-2'
                    type='text'
                    name=''
                    id=''
                    value={prompt}
                    onChange={(e) => {
                        setPrompt(e.target.value)
                    }}
                />
                <button>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                        />
                    </svg>
                </button>
            </form>
        </div>
    )
}
export default Chatbot;