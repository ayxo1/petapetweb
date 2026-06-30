'use client';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import z from 'zod';

interface SupportRequest {
    email: string;
    message: string;
}

const supReqest = z.object({
    email: z.string().min(1, 'can\'t be empty').email('invalid email format'),
    message: z.string().min(1, 'can\'t be empty')
});

const submit = async ({ email, message }: SupportRequest) => {
    const res = await fetch('https://api.petapetapp.com/api/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, description: message, inquiryReason: 'contact-us request' })
    });
    if (!res.ok) throw new Error('api/send-mail error, failed to send email');
    return res.json();
};

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [focus, setFocus] = useState('');
    const [validationErr, setValidationErr] = useState<{ email: string | null; message: string | null; } | null>(null);
    
    const { 
        mutate,
        data,
        isPending,
        isError,
        error,
        isSuccess
    } = useMutation({ mutationFn: submit });

    const handleSubmit = () => {
        const requestData = supReqest.safeParse({ email, message });
        if (!requestData.success) {
            const emailErr = requestData.error.issues.find(err => err.path.includes('email'))?.message || null;
            const msgErr = requestData.error.issues.find(err => err.path.includes('message'))?.message || null;
            setValidationErr({ email: emailErr, message: msgErr });
            return;
        }
        setValidationErr(null);
        mutate({ email, message });
    };

  return (
    <div>
        <div className={`flex flex-col gap-12 items-center justify-center pt-[10%] ${isSuccess && 'hidden'}`}>
            {isError && !validationErr &&
                <div className='flex flex-col text-center gap-4'>
                    <p className='text-red-400 font-bold text-center'>an error occurred</p>
                    <p className='text-red-400 text-center'>please refresh the page and try to send a request again</p>
                </div>
            }
            <div className='w-full h-full'>
                <div className='flex items-center justify-center gap-4 '>
                    <p className='text-foreground font-bold'>your email: </p>
                    <input 
                        className={`p-2 border-b ${focus === 'email' ? 'border-authPrimary' : 'border-lighterSecondary'} w-[30%] text-foreground`}
                        value={email}
                        onChange={(val) => setEmail(val.target.value)}
                        onFocus={() => setFocus('email')}
                    />
                </div>
                {validationErr?.email && <p className='text-red-400 text-center'>{validationErr.email}</p>}
            </div>
            <div className='w-full'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <p className='text-foreground font-bold'>your message: </p>
                    <textarea 
                        className={`p-2 border ${focus === 'message' ? 'border-authPrimary' : 'border-lighterSecondary'} rounded-lg w-[80%] md:w-[60%] xl:w-[50%] text-foreground field-sizing-content`}
                        value={message}
                        onChange={(val) => setMessage(val.target.value)}
                        onFocus={() => setFocus('message')}
                    />
                </div>
                {validationErr?.message && <p className='text-red-400 text-center'>{validationErr.message}</p>}
            </div>
            <button 
                className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background hover:cursor-pointer text-sm lg:text-lg text-center disabled:bg-tabFont disabled:text-background disabled:cursor-default disabled:opacity-70'
                onClick={handleSubmit}
                disabled={isPending}
            > 
                {!isPending ? 'submit' : 'submitting..'}
            </button>
        </div>
        
        {isSuccess && <div className='flex flex-col gap-6 items-center justify-center pt-[10%] text-foreground px-[15%]'>
            <p className='font-bold text-center'>
                thank you for your submission!
            </p>
            <p className='text-center'>we will contact you via the email address you provided</p>
        </div>}
    </div>
  );
};

export default ContactUs;