import Image from 'next/image';

interface TTechnologyCard {
    image?: string;
    title?: string;
    description?: string;
}

const TechnologyCard: React.FC<TTechnologyCard> = ({image, title, description}) => {
    return ( 
        <div className='w-[300px] hover:rotate-6 flex flex-col justify-center items-center rounded-xl bg-light-blue hover:shadow-lg mt-5 p-5 hover:-translate-y-4 transition duration-300 ease-in-out brightness-90 hover:brightness-100'>
            {image && <Image className='w-1/3' src={image} alt="Logo da Linguagem de programação" />}
            <h3 className='text-white text-xl font-semibold mt-5 mb-2'>{title}</h3>
            <p className='text-golden-yellow text-lg'>{description}</p>
        </div>
     );
}
 
export default TechnologyCard;