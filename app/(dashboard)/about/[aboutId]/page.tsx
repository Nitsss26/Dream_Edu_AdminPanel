"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Loader from "@/components/custom ui/Loader";
import AboutForm1 from "@/components/about/About1";
import AboutForm2 from "@/components/about/About2";
import Form from "@/components/team/Sonik";

type AboutId = "666dafd73d5fd6b832b553b7" | "666da4f2d09df9eebb5e9224" | "634dafd73d5fd6b832b553b7" | "633dafd73d5fd6b832b553b7" | "666db71c538fc3d03d13d89b" | "666ddfa3f806f21ce41b74df";

const AboutDetails = () => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState<OneType | undefined>(undefined);
    const { aboutId } = useParams();

    const getDetails = async () => {
        try {
            const res = await fetch(`/api/about/${aboutId}`, {
                method: "GET"
            });
            const data = await res.json();
            setDetails(data);
            setLoading(false);
        } catch (err) {
            console.log("[aboutId_GET]", err);
        }
    };

    useEffect(() => {
        getDetails();
    }, [aboutId]);

    const renderForm = () => {
        const formMapping: { [key in AboutId]?: React.FC<{ initialData?: OneType }> } = {
            "666dafd73d5fd6b832b553b7": AboutForm1,
            "666da4f2d09df9eebb5e9224": Form,
            "666ddfa3f806f21ce41b74df": AboutForm2,

        };

        const FormComponent = formMapping[aboutId as AboutId] || AboutForm1;
        return <FormComponent initialData={details} />;
    };

    return loading ? <Loader /> : renderForm();
};

export default AboutDetails;
