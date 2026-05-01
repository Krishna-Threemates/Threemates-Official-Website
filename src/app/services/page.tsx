import type { Metadata } from "next";
import { getServicesData } from "@/lib/data-loader";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Threemates services — ERP Development, Web Application Development, Mobile App Development, SaaS Development, and Cloud Solutions.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services — Threemates",
    description:
      "End-to-end IT services: ERP systems, web apps, mobile apps, SaaS platforms, and cloud solutions.",
    url: "/services",
    type: "website",
  },
  twitter: {
    title: "Our Services — Threemates",
    description:
      "End-to-end IT services: ERP systems, web apps, mobile apps, SaaS platforms, and cloud solutions.",
  },
};

export default async function Services() {
    const data = await getServicesData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-background dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-200/40 to-transparent dark:from-blue-800/20 blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs md:text-sm font-medium shadow-soft mb-6">
                        <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                        What we do
                    </Badge>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold text-foreground leading-[1.05] max-w-4xl mb-8">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        {data.hero.description}
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="pb-20 md:pb-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {data.offerings.map((service: any, index: number) => (
                        <div
                            key={service.id}
                            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 !== 0 ? 'lg:[&>div:first-child]:order-last' : ''}`}
                        >
                            <div className="pt-2 lg:pt-8">
                                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest block mb-4">
                                    0{index + 1}
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                                    {service.description}
                                </p>

                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-6">
                                    Capabilities
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {service.features.map((feature: string, fIndex: number) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-muted-foreground font-medium text-[15px]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-secondary/30 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    quality={80}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* AI Training & Skill Development */}
            <section className="py-20 md:py-32 px-4 md:px-8 bg-blue-50/50 dark:bg-blue-950/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="rounded-full mb-4 shadow-soft">Skill Development</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Empowering Teams with AI Skills</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We also provide AI training programs for organizations and educational institutions. Help your team stay ahead with the latest technologies.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                        {[
                            { title: "AI & ML", icon: "🤖" },
                            { title: "LLMs & GenAI", icon: "✨" },
                            { title: "Data Science", icon: "📊" },
                            { title: "Cloud & MLOps", icon: "☁️" },
                        ].map((program, i) => (
                            <Card key={i} className="border shadow-soft card-hover rounded-2xl overflow-hidden">
                                <CardContent className="p-5 text-center">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mx-auto mb-3 text-2xl">
                                        {program.icon}
                                    </div>
                                    <h3 className="font-semibold">{program.title}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/ai-training"
                            className="btn-press inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 h-12 transition-all shadow-medium hover:shadow-elevated glow-blue"
                        >
                            Explore AI Training Programs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
