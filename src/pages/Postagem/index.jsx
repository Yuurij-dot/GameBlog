import React from "react";

import Header from "../../components/header";
import Container from "../../components/container";
import Navigation from "../../components/navigation";

export default function Postagem() {
    return(
        <Container>
            <Header>
                <div className="w-full max-w-6xl m-auto">
                    <Navigation/>
                </div>
            </Header>

            <main className="w-full max-w-6xl m-auto mt-5">
                
            </main>
        </Container>
    )
}