import { DocsList } from "@/components/docs/docs-list";
import { cn } from "@/lib/utils/classes";

const categories = [

  // {
  //   title: "WorkShops",
  //   slug: "components/workshops",
  //   href: "/components/workshops",
  // },
  // {
  //   title: "Sections",
  //   slug: "components/sections",
  //   href: "/components/sections",
  // },
  // {
  //   title: "Text animations",
  //   slug: "components/text",
  //   href: "/components/text",
  // },
  {
    title: "Books",
    slug: "books",
    href: "/books",
  },
  {
    title: "EZWorks",
    slug: "ezworks",
    href: "/EZWorks",
  },


];

export const Books = ({ className }: { className: string }) => {


  return (

    <section id="testimonials" className="container py-10">
    <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
    Resources 
    </h2>
    <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
    
      <span className="bg-gradient bg-clip-text text-transparent">Books</span> and <span className="text-purple-600 from-fg-onAccent">EZWorks</span>.
    </h3>

    <div className={className}>


      <div className="mt-6 -space-y-2">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="category-xl pl-6 font-mono text-xl tracking-widest text-fg-muted">
              {category.title}
            </h3>
            <div
              className={cn("border-muted border-l px-6 pb-8 pt-4", {
                "pb-0": index === categories.length - 1,
              })}
            >
              <DocsList
                name={category.slug}
                href={category.href}
                limit={4}
                className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>


  );
}
