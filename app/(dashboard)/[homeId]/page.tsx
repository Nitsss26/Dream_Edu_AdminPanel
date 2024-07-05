"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Loader from "@/components/custom ui/Loader";
import TeamForm from "@/components/home/HomeForm";
import Home5 from "@/components/home/Home5";
import Home4 from "@/components/home/Home4";
import Home3 from "@/components/home/Home3";
import Form from "@/components/team/Sonik";
import ContactUsForm from "@/components/contactus/Dummmy";
import Home2 from "@/components/home/Home2";
import Home1 from "@/components/home/Home1";

// Define the type for team IDs
type TeamId = "667052d91f52807825bb550c" | "667031e31f52807825bb54ff" | "66702dea1f52807825bb54f9" | "666fde5dc036eb8acef6f1e7" | "666fdb82c036eb8acef6f1e1";

const TeamDetails = () => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState<OneType | undefined>(undefined);
    const { homeId } = useParams(); // get teamId from useParams

    const getDetails = async () => {
        try {
            const res = await fetch(`/api/${homeId}`, {
                method: "GET"
            });
            const data = await res.json();
            setDetails(data);
            setLoading(false);
        } catch (err) {
            console.log("[homeId_GET]", err);
        }
    };

    useEffect(() => {
        getDetails();
    }, [homeId]);

    const renderForm = () => {
        const formMapping: { [key in TeamId]?: React.FC<{ initialData?: OneType }> } = {
            "667052d91f52807825bb550c": Home5,
            "667031e31f52807825bb54ff": Home4,
            "66702dea1f52807825bb54f9": Home3,
            "666fde5dc036eb8acef6f1e7": Home2,
            "666fdb82c036eb8acef6f1e1": Home1,

        };

        const FormComponent = formMapping[homeId as TeamId] || TeamForm;
        return <FormComponent initialData={details} />;
    };

    return loading ? <Loader /> : renderForm();
};

export default TeamDetails;
