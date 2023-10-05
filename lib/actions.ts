'use server'
import React from "react";
import { Resend } from "resend"
import ContactFormEmail from "@/components/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
export const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something went wrong";
    }
  
    return message;
  };

export const sendEmail= async (formData:FormData)=>{
   
  
    const sender=formData.get('senderEmail')
    const message=formData.get('senderMessage')

    console.log(sender,message)
if(!message || typeof message !== 'string'){
    return {
        error:'No message in field'
    }
}
if(!sender || typeof sender !== 'string'){
    return {
        error:'No message in field'
    }
}
let data;
try {
    data = await resend.emails.send({
        from: ` Portfolio <onboarding@resend.dev>`,
        to:'kudayapaul@proton.me',
        subject:'Message from Portfolio Form',
        reply_to:sender,
         //text:message
        react: React.createElement(ContactFormEmail, {
            message: message,
            senderEmail: sender,
          }),
    });
} catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};