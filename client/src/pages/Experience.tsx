import { Container, List, Stack } from "@mui/material"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { ResumeListItem } from "../components/ResumeListItem"
import experienceJson from "../content/experience.json"

function Experience() {
  return (
    <Container>
      <Stack>
        <Navbar />
        <Header value="Experience" />
        <List>
          {experienceJson.map(item => <ResumeListItem item={item} />)}
        </List>
      </Stack>
    </Container>
  )
}

export default Experience