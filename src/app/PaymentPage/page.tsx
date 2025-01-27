import React from "react";
import { Input } from "@/app/components/UIUX/Input";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/UIUX/Card";

export default function Page() {
  return (
    <div>
      <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        <div className="form w-full lg:w-2/3 space-y-4">
          <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Billing Info</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>Please enter your billing info</h1>
                <h1>Step 1 of 4</h1>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
              <div className="w-full flex flex-wrap gap-4">
                <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-bold" htmlFor="name">
                    Name
                  </label>
                  <Input
                    placeholder="Your Name"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-bold" htmlFor="num">
                    Phone Number
                  </label>
                  <Input
                    placeholder="Your Phone Number"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-4">
                <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-bold" htmlFor="add">
                    Address
                  </label>
                  <Input
                    placeholder="Your Address"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-bold" htmlFor="city">
                    Town/City
                  </label>
                  <Input
                    placeholder="Your City"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Rental Info</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>Please select your rental date</h1>
                <h1>Step 2 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="first">
                <Image
                  src={"/Pickup1.png"}
                  alt="Pick Up"
                  width={92}
                  height={20}
                />
              </div>
              <div className="sec w-full flex flex-wrap gap-4">
                <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-bold" htmlFor="add">
                    Locations
                  </label>
                  <select
                    title="city"
                    className="bg-[#cbccce] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your City</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Bali">Bali</option>
                  </select>
                </div>
                <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-bold" htmlFor="city">
                    Date
                  </label>
                  <select
                    title="cty"
                    className="bg-[#cbccce] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your Date</option>
                    <option value="2025-01-27">January 27, 2025</option>
                    <option value="2025-01-28">January 28, 2025</option>
                    <option value="2025-01-29">January 29, 2025</option>
                    <option value="2025-01-30">January 30, 2025</option>
                  </select>
                </div>
              </div>
              <div className="third w-full">
                <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                  <label className="font-bold" htmlFor="city">
                    Time
                  </label>
                  <select
                    title="cit"
                    className="bg-[#cbccce] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your Time</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                  </select>
                </div>
              </div>
              <div className="fourth">
                <Image
                  src={"/Dropoff1.png"}
                  alt="Drop Off"
                  width={104}
                  height={20}
                />
              </div>
              <div className="sec w-full flex flex-wrap gap-4">
                <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-bold" htmlFor="add">
                    Locations
                  </label>
                  <select
                    title="city"
                    className="bg-[#cbccce] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your City</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Bali">Bali</option>
                  </select>
                </div>
                <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-bold" htmlFor="city">
                    Date
                  </label>
                  <select
                    title="cty"
                    className="bg-[#cbccce] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your Date</option>
                    <option value="">Select Your Date</option>
                    <option value="2025-01-27">January 27, 2025</option>
                    <option value="2025-01-28">January 28, 2025</option>
                    <option value="2025-01-29">January 29, 2025</option>
                    <option value="2025-01-30">January 30, 2025</option>
                  </select>
                </div>
              </div>
              <div className="third w-full">
                <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                  <label className="font-bold" htmlFor="city">
                    Time
                  </label>
                  <select
                    title="cit"
                    className="bg-[#cbccce] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your Time</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around p-6">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>Please enter your payment method</h1>
                <h1>Step 3 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 bg-[#f6f7f9] rounded-xl pt-6">
              <div className="first flex justify-between">
                <Image
                  src={"/Credit Card.png"}
                  alt="Pick Up"
                  width={92}
                  height={20}
                />
                <Image src={"/Visa.png"} alt="Visa" width={92} height={20} />
              </div>
              <div className="w-full flex flex-wrap gap-4">
                <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-bold" htmlFor="name">
                    Card number
                  </label>
                  <Input
                    placeholder="Card number"
                    className="bg-white px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-bold" htmlFor="num">
                    Expration date
                  </label>
                  <Input
                    placeholder="DD/MM/YY"
                    className="bg-white px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-4">
                <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-bold" htmlFor="add">
                    Card Holder
                  </label>
                  <Input
                    placeholder="Card number"
                    className="bg-white px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-bold" htmlFor="city">
                    CVC
                  </label>
                  <Input
                    placeholder="CVC"
                    className="bg-white px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
            </CardContent>

            <div className="flex flex-col gap-4">
              <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    className="h-5 w-5 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-lg font-medium">PayPal</span>
                </div>
                <Image
                  src={"/PayPal.png"}
                  alt="PayPal"
                  width={100}
                  height={24}
                />
              </label>

              <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className="h-5 w-5 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-lg font-medium">Bitcoin</span>
                </div>
                <Image
                  src={"/Bitcoin.png"}
                  alt="Bitcoin"
                  width={94}
                  height={20}
                />
              </label>
            </div>
          </Card>

          <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Confirmation</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>
                  We are getting to the end. Just a few clicks and your rental
                  is ready
                </h1>
                <h1>Step 4 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                  <input
                    type="checkbox"
                    name="payment"
                    value="paypal"
                    className="h-5 w-5 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-lg font-medium">
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                  </span>
                </label>

                <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                  <input
                    type="checkbox"
                    name="payment"
                    value="credit-card"
                    className="h-5 w-5 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-lg font-medium">
                    I agree with our terms and conditions and privacy policy.
                  </span>
                </label>
              </div>
              <Link href={"/UserPage"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
                  Rent Now
                </button>
              </Link>

              <div>
                <Image
                  src={"/ic-security-safety.png"}
                  alt="Safe Data"
                  width={32}
                  height={32}
                  className="mb-3"
                />
                <p className="text-lg font-medium">All your data are safe</p>
                <h1 className="text-sm text-muted-foreground">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </h1>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="rental-summary w-full lg:w-1/3 lg:ml-8">
          <Image
            src={"/Rental Summary.png"}
            alt="Rental Summary"
            width={492}
            height={568}
            className="w-full h-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
