import { Collapse, Container, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { ResumeListItem } from "../components/ResumeListItem"
import educationJson from "../content/education.json"

function Education() {
  return (
    <Container>
      <Stack>
        <Navbar />
        <Header value="Education" />
        <List>
          {educationJson.map(item => <ResumeListItem item={item} />)}
        </List>
      </Stack>
    </Container>
  )
}

export default Education