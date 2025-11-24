"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/content/posts";

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Post not found
          </h1>
          <p className="text-slate-400 mb-6">
            The article you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-blue-400 hover:bg-slate-900/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc =
    post.image && post.image.trim().length > 0
      ? `${post.image}?auto=format&fit=crop&w=1400&q=80`
      : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80";

  const paragraphs = post.content ? post.content.split("\n\n") : [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-slate-300 hover:text-white mb-6 md:mt-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to blog
            </Link>

            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
              Blog &amp; insights
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-300">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-slate-400" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl border border-white/5 bg-slate-900/70 shadow-2xl shadow-blue-500/20 mb-10">
              <div className="relative h-64 md:h-80">
                <img
                  src={imageSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-3xl border border-slate-800/80 p-6 md:p-10 shadow-md shadow-slate-900/60">
              {paragraphs.length > 0 ? (
                <div className="space-y-6">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg leading-relaxed text-slate-200"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-slate-300">
                  This post doesn&apos;t have any content yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Want to put these ideas into practice?
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Talk to the Gleam Digital Technologies team about how we can help
            you design, build, secure, and scale your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm md:text-base font-semibold text-blue-700 hover:bg-blue-50 transition-colors shadow-lg shadow-blue-500/40"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
