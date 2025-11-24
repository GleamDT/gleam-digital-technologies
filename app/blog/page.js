import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/content/posts";

const fallbackImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475", // code
  "https://images.unsplash.com/photo-1551434678-e076c223a692", // dev team
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // data
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5", // security
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e", // cloud
  "https://images.unsplash.com/photo-1526498460520-4c246339dccb", // dashboard
];

function getPostImage(post, index) {
  if (post.image && post.image.trim().length > 0) return post.image;
  return fallbackImages[index % fallbackImages.length];
}

// app/blog/page.js

export const metadata = {
  title: "Blog",
  description:
    "Insights, guides, and best practices on web development, mobile apps, data, security, and cloud engineering from Gleam Digital Technologies.",
  openGraph: {
    title: "Blog & Insights | Gleam Digital Technologies",
    description:
      "Stay up to date with articles on digital transformation, modern engineering practices, and building secure, scalable products.",
  },
};

export default function Blog() {
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-5 md:mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                Blog &amp; insights
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Insights for{" "}
              <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                builders, founders, and teams
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-xl">
              Deep dives, practical guides, and perspective from Gleam Digital
              Technologies on web, mobile, data, cloud, and security.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          {blogPosts.length === 0 ? (
            <p className="text-center text-slate-400">
              No posts published yet. Check back soon.
            </p>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-100">
                  Latest articles
                </h2>
                <p className="text-xs md:text-sm text-slate-400">
                  {blogPosts.length} {blogPosts.length === 1 ? "post" : "posts"}{" "}
                  and counting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => {
                  const img = getPostImage(post, index);

                  return (
                    <article
                      key={post.slug}
                      className="group rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-md shadow-slate-900/60 hover:border-blue-500/80 hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
                    >
                      <div className="relative h-44">
                        <img
                          src={`${img}?auto=format&fit=crop&w=1000&q=80`}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center text-[11px] text-slate-400 mb-3 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1 text-slate-500" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1 text-slate-500" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-sm text-slate-300 mb-4 flex-1">
                          {post.excerpt}
                        </p>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="mt-auto inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200 group"
                        >
                          Read article
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
