"use client"

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

interface CouseEnrollButtonProps {
    price: number;
    courseId: string;
};

export const CouseEnrollButton = ({ price, courseId }: CouseEnrollButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const res = await axios.post(`/api/courses/${courseId}/checkout`);
            window.location.assign(res.data.url);
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={onClick} disabled={isLoading} className="w-full md:w-auto" variant="primary" size="sm">
            Enroll for {formatPrice(price)}
        </Button>
    );
};