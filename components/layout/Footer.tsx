import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-carbon-black text-off-white border-thick-top border-off-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="RANDS Logo"
                width={300}
                height={100}
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-none">
              GOT A BRAND THAT NEEDS <span className="text-accent-1">RIZZ</span>{" "}
              AND <span className="text-accent-2">SLAY?</span>
            </h2>
            <p className="text-xl md:text-2xl text-soft-grey mb-8">
              Tell us the problem and we will tell you if content can fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/brief">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-1 text-black hover:bg-white"
                >
                  Submit a Brief
                </Button>
              </Link>
              <Link href="https://wa.me/codezela/" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-off-white text-off-white hover:bg-off-white hover:text-black"
                >
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-soft-grey">
              We reply fast on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-left md:text-right">
            <Link
              href="#work"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              WORK
            </Link>
            <Link
              href="#services"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="#studio"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              STUDIO
            </Link>
            <Link
              href="#contact"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-soft-grey/20 pt-8">
          <div className="text-sm text-soft-grey">
            © {new Date().getFullYear()} RANDS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-1 transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="hover:text-accent-1 transition-colors">
              TIKTOK
            </a>
            <a href="#" className="hover:text-accent-1 transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
