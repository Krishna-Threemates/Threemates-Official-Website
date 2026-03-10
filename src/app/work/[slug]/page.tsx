import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb, Layers, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWorkData } from "@/lib/data-loader";

interface ProjectPageProps {
    params: { slug: string };
}

// Generate static params for all projects
export async function generateStaticParams() {
    const data = await getWorkData();
    return data.projects.map((project: any) => ({
        slug: project.slug,
    }));
}

// Generate dynamic metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const data = await getWorkData();
    const project = data.projects.find((p: any) => p.slug === params.slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} — Case Study`,
        description: project.description,
        alternates: { canonical: `/work/${project.slug}` },
        openGraph: {
            title: `${project.title} — Threemates Case Study`,
            description: project.description,
            url: `/work/${project.slug}`,
            type: "article",
            images: [{ url: project.image, width: 800, height: 600, alt: project.title }],
        },
        twitter: {
            title: `${project.title} — Threemates Case Study`,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const data = await getWorkData();
    const project = data.projects.find((p: any) => p.slug === params.slug);

    if (!project || !project.caseStudy) {
        notFound();
    }

    const cs = project.caseStudy;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-12 md:pb-20 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-background dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-200/40 to-transparent dark:from-blue-800/20 blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Back link */}
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold">
                            {project.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">Client: {project.client}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold text-foreground leading-[1.05] max-w-4xl mb-6">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Hero Image */}
            <section className="px-4 md:px-8 mb-16 md:mb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-secondary/30">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            quality={85}
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 1200px"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Client Requirement */}
            <section className="px-4 md:px-8 mb-16 md:mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-blue-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Client Requirement</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {cs.clientRequirement}
                    </p>
                </div>
            </section>

            {/* Challenges */}
            <section className="px-4 md:px-8 mb-16 md:mb-24 py-16 md:py-20 bg-muted/30 border-y">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Challenges</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {cs.challenges.map((challenge: string, i: number) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-background border hover:shadow-medium transition-all duration-300"
                            >
                                <span className="text-xs font-bold text-amber-500 bg-amber-500/10 rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-foreground font-medium leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Solution */}
            <section className="px-4 md:px-8 mb-16 md:mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Solution</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {cs.solution}
                    </p>
                </div>
            </section>

            {/* Key Features */}
            <section className="px-4 md:px-8 mb-16 md:mb-24 py-16 md:py-20 bg-muted/30 border-y">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Layers className="w-5 h-5 text-blue-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Key Features</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {cs.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-foreground font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="px-4 md:px-8 mb-16 md:mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Wrench className="w-5 h-5 text-purple-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technology Stack</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {cs.technologyStack.map((tech: string, i: number) => (
                            <Badge
                                key={i}
                                variant="secondary"
                                className="rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcome */}
            <section className="px-4 md:px-8 mb-16 md:mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
                            <p className="text-lg md:text-xl leading-relaxed text-white/90">
                                {cs.outcome}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 md:px-8 pb-20 md:pb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Have a similar project in mind?
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                        Let&apos;s discuss how we can build a custom solution for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <Button className="rounded-full px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-medium hover:shadow-elevated text-base">
                                Start a Project
                            </Button>
                        </Link>
                        <Link href="/work">
                            <Button variant="outline" className="rounded-full px-8 h-12 text-base">
                                View More Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
