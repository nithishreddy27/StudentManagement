import React, { useState } from "react";
import { useUser } from "../../lib/hooks";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Image from "next/image";

export default function AddDetails() {
  const user = useUser();
  const u = JSON.stringify(user, null, 2);
  var username = "";
  if (user) {
    username = user.username;
  }

  const [position, setPosition] = useState("college");
  const [mess, setmess] = useState("");
  const [collegeId, setcollegeId] = useState("false");
  const [college, setCollege] = useState();

  async function checkCollege() {
    // console.log("inside college");
    const clgid = document.getElementById("clgid").value;
    console.log(clgid);
    if (clgid == "") {
      setmess("Invalid Paraphrase");
    } else {
      const res = await fetch(`./api/checkCollege/${clgid}`);
      const data = await res.json();
      if (res.status === 200) {
        setmess("invalid paraphrase");
        setcollegeId("false");
        setCollege("");
      } else {
        setmess("");
        setCollege(data.done.collegeName);
        setcollegeId("true");
      }
    }
  }

  return (
    <div>
      <img
        className="absolute bottom-0 w-[100%] object-cover"
        src={`https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png`}
        alt=""
        width={220}
        height={100}
      />
      {user && (
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-2xl relative grid h-screen place-items-center">
          <div className="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10 ">
            <form
              method="POST"
              action="../api/addDetails"
              className=" mx-auto my-10"
            >
              <div className="flex justify-between">
                <div className="">
                  <label htmlFor="username" className="text-sm font-semibold">
                    Signed in as:
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="mx-2 border-none "
                    id="username"
                    name="username"
                    onChange={() => {
                      console.log("dont change me");
                    }}
                  />
                </div>
                <div>
                  <Link
                    href="/api/logout"
                    className="text-orange-600 text-sm mx-2 font-semibold hover:text-orange-900 hover:underline"
                  >
                    Logout
                  </Link>
                </div>
              </div>
              <fieldset className="mt-4">
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="college"
                      name="notificationMethod"
                      value="college"
                      defaultChecked
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      onChange={(event) => {
                        setPosition("college");
                      }}
                    />
                    <label
                      htmlFor="college"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      college
                    </label>
                  </div>
                </div>
              </fieldset>

              {position == "college" && (
                <div>
                  <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        for="paraphrase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Create Paraphase
                      </label>
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="paraphrase"
                        id="paraphrase"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                    <p
                      className="mt-1 text-xs text-gray-500"
                      id="pharaphase-description"
                    >
                      Enter a passphrase that associates with your college
                      placement cell.
                    </p>
                    <p className="text-red-500">{mess}</p>
                  </div>

                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          for="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          for="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
                      <label
                        className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                        id="headlessui-listbox-label-1"
                      >
                        Gender
                        <span className="ml-1 mt-1 text-red-600 font-semibold">
                          *
                        </span>
                      </label>
                      <div className="relative -top-[23px] left-0">
                        <select
                          name="gender"
                          className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        >
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="rollnumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Roll Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        id="phone"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex">
                      <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                        College
                      </label>
                      <span className="relative top-4 ml-1 text-red-600 font-semibold">
                        *
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        name="college"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        value={college}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="designation"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Designation
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="designation"
                        name="designation"
                        required
                        type="text"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="collegewebsite"
                          className="block text-sm font-medium text-gray-700"
                        >
                          College Website
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="collegewebsite"
                        name="collegewebsite"
                        required
                        type="text"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="placementemail"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Placement Email address
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="placementemail"
                        name="placementemail"
                        type="email"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="placementphone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Placement Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="placementphone"
                        required
                        name="placementphone"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="principalemail"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Principal Email address
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="principalemail"
                        name="principalemail"
                        required
                        type="email"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          for="principalphone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Principal Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="principalphone"
                        id="principalphone"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 "
                      type="submit"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
