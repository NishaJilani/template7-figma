"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/UIUX/Card";

export default function Page() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#block1, #block2, #block3, #block4, #block5"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              Koenigsegg{" "}
              <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sport</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/car-1.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-1.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $99.00/
              <span className="text-sm font-medium text-gray-500">day</span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              NissanGT - R{" "}
              <Image src={"/white-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sport</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/car-2.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-2.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $80.00/
              <span className="text-sm font-medium text-gray-500">day</span>
              <br />
              <span className="text-sm font-medium text-gray-500 line-through">
                $100.00
              </span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              Rolls-Royce{" "}
              <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sedan</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/Car-3.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-3.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $96.00/
              <span className="text-sm font-medium text-gray-500">day</span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              NissanGT - R{" "}
              <Image src={"/white-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sport</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/Car-4.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-4.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $80.00/
              <span className="text-sm font-medium text-gray-500">day</span>
              <br />
              <span className="text-sm font-medium text-gray-500 line-through">
                $100.00
              </span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <section id="block4" className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl ml-10 mt-4">
          Recommendation Car
        </h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-5.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-5.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $72.00/
                <span className="text-sm font-medium text-gray-500">day</span>
                <br />
                <span className="text-sm font-medium text-gray-500 line-through">
                  $80.00
                </span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V{" "}
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-6.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-6.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-7.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-7.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $74.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V{" "}
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-8.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-8.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-9.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-9.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $76.00/
                <span className="text-sm font-medium text-gray-500">day</span>
                <br />
                <span className="text-sm font-medium text-gray-500 line-through">
                  $80.00
                </span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS{" "}
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-10.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-10.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-11.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-11.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $74.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-12.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-12.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <br />
      <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              Koenigsegg{" "}
              <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sport</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/car-1.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-1.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $99.00/
              <span className="text-sm font-medium text-gray-500">day</span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              NissanGT - R{" "}
              <Image src={"/white-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sport</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/car-2.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-2.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $80.00/
              <span className="text-sm font-medium text-gray-500">day</span>
              <br />
              <span className="text-sm font-medium text-gray-500 line-through">
                $100.00
              </span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              Rolls-Royce{" "}
              <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sedan</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/Car-3.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-3.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $96.00/
              <span className="text-sm font-medium text-gray-500">day</span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              NissanGT - R{" "}
              <Image src={"/white-heart.png"} alt="" width={20} height={20} />
            </CardTitle>
            <CardDescription>Sport</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={"/Car-4.png"} alt="" width={220} height={68} />
            <Image src={"/Spec-4.png"} alt="" width={256} height={24} />
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold leading-none tracking-tight">
              $80.00/
              <span className="text-sm font-medium text-gray-500">day</span>
              <br />
              <span className="text-sm font-medium text-gray-500 line-through">
                $100.00
              </span>
            </p>
            <Link href={"/DetailPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <section id="block4" className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl ml-10 mt-4">
          Recommendation Car
        </h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-5.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-5.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $72.00/
                <span className="text-sm font-medium text-gray-500">day</span>
                <br />
                <span className="text-sm font-medium text-gray-500 line-through">
                  $80.00
                </span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V{" "}
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-6.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-6.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-7.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-7.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $74.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V{" "}
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-8.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-8.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-9.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-9.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $76.00/
                <span className="text-sm font-medium text-gray-500">day</span>
                <br />
                <span className="text-sm font-medium text-gray-500 line-through">
                  $80.00
                </span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS{" "}
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-10.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-10.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite{" "}
                <Image src={"/Red-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-11.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-11.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $74.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS
                <Image src={"/white-heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car-12.png"} alt="" width={220} height={68} />
              <Image src={"/Spec-12.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none tracking-tight">
                $80.00/
                <span className="text-sm font-medium text-gray-500">day</span>
              </p>
              <Link href={"/DetailPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
