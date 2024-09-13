import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section
      id="blog"
      className="flex flex-col  w-full shadow-md p-4 rounded-md bg-white dark:bg-neutral-900 sm:p-2 sm:rounded-lg sm:shadow-lg "
    >
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter sm:text-4xl text-center">
          `Blog&apos;s`
        </h1>
        <div className="border-b-2 border-gray-100 dark:border-neutral-700 w-full m-2 sm:m-4 sm:mx-auto"></div>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            key={post.slug}
            className="hover:scale-105 transition-all duration-300 bg-gray-50 p-4 rounded-md dark:bg-neutral-900 m-2 shadow-md hover:shadow-lg"
          >
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
