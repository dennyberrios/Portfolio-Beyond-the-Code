import Image from "next/image";

interface TTechnicalMastery {
    image?: string;
    progressBar?: number;
    description?: string;
}

const TechnicalMastery: React.FC<TTechnicalMastery> = ({ image, progressBar, description }) => {
    return (
        <div className="flex items-center w-full">
            {image && (<Image src={image} alt="Logo da Linguagem de programação" className='w-10' />)}
            <div className="ml-5 w-full">
                <p className="text-end font-semibold text-white text-lg -mt-2">{description}</p>
                <div className="w-full h-5 border-2 border-dark-blue-gray rounded-full relative">
                    <div className={`bg-white h-full rounded-full duration-300 ease-in-out`} style={{ width: `${progressBar}%` }}></div>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold">{progressBar}%</span>
                </div>
            </div>
        </div>
    );
}

export default TechnicalMastery;