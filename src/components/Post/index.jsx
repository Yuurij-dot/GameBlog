import img from '../../images/minecraft.jpg'

export default function Post(props) {

    return(
        <div className="w-full border-t py-10 ">
            <div className='select-none'>

                <span className='bg-second p-2 rounded text-primary font-bold'>{props.type_post}</span>
                <span className='ml-3 text-primary font-semibold'>{props.date_post}</span>      
            </div>

            <div className=' flex items-center '>
                <div className='flex flex-col'>
                    <a href='/postagem' className="text-primary font-bold text-3xl mb-3 hover:opacity-75 transition-all">{props.title_post}</a>
                    
                    <span className="text-primary text-x1">{props.desc_post}</span>   
                </div>

                <img className='w-2/4 rounded ml-8' src={props.image} />
                
            </div>   
        </div>
    )
}