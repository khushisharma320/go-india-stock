import marketStories from "../../../data/marketStories.json";
import Image from "next/image";

const MarketStories = ({ props }) => {
    return (
        <div className={`w-64 my-16 mx-auto md:mx-4 lg:flex lg:flex-col ${props}`}>
            <h4 className="hidden text-red-800 bg-gray-300 lg:inline uppercase text-2xl">Market Stories</h4>

            {
                marketStories.map(({ id, image, title, content }) => {
                    return (
                        
                            <div key={id} className="shadow-sm mt-4 z-10">
                                <Image src={image} width={244} height={200} />
                                <div className="p-2 z-0 relative flex flex-col">
                                    <h4 className="font-bold">{title}</h4>
                                    <p className="text-xs">{content}</p>
                                </div>
                            </div>
                        
                    )

                })
            }
        </div>
    )
}

export default MarketStories;
