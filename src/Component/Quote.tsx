import { Link } from "react-router-dom";

export const Quote = ({
    children, clinet, url, tweet
}: Readonly<{
    children: React.ReactNode;
    clinet: string;
    url: string;
    tweet: string
}>) => {
    return <div className={`flex items-end gap-2 md:gap-4 w-full mb-4`} >
        <img src={url} className="w-10 rounded-full" alt="" />
        <div className={`px-3 md:px-6 py-1.5 md:py-3 bg-[#282828] text-white rounded-tl-2xl rounded-r-2xl flex flex-col`}>
            <Link className="text-blue hover:underline" to={tweet}>{clinet}</Link>
            {children}
        </div>
    </div>
}