import Link from 'next/link';

interface BBlogCard {
    title?: string;
    description?: string;
}

const BlogCard: React.FC<BBlogCard> = ({title, description}) => {
    return ( 
        <div className='w-[300px] flex flex-col justify-center items-center rounded-xl mt-5 py-6 px-7 bg-light-grey shadow-md'>
            <h3 className='text-dodger-blue text-[1.65rem] font-semibold mb-2 whitespace-nowrap text-start w-full'>{title}</h3>
            <p className='text-dark-grey text-start text-lg'>{description}</p>
            <Link href={"/"} className='text-tomato-red text-start w-full mt-5 font-semibold'>Ler Mais</Link>
        </div>
     );
}
 
export default BlogCard;
