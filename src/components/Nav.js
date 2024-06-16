import Image from "next/image";
import React from "react";

function Nav() {
    return (
        <nav>
            <div className="inline-flex w-40 p-2">
                <Image
                    src="/icon.png"
                    alt="NoPestsAllowed Logo"
                    className="dark:invert"
                    width={40}
                    height={40}
                    priority
                />
                <span className="pt-1 capitalize bold mx-2 inline-block align-middle text-2xl dark:text-gray-500">
                    NoPestsAllowed
                </span>
            </div>
        </nav>
    );
}

export default Nav;
