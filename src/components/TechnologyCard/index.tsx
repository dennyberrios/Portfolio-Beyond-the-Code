import Image from 'next/image';

interface TTechnologyCard {
    image?: string;
    title?: string;
    description?: string;
}

const TechnologyCard: React.FC<TTechnologyCard> = ({image, title}) => {
    return ( 
        <div className='w-auto flex flex-col justify-center items-center rounded-xl mt-5 hover:-translate-y-4 transition duration-300 ease-in-out '>
            {image && <Image className='w-24' src={image} alt="Logo da Linguagem de programação" />}
            <h3 className='text-dark-grey text-xl font-semibold mt-5 mb-2 whitespace-nowrap'>{title}</h3>
        </div>
     );
}
 
export default TechnologyCard;
