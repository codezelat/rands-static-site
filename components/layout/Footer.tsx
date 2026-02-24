import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAPS_LINK,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/utils/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-carbon-black text-off-white border-thick-top border-off-white py-12 md:py-20"
    >
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
              <a href={`tel:${CONTACT_PHONE_E164}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-off-white text-off-white hover:bg-off-white hover:text-black"
                >
                  Call Us
                </Button>
              </a>
            </div>
            <div className="mt-6 space-y-2 text-soft-grey">
              <p className="text-sm">
                Tel:{" "}
                <a
                  href={`tel:${CONTACT_PHONE_E164}`}
                  className="text-off-white hover:text-accent-1 transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-sm">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-off-white hover:text-accent-1 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-sm">
                Address:{" "}
                <a
                  href={CONTACT_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white hover:text-accent-1 transition-colors"
                >
                  {CONTACT_ADDRESS}
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left md:text-right">
            <Link
              href="/#work"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              WORK
            </Link>
            <Link
              href="/#services"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/#studio"
              className="text-2xl font-bold hover:text-accent-1 transition-colors"
            >
              STUDIO
            </Link>
            <Link
              href="/#contact"
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
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/company/rands-lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-1 transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://www.facebook.com/rands.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-1 transition-colors"
              >
                FACEBOOK
              </a>
              <a
                href="https://www.instagram.com/rands.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-1 transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
            <div className="flex gap-4 text-xs font-mono uppercase tracking-wide text-soft-grey">
              <Link
                href="/privacy-policy"
                className="hover:text-accent-1 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-accent-1 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-soft-grey/20 text-center md:text-right text-sm text-soft-grey">
          Developed with ❤️ by{" "}
          <a
            href="https://codezela.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-1 transition-colors font-semibold"
          >
            Codezela Technologies
          </a>
        </div>
      </div>
    </footer>
  );
}
