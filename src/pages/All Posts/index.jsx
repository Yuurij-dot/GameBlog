import Header from "../../components/header"
import Logo from "../../components/logo"
import Navigation from "../../components/navigation"
import Container from "../../components/container"

export default function PostPage() {
    return(
        <Container>
            <Header>
                <Navigation/>
            </Header>

            <h1>All Posts</h1>
        </Container>
    )
}