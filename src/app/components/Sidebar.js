"use client";
import { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import sidebar from "../../../data/sidebar.json"

const Sidebar = () => {
    const [show, setShow] = useState(false);

    return (

        <div className="flex absolute top-4 lg:relative z-50">

            {show && <div className="">
                <ul className="h-screen w-60 bg-blue-950 text-white pl-10 pt-10 flxed">
                    <h2 className="text-2xl">Hello User</h2>
                    {
                        sidebar.map(({ id, name }) => {
                            return (

                                <li key={id} className="hover:font-semibold pt-6">{name}</li>
                            )
                        })
                    }
                </ul></div>}
            <div onClick={() => setShow(!show)} className="bg-blue-950 w-4 h-16 flex items-center mt-56 z-50"><span className="text-white"><MdOutlineArrowRight /></span></div>
        </div>





    )
}

export default Sidebar;
