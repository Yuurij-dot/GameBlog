import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState ([
        {
          type_post:"Games",
          date_post:"May 27, 2023",
          title_post:"Primeiro Jogo Feito",
          desc_post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales faucibus mi, eu ullamcorper neque pulvinar a. In eget efficitur velit. Nullam lobortis ligula eget egestas faucibus. Nunc porttitor lectus at ultricies commodo. Suspendisse urna arcu, commodo et hendrerit et, commodo ut sapien. Nulla ultrices urna risus, a pretium justo ultricies sed. Vivamus non lobortis justo, sed ullamcorper magna. Etiam in sagittis turpis, non egestas massa.",
          image: '../src/images/minecraft.jpg',
        },
        
        {
            type_post:"Games",
            date_post:"May 27, 2023",
            title_post:"Tutorial de Minecraft 1",
            desc_post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales faucibus mi, eu ullamcorper neque pulvinar a. In eget efficitur velit. Nullam lobortis ligula eget egestas faucibus. Nunc porttitor lectus at ultricies commodo. Suspendisse urna arcu, commodo et hendrerit et, commodo ut sapien. Nulla ultrices urna risus, a pretium justo ultricies sed. Vivamus non lobortis justo, sed ullamcorper magna. Etiam in sagittis turpis, non egestas massa.",
            image: '../src/images/minecraft.jpg',
          }
    ])

    return (
        <PostContext.Provider value={ {posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}