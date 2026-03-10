"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormField {
    name: string;
    label: string;
    placeholder: string;
    type: string;
}

interface ContactFormProps {
    title: string;
    fields: FormField[];
    submitBtn: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({ title, fields, submitBtn }: ContactFormProps) {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState<Record<string, string>>(
        Object.fromEntries(fields.map((f) => [f.name, ""]))
    );

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setFormData(Object.fromEntries(fields.map((f) => [f.name, ""])));
        } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message || "Failed to send message. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-card p-8 md:p-12 rounded-[2rem] border text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h2>
                <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
                    Thank you for reaching out. We&apos;ve sent a confirmation to your email. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-card p-8 md:p-12 rounded-[2rem] border">
            <h2 className="text-2xl font-bold text-foreground mb-8">{title}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map((field, index) => (
                    <div key={index} className="space-y-2">
                        <label htmlFor={field.name} className="text-sm font-medium text-muted-foreground">
                            {field.label}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea
                                id={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                rows={5}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.name !== "company"}
                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                            />
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.name !== "company"}
                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                        )}
                    </div>
                ))}

                {/* Error message */}
                {status === "error" && errorMessage && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl px-4 py-3 text-sm text-red-700 dark:text-red-400">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                        "w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors mt-4 flex items-center justify-center gap-2 text-lg",
                        status === "loading" && "opacity-80 cursor-not-allowed"
                    )}
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            {submitBtn}
                            <ArrowUpRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
