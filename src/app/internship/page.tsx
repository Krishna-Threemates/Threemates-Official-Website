import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BookOpen, Award, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getAITrainingData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Internship Program — Gain Real-World Tech Experience",
  description: "Join Threemates internship program to work on live projects, learn from industry experts, and kickstart your tech career.",
  alternates: { canonical: "/internship" },
  openGraph: {
    title: "Internship Program — Threemates",
    description: "Gain real-world tech experience with Threemates internship program.",
    url: "/internship",
    type: "website",
  },
};

export default async function InternshipPage() {
  const aiTraining = await getAITrainingData();
  const internship = aiTraining.internship;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-background to-background dark:from-blue-900/20" />

        <div className="flex flex-col items-center text-center space-y-6">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium shadow-soft">
            {internship.badge}
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-bold tracking-tight max-w-4xl">
            Kickstart Your Tech Career
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {internship.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <Link
              href="/contact"
              className="btn-press inline-flex items-center justify-center rounded-full px-8 h-12 md:h-14 text-sm md:text-base w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all shadow-medium hover:shadow-elevated glow-blue"
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#program-details"
              className="btn-press inline-flex items-center justify-center rounded-full px-8 h-12 md:h-14 text-sm md:text-base w-full sm:w-auto border border-border bg-background hover:bg-muted font-medium transition-all shadow-soft"
            >
              View Program Details
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {internship.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="program-details" className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">What You&apos;ll Get</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Program Benefits</h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            Our internship program is designed to give you practical experience and industry-ready skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internship.features.map((feature: any, i: number) => (
            <Card key={i} className="border shadow-soft card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mb-5">
                  {i === 0 && <Users className="h-5 w-5" />}
                  {i === 1 && <BookOpen className="h-5 w-5" />}
                  {i === 2 && <Award className="h-5 w-5" />}
                  {i === 3 && <Rocket className="h-5 w-5" />}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-blue-50/50 dark:bg-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="rounded-full mb-4 md:mb-6 bg-white dark:bg-background shadow-soft">Tech Stack</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technologies You&apos;ll Master</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Work with cutting-edge technologies used in real production environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { name: "Backend", tech: ["Node.js", "Python", "Express", "FastAPI"] },
              { name: "Database", tech: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
              { name: "Cloud", tech: ["AWS", "Google Cloud", "Docker", "Kubernetes"] },
              { name: "AI/ML", tech: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"] },
              { name: "Tools", tech: ["Git", "GitHub", "Figma", "Jira"] },
            ].map((category, i) => (
              <Card key={i} className="border shadow-soft rounded-2xl overflow-hidden">
                <CardContent className="p-5 md:p-6">
                  <h3 className="font-semibold text-lg mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">Timeline</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">6-Month Journey</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { month: "Months 1-2", title: "Foundation & Learning", description: "Learn core technologies, development workflows, and team collaboration practices through structured training and mentor-guided sessions." },
            { month: "Months 3-4", title: "Project Development", description: "Work on real client projects under senior developer guidance, applying learned skills to build functional features and solve complex problems." },
            { month: "Months 5-6", title: "Advanced & Capstone", description: "Tackle advanced features, optimize performance, and complete a capstone project that demonstrates your full-stack capabilities." },
          ].map((phase, i) => (
            <Card key={i} className="border shadow-soft rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mb-5 text-xl font-bold font-mono">
                  {i + 1}
                </div>
                <Badge variant="secondary" className="mb-3 font-mono text-xs">{phase.month}</Badge>
                <h3 className="font-semibold text-xl mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial / Success Story */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">Success Stories</Badge>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            &ldquo;The internship at Threemates gave me real project experience and mentor guidance that helped me land my first developer role within a month of completing the program.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-background shadow-soft">
              <Image src="https://i.pravatar.cc/80?img=33" alt="Former Intern" fill className="object-cover" sizes="48px" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Priya Sharma</p>
              <p className="text-sm text-muted-foreground">Former Intern → Full Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <Card className="bg-blue-600 text-white rounded-3xl overflow-hidden shadow-elevated">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Join our next cohort and gain the skills and experience needed to launch your tech career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-press inline-flex items-center justify-center rounded-full bg-white text-blue-700 text-sm font-medium px-8 h-12 hover:bg-white/90 transition-all shadow-medium"
              >
                Apply for Internship <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/ai-training"
                className="btn-press inline-flex items-center justify-center rounded-full border border-white/30 text-white text-sm font-medium px-8 h-12 hover:bg-white/10 transition-all"
              >
                View AI Training Programs
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}