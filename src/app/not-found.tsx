import HomeLayout from "@/app/(home)/layout";

export default function NotFound() {
  return (
    <HomeLayout>
      <div className="text-center">
        <p className="my-4 text-4xl font-bold">404 Not Found</p>
        <p className="text-lg">Not found 😰</p>
      </div>
    </HomeLayout>
  );
}
