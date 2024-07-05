// Update.tsx
import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";
import { Button } from "../ui/button";

interface UpdateProps {
    item: string; // Add item prop
    id: string;
}

const Update: React.FC<UpdateProps> = ({ item, id }) => {
    const router = useRouter();
    const handleUpdate = () => {
        const itemType =
            item === "product" ? "products" :
                item === "contactus" ? "contactus" :
                    item === "team" ? "team" :
                        item === "services" ? "services" :
                            // item === "home" ? "home" :
                            item === "about" ? "about" :
                                item === "higher-education" ? "higher-education" :
                                    item === "k12-education" ? "k12-education" :
                                        item === "writing-service" ? "writing-service" :
                                            item === "seo-services" ? "seo-services" :
                                                item === "live_tutoring-doubt_solving" ? "live_tutoring-doubt_solving" :
                                                    item === "video-creation" ? "video-creation" :
                                                        item === "test-creation" ? "test-creation" :
                                                            item === "localization-service" ? "localization-service" :
                                                                item === "book-writing" ? "book-writing" :
                                                                    item === "accessibility-services" ? "accessibility-services" :
                                                                        "/";
        console.log(itemType);
        if (item == "home") {
            router.push(`/${id}`);
        } else {
            router.push(`/${itemType}/${id}`);
        }
    };

    return (
        <Button className="bg-blue-1 text-white" onClick={handleUpdate}>
            <Edit className="h-4 w-4 mr-2" />
            Update
        </Button>
    );
};

export default Update;
