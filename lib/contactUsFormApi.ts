import { ContactUsType } from "@/types/ContactUsType"
import { useState } from "react"

const [isSending,setIsSending] = useState<boolean|null>(false);
const contactUsFormApi = (formData:ContactUsType) => {
    setIsSending(true)
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).finally(()=>{
        setIsSending(false)
      });
}

export {contactUsFormApi,isSending,setIsSending}