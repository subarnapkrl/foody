import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center">
      <h1 className="text-5xl text-center mt-4">FOODIE</h1>
      <Button>
        <Link href={"/client"}>Visit Signup</Link>
        <p>If you want to sign in as ADMIN: email: super@admin.com pw: 1234</p>
      </Button>
    </div>
  );
}
