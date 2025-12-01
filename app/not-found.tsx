import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.png')] bg-repeat opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-[12rem] md:text-[20rem] font-display font-bold leading-none text-transparent stroke-text select-none">
          404
        </h1>

        <div className="bg-accent-1 text-black px-6 py-2 font-bold text-xl md:text-3xl inline-block -mt-12 md:-mt-20 mb-8 border-2 border-black box-shadow-hard transform -rotate-2">
          LOST IN THE SAUCE?
        </div>

        <p className="text-xl md:text-2xl text-soft-grey mb-12 max-w-2xl mx-auto">
          This page flopped harder than a bad TikTok trend. <br />
          Let&apos;s get you back to the good stuff.
        </p>

        <Link href="/">
          <Button size="lg" className="text-xl px-12 py-8">
            TAKE ME HOME
          </Button>
        </Link>
      </div>

      {/* Decorative Footer */}
      <div className="absolute bottom-8 left-0 w-full text-center font-mono text-sm text-soft-grey opacity-50">
        ERROR CODE: IDK_TBH
      </div>
    </div>
  );
}
