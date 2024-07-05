"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/team/TeamColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";

const Team = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);

    const getTeams = async () => {
        try {
            const res = await fetch("/api/team", {
                method: "GET",
            });
            const data = await res.json();
            setTeams(data);
            setLoading(false);
        } catch (err) {
            console.log("[teams_GET]", err);
        }
    };

    useEffect(() => {
        getTeams();
    }, []);

    return loading ? <Loader /> : (
        <div className="px-8 py-9">
            <div className="flex items-center justify-between">
                <p className="text-heading2-bold">Team</p>
                <Button className="bg-blue-1 text-white" onClick={() => router.push("/team/new")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Team
                </Button>
            </div>
            <Separator className="bg-grey-1 my-4" />
            <DataTable columns={columns} data={teams} searchKey="title" />
        </div>
    );
};

export default Team;

