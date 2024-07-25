import { Layout } from "fumadocs-ui/layout";

export default function NotFound() {
  return (
    <Layout
      nav={{
        title: "Substrate Blog",
      }}
      githubUrl="https://github.com/SubstrateLabs/blog"
    >
      <div className="text-center">
        <p className="my-4 text-4xl font-bold">404 Not Found</p>
        <p className="text-lg">Not found 😰</p>
      </div>
    </Layout>
  );
}
