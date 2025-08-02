"use client"
import { API_KEY, TRAINING_DATA } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsStars } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import ChatSkeleton from "./skeleton";


interface Message {
  user: boolean;
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)


  useEffect(() => {
    const chatBox = document.getElementById("chats-box");
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <>
      <FloatingChatBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      <FloatingWhatsAppBtn />
      <div
        className={`fixed bottom-[calc(3rem+1.5rem)] right-0 mr-4 bg-white px-4 pt-6 pb-2 rounded-lg border border-[#e5e7eb] w-[340px] h-[400px] flex flex-col transition-all duration-300 ease-in-out z-40 shadow-lg ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        style={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" }}
      >

        <Header setMesssages={setMessages} />

        <div className="flex-1 overflow-auto pr-2" id="chats-box">
          {
            messages.map((message, index) => {
              return (
                message.user ? <UserMessage key={index} msg={message.text} /> : <AIMessage key={index} msg={message.text} />
              )
            })

          }
          {
            isLoading && <ChatSkeleton />
          }
        </div>

        <ChatInput messages={messages} setMessages={setMessages} setIsLoading={setIsLoading} />
      </div>
    </>
  );
}

interface HeaderProps {
  setMesssages: React.Dispatch<React.SetStateAction<{ user: boolean; text: string }[]>>
}

function Header( { setMesssages }: HeaderProps) {
  return (
    <div className="flex flex-col space-y-1.5 pb-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg tracking-tight text-black">Get to know me</h2>
        <small className="text-[#6b7280] cursor-pointer" onClick={() => setMesssages([])}>Start over</small>
      </div>
      <p className="text-xs text-[#6b7280] leading-3">
        Good to see you!
      </p>
    </div>
  )
}

interface UserMessageProps {
  msg: string;
}

function UserMessage({ msg }: UserMessageProps) {
  return (
    <div className="flex gap-3 my-4 text-gray-600 text-sm">
      <span className="flex justify-center items-center shrink-0 rounded-full w-8 h-8 overflow-hidden">
        <div className="rounded-full bg-gray-100 border p-1">
          <FaRegUser className="h-4 w-4 m-1" />
        </div>
      </span>
      <p className="leading-relaxed">
        <span className="block font-bold text-gray-700">You </span>{msg}
      </p>
    </div>
  )
}


interface AIMessageProps {
  msg: string;
}

function AIMessage({ msg }: AIMessageProps) {
  return (
    <div className="flex gap-3 my-4 text-gray-600 text-sm">
      <span className="flex justify-center items-center shrink-0 rounded-full w-8 h-8 overflow-hidden">
        <div className="rounded-full bg-gray-100 border p-1">
          <BsStars className="h-4 w-4 m-1" />
        </div>
      </span>
      <p className="leading-relaxed">
        <span className="block font-bold text-gray-700">Hamza </span>
        {msg}
      </p>
    </div>
  )
}

interface ChatInputProps {
  messages: { user: boolean; text: string }[];
  setMessages: React.Dispatch<React.SetStateAction<{ user: boolean; text: string }[]>>;
  setIsLoading: (loading: boolean) => void
}

function ChatInput({ messages, setMessages, setIsLoading }: ChatInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<{ message: string }>({
    defaultValues: {
      message: "",
    },
  });

  
  const onSubmit: SubmitHandler<{ message: string }> = async (data) => {
    setIsLoading(true)
    const userMessage = { user: true, text: data.message };
    setMessages(prev => [...prev, userMessage]);
    setValue("message", "");

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick:free",
          messages: [
            {
              role: "system",
              content: `you're Hamza Ahmed. keep your answers short as if you're chatting. You answer based on this information:\n${TRAINING_DATA}. Keep it a little casual. Also give quotes as if you're a new freelancer with little experience (if asked). use no extra emojis. And if not sure to answer something just say "contact me on whatsapp or email me".
              
              Your complete past chat:
              ${messages
                  .map((message) => `${message.user ? 'user: ' : 'you: '} - ${message.text}`)
                  .join("\n")}`
            },
            {
              role: "user",
              content: data.message
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result)
      const reply = result.choices[0].message.content;
      setMessages(prev => [...prev, { user: false, text: reply }]);
      setIsLoading(false)

    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages(prev => [...prev, {
        user: false,
        text: "Oops, something went wrong. Try again!"
      }]);
      setIsLoading(false)
    }
  };


  return (
    <form className="flex items-end space-x-2 pt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        {errors.message && (
          <small className="text-red-400">This field is required</small>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Type your message"
          className="mt-1 flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] text-[#030712] focus-visible:ring-offset-2"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
      >
        Send
      </button>
    </form>
  );
}


interface ChatBtnProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function FloatingChatBtn({ isOpen, setIsOpen }: ChatBtnProps) {
  return (
    <button
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center text-sm font-medium border rounded-full w-10 h-10 bg-black hover:bg-gray-700 cursor-pointer border-gray-200 text-white"
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
    >
      <div className="absolute z-10 top-1 left-1 w-8 h-8 rounded-full bg-[#6e6e6e] animate-ping"></div>
      <FiMessageCircle className="h-5 w-5" />
    </button>
  );
}

function FloatingWhatsAppBtn() {
  return (
    <a href="https://wa.me/+923281177401" target="_blank" rel="noreferrer noopener" className="fixed bottom-18 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25d366]">
      <div className="absolute z-10 top-1 left-1 w-8 h-8 rounded-full bg-[#25d366] animate-ping"></div>
      <div className="relative z-20">
        <svg fill="#fff" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 308.00 308.00" xmlSpace="preserve" stroke="#fff" transform="matrix(1, 0, 0, 1, 0, 0)">
              <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"/> 
              <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"/>
        </svg>
      </div>
    </a>
  )
}