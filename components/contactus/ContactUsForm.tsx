"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Separator } from "../ui/separator";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import ImageUpload from "../custom ui/ImageUpload";
import { useState } from "react";
import toast from "react-hot-toast";
import Delete from "../custom ui/Delete";

const formSchema = z.object({
    title: z.string().min(0).max(20),
    description: z.string().min(0).max(500).trim(),
    image: z.string(),
    field1: z.string().min(0).max(100).trim(),
    field2: z.string().min(0).max(100).trim(),
    field3: z.string().min(0).max(100).trim(),
    field4: z.string().min(0).max(100).trim(),
    field5: z.string().min(0).max(100).trim(),
    field6: z.string().min(0).max(100).trim(),
    field7: z.string().min(0).max(100).trim(),
    field8: z.string().min(0).max(100).trim(),
    field9: z.string().min(0).max(100).trim(),
});

interface ContactUsFormProps {
    initialData?: ContactType | ContactType; // Must have "?" to make it optional
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ initialData }) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData ? initialData :
            {
                title: "",
                description: "",
                image: "",
                field1: "",
                field2: "",
                field3: "",
                field4: "",
                field5: "",
                field6: "",
                field7: "",
                field8: "",
                field9: "",
            },
    });

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const url = initialData
                ? `/api/contactus/${initialData._id}`
                : "/api/contactus";
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(values),
            });
            if (res.ok) {
                setLoading(false);
                toast.success(`Contact Us ${initialData ? "updated" : "created"}`);
                window.location.href = "/contactus";
                router.push("/contactus");
            }
        } catch (err) {
            console.log("[contact_POST]", err);
            toast.error("Something went wrong! Please try again.");
        }
        console.log(values)
    };

    return (
        <div className="p-10">
            {initialData ? (
                <div className="flex items-center justify-between">
                    <p className="text-heading2-bold">Edit Contact Us</p>
                    {/* <Delete id={initialData._id} item="contactus" /> */}
                </div>
            ) : (
                <p className="text-heading2-bold">Contact Us</p>
            )}
            <Separator className="bg-grey-1 mt-4 mb-7" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-semibold">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Title" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Description" {...field} rows={5} onKeyDown={handleKeyPress} className="custom-border" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center items-center text-center -ms-8">
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <ImageUpload
                                            value={field.value ? [field.value] : []}
                                            onChange={(url) => field.onChange(url)}
                                            onRemove={() => field.onChange("")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <FormField
                            control={form.control}
                            name="field1"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 1</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 1" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="field2"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 2</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 2" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="field3"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 3</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 3" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <FormField
                            control={form.control}
                            name="field4"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 4</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 4" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="field5"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 5</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 5" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="field6"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 6</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 6" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <FormField
                            control={form.control}
                            name="field7"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 7</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 7" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="field8"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 8</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 8" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="field9"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Field 9</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Field 9" {...field} onKeyDown={handleKeyPress} className="custom-border" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-10">
                        <Button type="submit" className="bg-blue-1 text-white">
                            Submit
                        </Button>
                        <Button
                            type="button"
                            onClick={() => router.push("/contactus")}
                            className="bg-blue-1 text-white"
                        >
                            Discard
                        </Button>
                    </div>
                </form>

            </Form>
        </div>
    )
}


export default ContactUsForm