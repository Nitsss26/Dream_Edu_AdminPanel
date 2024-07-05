"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";
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
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/custom ui/ImageUpload";
import { useState } from "react";
import toast from "react-hot-toast";
import Delete from "@/components/custom ui/Delete";

const formSchema = z.object({
    title: z.string().min(1).max(200),
    description1: z.string().max(500).optional(),
    description2: z.string().max(500).optional(),
    description3: z.string().max(500).optional(),
    description4: z.string().max(500).optional(),
    description5: z.string().max(500).optional(),
    description6: z.string().max(500).optional(),
    description7: z.string().max(500).optional(),
    description8: z.string().max(500).optional(),
    description9: z.string().max(500).optional(),
    description10: z.string().max(500).optional(),
    image1: z.string().optional(),
    image2: z.string().optional(),
    image3: z.string().optional(),
    image4: z.string().optional(),
    image5: z.string().optional(),
    image6: z.string().optional(),
    image7: z.string().optional(),
    image8: z.string().optional(),
    image9: z.string().optional(),
    image10: z.string().optional(),
    field1: z.string().max(300).optional(),
    field2: z.string().max(300).optional(),
    field3: z.string().max(300).optional(),
    field4: z.string().max(300).optional(),
    field5: z.string().max(300).optional(),
    field6: z.string().max(300).optional(),
    field7: z.string().max(300).optional(),
    field8: z.string().max(300).optional(),
    field9: z.string().max(300).optional(),
    field10: z.string().max(300).optional(),
    field11: z.string().max(300).optional(),
    field12: z.string().max(300).optional(),
    field13: z.string().max(300).optional(),
    field14: z.string().max(300).optional(),
    field15: z.string().max(300).optional(),
    field16: z.string().max(300).optional(),
    field17: z.string().max(300).optional(),
    field18: z.string().max(300).optional(),
});


interface AboutFormProps {
    initialData?: OneType | OneType; // Must have "?" to make it optional
}

const AboutForm: React.FC<AboutFormProps> = ({ initialData }) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData ? initialData :
            {
                title: "",
                description1: "",
                description2: "",
                description3: "",
                description4: "",
                description5: "",
                description6: "",
                description7: "",
                description8: "",
                description9: "",
                description10: "",
                image1: "",
                image2: "",
                image3: "",
                image4: "",
                image5: "",
                image6: "",
                image7: "",
                image8: "",
                image9: "",
                image10: "",
                field1: "",
                field2: "",
                field3: "",
                field4: "",
                field5: "",
                field6: "",
                field7: "",
                field8: "",
                field9: "",
                field10: "",
                field11: "",
                field12: "",
                field13: "",
                field14: "",
                field15: "",
                field16: "",
                field17: "",
                field18: "",
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
                ? `/api/seo-services/${initialData._id}`
                : "/api/seo-services";
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(values),
            });
            if (res.ok) {
                setLoading(false);
                toast.success(`Seo-Services ${initialData ? "updated" : "created"}`);
                window.location.href = "/seo-services";
                router.push("/seo-services");
            }
        } catch (err) {
            console.log("[Seo-Services_POST]", err);
            toast.error("Something went wrong! Please try again.");
        }
        console.log(values)
    };

    return (
        <div className="p-10">
            {initialData ? (
                <div className="flex items-center justify-between">
                    <p className="text-heading2-bold">Edit Seo-Services</p>
                    {/* <Delete id={initialData._id} item="seo-services" /> */}
                </div>
            ) : (
                <p className="text-heading2-bold">Seo-Services</p>
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
                                    <Input
                                        placeholder="Title"
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="field1"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* <FormLabel>Features Section</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description1"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={3}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
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
                                {/* <FormLabel>Features Section</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description2"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={3}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center items-center text-center -ms-8">
                        <FormField
                            control={form.control}
                            name="image1"
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

                    <FormField
                        control={form.control}
                        name="field3"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* <FormLabel>Features Section</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="field4"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* <FormLabel>Features Section</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description3"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={2}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
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
                                <FormLabel>Services</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description4"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={4}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
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
                                {/* <FormLabel>Services</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description5"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={4}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="field7"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* <FormLabel>Services</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description6"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Popular Service Section</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={4}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
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
                                {/* <FormLabel>Services</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
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
                                {/* <FormLabel>Services</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description7"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={4}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="field10"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* <FormLabel>Services</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description8"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>About</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={4}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="field11"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* <FormLabel>Services</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        {...field}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description9"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Popular Service Section</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        {...field}
                                        rows={4}
                                        onKeyDown={handleKeyPress}
                                        className="custom-border"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-10">
                        <Button type="submit" className="bg-blue-1 text-white">
                            Submit
                        </Button>
                        <Button
                            type="button"
                            onClick={() => router.push("/seo-services")}
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


export default AboutForm