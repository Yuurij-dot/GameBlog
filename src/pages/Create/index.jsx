import React from "react"
import { useState, useContext } from "react"
import { PostContext } from "../../Context/PostContext"

import Header from "../../components/header"
import Container from "../../components/container"
import Navigation from "../../components/navigation"
import Post from "../../components/Post"



export default function CreatePost() {

    const [titulo, setTitulo] = useState('');
    const [desc, setDesc] = useState('');

    const handleTitulo = (e) => {
        setTitulo(e.target.value)
    }
    
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const {posts, setPosts} = useContext(PostContext)

    function createNewPost( ) {
        titlePost = titulo
        descPost = desc

        newPost = {
            type_post:"Games",
            date_post:"May 27, 2023",
            title_post: titlePost,
            desc_post: descPost,
            image: '../src/images/minecraft.jpg',
        }
        setPosts(...posts, newPost)
        
    }

    //       type_post:"Games",
    //       date_post:"May 27, 2023",
    //       title_post:"Primeiro Jogo Feito",
    //       desc_post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales faucibus mi, eu ullamcorper neque pulvinar a. In eget efficitur velit. Nullam lobortis ligula eget egestas faucibus. Nunc porttitor lectus at ultricies commodo. Suspendisse urna arcu, commodo et hendrerit et, commodo ut sapien. Nulla ultrices urna risus, a pretium justo ultricies sed. Vivamus non lobortis justo, sed ullamcorper magna. Etiam in sagittis turpis, non egestas massa.",
    //       image: '../src/images/minecraft.jpg',
    return(
        <Container>
            <Header className="flex">
                <Navigation/>
            </Header>

            <div className="flex flex-col items-center">
                <div className="mt-14">
                    <h1 className="font-bold text-primary text-3xl">COMO SERÁ SEU POST</h1>
                </div>

                <div className="w-full max-w-lg mt-7">
                    <form action="">
                        <div className="flex flex-col mb-4">
                            <span className="font-semibold text-primary mb-2">Titulo da Postagem</span>
                            <input className=" h-10 rounded px-3 py-1 outline-none bg-second text-primary" onChange={handleTitulo} type="text" placeholder='Meu primeiro post...'/>
                        </div>

                        <div className="flex flex-col mb-4">
                            <span className="font-semibold text-primary mb-2">Descrição</span>
                            <textarea className="h-52 resize-none rounded px-3 py-1 outline-none bg-second text-primary" onChange={handleDesc} name="desc-post" cols="30" rows="10" placeholder="Detalhes da sua postagem..."></textarea>
                        </div>
                        
                        <div className="flex justify-center">
                            <button onClick={createNewPost} className="bg-primary text-white p-5 rounded font-bold">FINALIZAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}