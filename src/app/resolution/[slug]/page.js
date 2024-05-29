"use client";
import Map from "@/components/Map";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

function Resolution({ params }) {
    // console.log(params);
    const [deposition, setDeposition] = useState();
    const [files, setFiles] = useState([]);
    const [content, setContent] = useState("");
    const hiddenFileInput = useRef(null);

    const [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_ENV_BACKEND_URL}/depositions/${params.slug}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                setDeposition(data.deposition);
            });
    }, []);

    const handleResolutionSubmit = () => {
        console.log(files, content);
        const formData = new FormData();
        formData.append("content", content);
        files.map((file) => formData.append("files", file));

        fetch(`${process.env.NEXT_PUBLIC_ENV_BACKEND_URL}/depositions/${params.slug}/resolve`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.result === true) {
                    setMessageSent(true);
                } else {
                    setMessageSent(false);
                }
            })
            .catch((err) => console.error(err));
    };

    const handleFileBtnClick = (event) => {
        hiddenFileInput.current.click();
    };

    const handleFileChange = (event) => {
        const img = event.target.files[0];
        setFiles((files) => [...files, img]);
    };
    console.log(files);
    return (
        <div>
            <div className="sm:rounded-tl-md sm:rounded-tr-md bg-white px-4 py-5 shadow dark:bg-gray-800 sm:p-6">
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
                        No Pests Allowed
                    </h1>
                    <div>{deposition && <div>{deposition.placeId.address} is infested by pest</div>}</div>
                    <div className="col-span-6 mt-4 space-y-12">
                        <Map></Map>
                    </div>
                    <div className="col-span-6 mt-10 space-y-12">
                        <div className="col-span-6 sm:col-span-4">
                            The following visual proof has been submited against your location
                        </div>
                        <div>
                            {deposition &&
                                deposition.visualProofs.map((photo) => {
                                    console.log(photo.url);
                                    return (
                                        <Image
                                            src={photo.url}
                                            className="dark:invert"
                                            width={100}
                                            height={150}
                                            priority
                                        />
                                    );
                                })}
                        </div>
                        <div className="border-l-2 border-gray-300 bg-gray-200 bg-opacity-50 p-4 text-left font-light text-gray-500 dark:bg-gray-900">
                            This deposition is visible to all users ! By completing this form and after acceptance by
                            our administrators, the deposition will be hidden.
                        </div>
                        <div className="col-span-6 mt-4 sm:col-span-4">
                            <div className="mx-12 text-base font-semibold leading-4 text-gray-700 dark:text-gray-400">
                                To close this statement, please add proof of your action against pests (quote from
                                disinfection company, photograph of you fighting mechanically, etc).
                            </div>
                        </div>
                    </div>

                    {messageSent ? (
                        <div class="col-span-6 mt-4 sm:col-span-4">
                            <div class="mt-12">
                                <input
                                    type="file"
                                    ref={hiddenFileInput}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    style={{ display: "none" }}
                                />
                                <button
                                    className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
                                    type="button"
                                    onClick={handleFileBtnClick}
                                    aria-label="file upload"
                                >
                                    Upload file
                                </button>
                            </div>
                            <div class="mt-8">
                                <label
                                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                                    for="content"
                                >
                                    Dites nous quelques mots à propos de cette infestation
                                </label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    class="block h-44 w-full rounded-md border border-gray-300 text-gray-900 shadow-sm placeholder:text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-300 dark:placeholder:text-gray-500 sm:text-sm"
                                ></textarea>

                                <div className="text-right mt-8">
                                    <button
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        type="submit"
                                        onClick={handleResolutionSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="my-12 py-6 px-8 text-center border border-green-400 bg-green-100">
                            Votre message à bien été envoyé.
                        </div>
                    )}
                </div>
            </div>

            {/* <div>
                <h1>Un déposition signalant la présence de nuisible à été réalisé à votre encontre !</h1>
            {deposition && (
                <div>
                    <div>
                        <div>depo name : {deposition.name}</div>
                        <div>depo created at : {deposition.createdAt}</div>
                        <div>depo address : {deposition.placeId.address}</div>
                    </div>
                    <div>
                        <span>Download app</span> <span>Create account</span>
                    </div>
                </div>
            )}
            </div> */}
        </div>
    );
}

export default Resolution;
