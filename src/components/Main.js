import React from "react";

function Main({ children }) {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>;
}

export default Main;
