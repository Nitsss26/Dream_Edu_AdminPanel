"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/contactus/ContactColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";

const Contact = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            const res = await fetch("/api/contactus", {
                method: "GET",
            });
            const data = await res.json();
            setContacts(data);
            setLoading(false);
        } catch (err) {
            console.log("[contacts_GET]", err);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    return loading ? <Loader /> : (
        <div className="px-8 py-9">
            <div className="flex items-center justify-between">
                <p className="text-heading2-bold">Contact Us</p>
                <Button className="bg-blue-1 text-white" onClick={() => router.push("/contactus/new")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Contact Us
                </Button>
            </div>
            <Separator className="bg-grey-1 my-4" />
            <DataTable columns={columns} data={contacts} searchKey="title" />
        </div>
    );
};

export default Contact;

