"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Loader from "@/components/custom ui/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// import { DataTable } from "@/components/custom ui/DataTable";
// import { columns } from "@/components/products/ProductColumns";


type ProductType = {
    name: string;
    description: string;
    href: string;
};

const Products = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const products: ProductType[] = [
        {
            name: "Higher Level Education",
            description: "Developing advanced educational resources for higher-level courses.",
            href: "/higher-education",
        },
        {
            name: "K-12 Education",
            description: "Optimizing educational resources and materials for K-12 curriculum.",
            href: "/k12-education",
        },
        {
            name: "Writing Services",
            description: "Providing clear & effective solutions.",
            href: "/writing-service",
        },
        {
            name: "SEO Based Content",
            description: "SEO-optimized content to enhance online presence.",
            href: "/seo-services",
        },
        {
            name: "Live Tutoring & Doubt Solving",
            description: "Personalized tutoring & doubt solving.",
            href: "/live_tutoring-doubt_solving",
        },
        {
            name: "Educational Video Creation",
            description: "Engaging educational videos.",
            href: "/video-creation",
        },
        {
            name: "Test Creation",
            description: "Comprehensive & reliable tests to evaluate knowledge.",
            href: "/test-creation",
        },
        {
            name: "Localization Services",
            description: "Accurate and reliable localization services for all languages.",
            href: "/localization-service",
        },
        {
            name: "Books Writing",
            description: "Professional book writing services.",
            href: "/book-writing",
        },
        {
            name: "Accessibility Service",
            description: "Expand online accessibility for broader audience.",
            href: "/accessibility-services",
        },
    ];

    return loading ? (
        <Loader />
    ) : (
        <div className="px-8 py-9">
            <div className="flex items-center justify-between mb-4">
                <p className="text-heading2-bold">Services</p>
                <Button
                    className="bg-blue-600 text-white"
                    onClick={() => router.push("/products")}
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Services
                </Button>
            </div>
            <Separator className="bg-gray-300 my-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="p-5 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition duration-300 flex items-center justify-center"
                    >
                        <a href={product.href} className="text-blue-900 hover:text-blue-700 font-semibold">
                            {product.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;