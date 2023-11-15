import Logo from "../logo"

export default function Navigation(props) {
    return(

      <div className="flex justify-between items-center">
        <Logo/>
        <ul className="flex gap-5">
          <li><a href="/" className="font-bold hover:opacity-25 transition-all">Home</a></li>
          <li><a href="/post" className="font-bold hover:opacity-20 transition-all">Posts</a></li>
          <li><a href="/create_post" className="font-bold hover:opacity-25 transition-all">Criar uma postagem</a></li>
        </ul>
      </div> 

        
    )
}