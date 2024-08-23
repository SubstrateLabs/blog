import HomeLayout from "@/app/(home)/layout";
import { H1, Subtitle } from "./_components/typography";

export default function NotFound() {
  return (
    <HomeLayout>
      <main className="pt-32 pb-16 max-w-[45rem] mx-auto text-center">
        <H1 style="!max-w-full">404 Not Found</H1>
        <Subtitle style="!max-w-full">Not found 😰</Subtitle>
      </main>
    </HomeLayout>
  );
}
