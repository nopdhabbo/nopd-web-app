import Image from "next/image";

import jordeboiImage from "../../public/assets/nopd/jordeboi.png";
import nopdImage from "../../public/assets/nopd/nopd.png";

import UnderDevelopment from "@/components/default/underDevelopment";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Main Content */}
      <UnderDevelopment />
    </main>
  );
}
