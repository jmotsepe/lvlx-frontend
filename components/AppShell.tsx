/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { IoLocation } from "react-icons/io5";
import { GrMail } from "react-icons/gr";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  //
  function Menu() {
    return (
      <>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Link className="text-sm" href="/">
            Home
          </Link>
          <Link className="text-sm" href="/employer">
            Employer
          </Link>
          <Link className="text-sm" href="/youth">
            Youth
          </Link>
          <Link className="text-sm" href="/sponsor">
            Sponsor
          </Link>
          {/* <Link className="text-sm" href="/bursaries">
            Bursaries
          </Link> */}
          <Link className="text-sm" href="/contact">
            Contact Us
          </Link>

          <a
            href="https://admin.lvlx.org"
            className={buttonVariants({
              size: "lg",
              className: "w-full md:hidden",
            })}
          >
            Sign In
          </a>
        </div>
      </>
    );
  }

  return (
    <div>
      <nav className="shadow-md sticky top-0 bg-white z-50">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between gap-4">
          <Link href="/">
            <Image src={"/logo.png"} height={5} width={140} alt="logo1" />
          </Link>
          <div className="hidden md:inline">
            <Menu />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <BiMenu size={35} className="md:hidden" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <Separator />
                <Menu />
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <a
            href="https://admin.lvlx.org"
            className={cn(buttonVariants({ size: "lg" }), "hidden md:flex")}
          >
            Sign In
          </a>
        </div>
      </nav>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-black py-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white max-w-7xl w-full mx-auto gap-10 px-4 py-10">
          <div>
            <img src="/lvlx-dark.png" className="h-20 w-20 object-contain" />
          </div>
          <div>
            <div className="flex flex-col items-left gap-2">
              <Link href="/employer">Employer</Link>
              <Link href="/youth">Youth</Link>
              <Link href="/sponsor">Sponsor</Link>
              {/* <Link href="/bursaries">Bursaries</Link> */}
              <Link href="/data-policy">Data Policy</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col items-left gap-2">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61553483842466"
              className="flex items-center  gap-2"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a
              href="https://twitter.com/Lvlxyouth"
              target="_blank"
              className="flex items-center  gap-2"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/lvlx-youth/"
              className="flex items-center  gap-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-col items-left gap-3">
            <div className="flex items-left gap-2">
              <IoLocation className="w-5 h-5 " />
              <span>135 Patricia Road, Sandown, Gauteng, 2196</span>
            </div>
            <div className="flex items-left gap-2">
              <GrMail className="" />
              <a href="mailto:info@lvlxyouth.org" className=" no-underline">
                {" "}
                info@lvlxyouth.org
              </a>
            </div>
            <div className="flex items-left gap-2">
              <FaPhoneAlt className="" />
              <span>+27 11 884 8010</span>
            </div>
          </div>
        </div>
        <h6 className="px-4 mt-4 text-sm text-white text-center">
          All Rights Reserved - {new Date().getFullYear()}
        </h6>
      </footer>
    </div>
  );
};

export default AppShell;
