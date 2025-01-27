"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/UIUX/Card";

export default function Page() {
  return (
    <div className="w-full flex">
      <div className="first hidden sm:flex w-[20%]">
        <Sidebar />
      </div>

      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-serif">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <Image
            src={"/Pickup.png"}
            alt="pickup"
            width={450}
            height={132}
            className="w-[250px] sm:w-[270px] md:w-[350px] lg:w-[450px]"
          />
          <Link href={"#"}>
            <Image
              src={"/Switch.png"}
              alt="switch"
              width={100}
              height={100}
              className="w-[100px] sm:w-[30px] md:w-[80px]"
            />
          </Link>
          <Image
            src={"/Drop - Off.png"}
            alt="DropOff"
            width={450}
            height={132}
            className="w-[250px] sm:w-[270px] md:w-[350px] lg:w-[450px]"
          />
        </section>

        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
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
                  <Image
                    src={"/white-heart.png"}
                    alt=""
                    width={20}
                    height={20}
                  />
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
                  <Image
                    src={"/white-heart.png"}
                    alt=""
                    width={20}
                    height={20}
                  />
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
                  <Image
                    src={"/white-heart.png"}
                    alt=""
                    width={20}
                    height={20}
                  />
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
          </div>
        </section>

        <section className="button w-full text-center">
          <button className="bg-[#3563e9] px-4 py-2 hover:bg-[#809beb] text-white rounded-md mt-5">
            {" "}
            Show More Cars
          </button>
        </section>
        <Footer />
      </div>
    </div>
  );
}
