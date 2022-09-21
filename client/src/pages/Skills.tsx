import { Container, Typography } from "@mui/material"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import skillsJson from "../content/skills.json"

function Skills() {
  return (
    <Container>
      <Navbar />
      <Header value="Skills" />
      <Typography>
        {skillsJson.join(', ')}
      </Typography>
    </Container>
  )
}

export default Skills