import React from "react";

import { useContext } from "react";
import { PostContext } from "../../Context/PostContext";

import Post from "../../components/Post";
import Navigation from "../../components/navigation";
import Header from "../../components/header";
import Container from "../../components/container";


export default function Home() {

  const {posts, setPosts} = useContext(PostContext)


  return(
    <Container>
        <Header>

            <div className="w-full max-w-6xl m-auto">
              <Navigation/>

              
              <div className="mt-60 mb-32">
                  <h1 className="font-semibold text-lg">Hello</h1>
                  <span className="font-bold text-4xl" >Welcome to the best blog of games! Enjoy and join this community.</span>
              </div>
            </div>
        </Header>

      <main className="w-full max-w-6xl m-auto mt-32">
        <h1 className="font-bold text-3xl text-primary mb-20">Popular Posts</h1>
        
        {
          posts.map ( (post, index) => {
            return (
              <div key= {index}>
                <Post 
                  type_post= {post.type_post}
                  date_post={post.date_post}
                  title_post={post.title_post}
                  desc_post={post.desc_post}
                  image= {post.image}
                >

                </Post>
              </div>
            )
          })
        }
        {/* <Post
          type_post="Games"
          date_post="May 27, 2023" 
          title_post="Primeiro Jogo Feito"
          desc_post="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales faucibus mi, eu ullamcorper neque pulvinar a. In eget efficitur velit. Nullam lobortis ligula eget egestas faucibus. Nunc porttitor lectus at ultricies commodo. Suspendisse urna arcu, commodo et hendrerit et, commodo ut sapien. Nulla ultrices urna risus, a pretium justo ultricies sed. Vivamus non lobortis justo, sed ullamcorper magna. Etiam in sagittis turpis, non egestas massa."
          image= '../src/images/minecraft.jpg'
        /> */}

      </main>

      <div className="w-full flex justify-center items-center bg-primary py-24 rounded text-white">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl mb-5">Are you a gaming expert? Or have any doubts.</h1>
          <a href='/create_post' className="text-center bg-third rounded p-3 text-primary font-bold">CREATE A POST NOW</a>
        </div>
      </div>
    </Container>
  )
}