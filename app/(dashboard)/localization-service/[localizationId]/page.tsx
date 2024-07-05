"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Loader from "@/components/custom ui/Loader";
import TeamForm from "@/components/localization-service/LocalForm1";
import Form from "@/components/team/Sonik";
import ContactUsForm from "@/components/contactus/Dummmy";

// Define the type for team IDs
type TeamId = "666dafd73d5fd6b832b553b7" | "666da4f2d09df9eebb5e9224" | "634dafd73d5fd6b832b553b7" | "633dafd73d5fd6b832b553b7" | "666db71c538fc3d03d13d89b";

const TeamDetails = () => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState<OneType | undefined>(undefined);
    const { localizationId } = useParams(); // get teamId from useParams

    const getDetails = async () => {
        try {
            const res = await fetch(`/api/localization-service/${localizationId}`, {
                method: "GET"
            });
            const data = await res.json();
            setDetails(data);
            setLoading(false);
        } catch (err) {
            console.log("[teamId_GET]", err);
        }
    };

    useEffect(() => {
        getDetails();
    }, [localizationId]);

    const renderForm = () => {
        const formMapping: { [key in TeamId]?: React.FC<{ initialData?: OneType }> } = {
            "666dafd73d5fd6b832b553b7": TeamForm,
            "666da4f2d09df9eebb5e9224": Form,
            "666db71c538fc3d03d13d89b": ContactUsForm,
            // Add more mappings here as needed
        };

        const FormComponent = formMapping[localizationId as TeamId] || TeamForm;
        return <FormComponent initialData={details} />;
    };

    return loading ? <Loader /> : renderForm();
};

export default TeamDetails;
