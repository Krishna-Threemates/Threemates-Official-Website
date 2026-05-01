import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Users, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { getAITrainingData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "AI Training & Skill Development — Threemates",
  description: "We reach out to educational institutions and organizations to provide skill training on the latest AI technologies.",
  alternates: { canonical: "/ai-training" },
  openGraph: {
    title: "AI Training & Skill Development — Threemates",
    description: "Empowering students and professionals with cutting-edge AI skills.",
    url: "/ai-training",
    type: "website",
  },
};

export default async function AITrainingPage() {
  const data = await getAITrainingData();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-background to-background dark:from-blue-900/20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] -z-10 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl" />

        <div className="flex flex-col items-center text-center space-y-6">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium shadow-soft">
            {data.badge}
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-bold tracking-tight max-w-4xl">
            Empowering the Next Generation with AI Skills
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <Link
              href="/contact"
              className="btn-press inline-flex items-center justify-center rounded-full px-8 h-12 md:h-14 text-sm md:text-base w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all shadow-medium hover:shadow-elevated glow-blue"
            >
              Request Training <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/internship"
              className="btn-press inline-flex items-center justify-center rounded-full px-8 h-12 md:h-14 text-sm md:text-base w-full sm:w-auto border border-border bg-background hover:bg-muted font-medium transition-all shadow-soft"
            >
              View Internship Program
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">Who We Serve</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Training for Organizations & Institutions</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <GraduationCap className="h-6 w-6" />,
              title: "Educational Institutions",
              description: "Schools, colleges, and universities looking to upskill their students with the latest AI technologies.",
            },
            {
              icon: <Building className="h-6 w-6" />,
              title: "Corporate Organizations",
              description: "Companies seeking to train their workforce in AI tools and methodologies for digital transformation.",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Student Groups",
              description: "Groups of students or fresh graduates wanting structured training to enter the AI/ML field.",
            },
          ].map((item, i) => (
            <Card key={i} className="border shadow-soft card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-blue-50/50 dark:bg-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="rounded-full mb-4 md:mb-6 bg-white dark:bg-background shadow-soft">Training Programs</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our AI Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Comprehensive training programs designed to take you from basics to production-ready AI skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.programs.map((program: any, i: number) => (
              <Card key={i} className="border shadow-soft card-hover rounded-2xl overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-xl">{program.title}</h3>
                        <Badge variant="secondary" className="font-mono text-xs">{program.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.topics.map((topic: string) => (
                          <Badge key={topic} variant="outline" className="rounded-full text-xs py-0.5">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">Our Approach</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Hands-on, Project-Based Learning</h2>
            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              We believe in learning by doing. Our training programs focus on practical applications and real-world projects that prepare participants for industry challenges.
            </p>
            <div className="space-y-4">
              {[
                "Industry-aligned curriculum designed with current market needs",
                "Live project experience with mentorship from working professionals",
                "Regular assessments and code reviews to track progress",
                "Post-training support and job assistance for eligible candidates",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="Team collaboration during AI training"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Students Trained" },
              { value: "15+", label: "Partner Institutions" },
              { value: "95%", label: "Completion Rate" },
              { value: "50+", label: "Industry Projects" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl overflow-hidden shadow-elevated">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.cta.title}</h2>
                <p className="text-white/80 leading-relaxed">{data.cta.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={data.cta.primaryBtn.href}
                  className="btn-press inline-flex items-center justify-center rounded-full bg-white text-blue-700 text-sm font-medium px-8 h-12 hover:bg-white/90 transition-all shadow-medium"
                >
                  {data.cta.primaryBtn.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={data.cta.secondaryBtn.href}
                  className="btn-press inline-flex items-center justify-center rounded-full border border-white/30 text-white text-sm font-medium px-8 h-12 hover:bg-white/10 transition-all"
                >
                  {data.cta.secondaryBtn.label}
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}