import { Container, Stack } from "@mui/material"
import Navbar, { NavbarItem } from "../components/Navbar"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"

function Home() {
  return (
    <Container
      sx={{ height: "100vh" }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Title value={"Alan Wen"} />
        <Subtitle value={"Welcome to my overengineered website. Please enjoy your stay."} />
        <Navbar />
      </Stack>
    </Container>
  )
}

export default Home