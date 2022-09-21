import { Container, Stack, List } from "@mui/material"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { ResumeListItem } from "../components/ResumeListItem"
import projectsJson from "../content/projects.json"

function Projects() {
  return (
    <Container>
      <Stack>
        <Navbar />
        <Header value="Projects" />
        <List>
          {projectsJson.map(item => <ResumeListItem item={item} />)}
        </List>
      </Stack>
    </Container>
  )
}

export default Projects