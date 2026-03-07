import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative flex items-center z-50 transition-transform duration-200 hover:scale-[0.98]", className)}>
      {/* Light Mode Logo */}
      <div className="block dark:hidden relative w-[130px] md:w-[150px] h-[36px] md:h-[40px]">
        <Image
          src="/assets/describedLogo.png"
          alt="Threemates"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
      
      {/* Dark Mode Logo */}
      <div className="hidden dark:block relative w-[130px] md:w-[150px] h-[36px] md:h-[40px]">
        <Image
          src="/assets/darkDescribedlogo.png"
          alt="Threemates"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}
