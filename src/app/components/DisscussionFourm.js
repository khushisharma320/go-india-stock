import { CiHeart, CiChat1, CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import disscusion from "../../../data/disscussion.json";
import Image from "next/image";


const DisscussionFourm = ({ props }) => {
    return (
        <>
            <div className={`p-2 xl:p-5 flex justify-center flex-col items-center md:ml-10 lg:ml-40 ${props}`}>
                <h4 className="hidden lg:text-red-800 lg:bg-gray-300 lg:inline lg:uppercase lg:text-2xl">Disscussion Fourm</h4>



                {
                    disscusion.map(({ id, user, userName, button, time, content, likes, views, comments }) => {
                        return (
                            
                                <div key={id} className="shadow-lg shadow-gray-400 lg:h-40 w-[400px] lg:w-[750px] p-4 mt-6">
                                    <div className="flex justify-between">
                                        <div className="flex gap-4 text-sm">
                                            <Image src={user} width={40} height={40} />
                                            <span className="font-bold">{userName}</span>
                                            <button className="bg-blue-950 text-white w-20 rounded-2xl">{button}</button>
                                        </div>
                                        <h6 className="text-sky-500 text-xs font-bold">{time}</h6>

                                    </div>
                                    <div className="text-sm pt-2 z-10">
                                        {content}
                                    </div>
                                    <div className="flex justify-between pt-2 z-10">
                                        <span className="flex items-center"><CiHeart />{likes}</span>
                                        <span className="flex items-center"><FaRegEye />{views}</span>
                                        <span className="flex items-center"><CiChat1 />{comments}</span>
                                        <span className="flex items-center"><CiShare2 />share</span>
                                    </div>
                                </div>
                            
                        )

                    })
                }

            </div>
        </>
    )
}

export default DisscussionFourm
