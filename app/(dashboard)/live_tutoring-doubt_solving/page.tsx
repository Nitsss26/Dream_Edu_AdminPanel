"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/live_tutoring-doubt_solving/TutoringColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";

const About = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [abouts, setAbouts] = useState([]);

    const getAbouts = async () => {
        try {
            const res = await fetch("/api/live_tutoring-doubt_solving", {
                method: "GET",
            });
            const data = await res.json();
            setAbouts(data);
            setLoading(false);
        } catch (err) {
            console.log("[abouts_GET]", err);
        }
    };

    useEffect(() => {
        getAbouts();
    }, []);

    return loading ? <Loader /> : (
        <div className="px-8 py-9">
            <div className="flex items-center justify-between">
                <p className="text-heading2-bold">Live Tutoring Doubt Solving</p>
                <Button className="bg-blue-1 text-white" onClick={() => router.push("/live_tutoring-doubt_solving/new")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Live Tutoring Doubt Solving
                </Button>
            </div>
            <Separator className="bg-grey-1 my-4" />
            <DataTable columns={columns} data={abouts} searchKey="title" />
        </div>
    );
};

export default About;

