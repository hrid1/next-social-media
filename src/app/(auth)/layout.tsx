import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Loader from "@/components/Loader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ClerkLoading>
        <Loader />
      </ClerkLoading>

      <ClerkLoaded>
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md p-4">{children}</div>
        </div>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
