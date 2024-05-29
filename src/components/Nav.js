import Image from "next/image";
import React from "react";

function Nav() {
    return (
        <nav>
            <div className="">
                <Image
                    src="/icon.png"
                    alt="NoPestsAllowed Logo"
                    className="dark:invert"
                    width={40}
                    height={40}
                    priority
                />
            </div>
        </nav>
    );
}

export default Nav;
