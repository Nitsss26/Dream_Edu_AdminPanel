"use client"

import { useState } from "react";
import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

interface DeleteProps {
  item: string;
  id: string;
}

const Delete: React.FC<DeleteProps> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      const itemType =
        item === "product" ? "products" :
          item === "contactus" ? "contactus" :
            item === "team" ? "team" :
              item === "services" ? "services" :
                item === "home" ? "home" :
                  item === "higher-education" ? "higher-education" :
                    item === "about" ? "about" :
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
      if (item != "home") {
        if (!itemType) {
          throw new Error("Invalid item type");
        }

        const res = await fetch(`/api/${itemType}/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setLoading(false);
          window.location.href = `/${itemType}`;
          toast.success(`${item} deleted`);
        } else {
          setLoading(false);
          toast.error("Failed to delete the item. Please try again.");
        }
      } else {
        if (!itemType) {
          throw new Error("Invalid item type");
        }

        const res = await fetch(`/api/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setLoading(false);
          window.location.href = `/`;
          toast.success(`${item} deleted`);
        } else {
          setLoading(false);
          toast.error("Failed to delete the item. Please try again.");
        }
      }
    }

    catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="bg-red-1 text-white">
          <Trash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-grey-1">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-1">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-1 text-white" onClick={onDelete} disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
