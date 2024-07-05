"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";

const Teams = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const res = await fetch("/api/teams", {
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
        <p className="text-heading2-bold">Teams</p>
        <Button className="bg-blue-1 text-white" onClick={() => router.push("/teams/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Create Team
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={teams} searchKey="title" />
    </div>
  );
};

export default Teams;
