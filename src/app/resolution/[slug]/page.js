"use client";
import React, { useState, useEffect } from "react";

function Resolution({ params }) {
    console.log(params);
    const [deposition, setDeposition] = useState();
    console.log(process.env.NEXT_PUBLIC_ENV_BACKEND_URL);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_ENV_BACKEND_URL}/depositions/${params.slug}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                setDeposition(data.deposition);
            });
    }, []);

    // const deposition = params
    return (
        <div>
            <h1>Un déposition signalant la présence de nuisible à été réalisé à votre encontre !</h1>
            {deposition && (
                <div>
                    <div>depo name : {deposition.name}</div>
                    <div>depo created at : {deposition.createdAt}</div>
                    <div>depo address : {deposition.placeId.address}</div>
                    {/* <div>depo name : {deposition.name}</div> */}
                </div>
            )}
        </div>
    );
}

export default Resolution;
