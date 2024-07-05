"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/custom ui/Loader"
import ContactUsForm from "@/components/contactus/ContactUsForm"


const ContactDetails = ({ params }: { params: { contactId: string } }) => {
    const [loading, setLoading] = useState(true)
    const [contactDetails, setContactDetails] = useState<ContactType | undefined>(undefined)

    const getContactDetails = async () => {
        try {
            const res = await fetch(`/api/contactus/${params.contactId}`, {
                method: "GET"
            })
            const data = await res.json()
            setContactDetails(data)
            setLoading(false)
        } catch (err) {
            console.log("[contactId_GET]", err)
        }
    }

    useEffect(() => {
        getContactDetails()
    }, [])

    return loading ? <Loader /> : (
        <ContactUsForm initialData={contactDetails} />
    )
}

export default ContactDetails
