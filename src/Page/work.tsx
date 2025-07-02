import { projects } from "../config/menu"
import { Link } from "react-router-dom"
import { FaLink } from "react-icons/fa";
import { filter } from "../config/menu"
import { useState } from "react";

export const Work = () => {
    const [index, setIndex] = useState(0);
    return <div className="mt-10">
        { filter.map((val, i) => <button className={`border rounded px-2 text-white m-1 hover:bg-white/30 transition ${index === i ? "bg-white/30": ""}`} onClick={() => setIndex(i)}>{val.name}</button>) }

        <div className='py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-4'>
            {filter[index].list.map((val, index) =>
                <div key={index} className="project-block relative border border-dashed border-zinc-400 px-4 py-4 bg-[#0d1d31] flex flex-col justify-between rounded-lg">
                    <Link to={projects[val].links[0].link} className="text-left text-white text-md" target="block">
                        <div className="flex items-center hover:underline"><FaLink className="inline-block mr-2 text-sm" /> {projects[val].title}</div>
                    </Link>
                    <img src={projects[val].image} alt="" className="mt-3 w-full object-cover rounded-md" />
                    <div className="w-full mt-3">
                        <p className="text-sm text-lime-200 text-start leading-relaxed">{projects[val].description}</p>
                    </div>
                    {/* <div className="w-full mt-3">
                        <p className="text-sm sm:text-md text-left text-zinc-400">{projects[val].stack.join(' | ')}</p>
                    </div> */}
                    <ul className="flex flex-wrap w-full mt-3 gap-1.5 first:marker:hidden text-white">
                        {projects[val].stack.map((v, index) =>
                            <li key={index + "work"} className="flex items-center text-sm">
                                <span className=" border rounded px-2">{v}</span>
                                {/* {index !== val.stack.length - 1 && <span className="ml-1.5 opacity-40">•</span>} */}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    </div>
}