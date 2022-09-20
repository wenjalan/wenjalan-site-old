import { Collapse, Container, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import educationJson from "../content/education.json"

function Education() {
  return (
    <Container>
      <Stack>
        <Navbar />
        <Header value="Education" />
        <List>
          {educationJson.map(item => <ListEducationItem item={item} />)}
        </List>
      </Stack>
    </Container>
  )
}

interface EducationItem {
  title: string
  subtitle: string
  date: string
  bullets: string[]
}

interface ListEducationItemProps {
  item: EducationItem
}

function ListEducationItem(props: ListEducationItemProps) {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="h6">
              {props.item.title}
            </Typography>
          }
          secondary={
            <Typography variant="body1">
              {props.item.subtitle}
            </Typography>
          }
        />
      </ListItem>
      {props.item.bullets.map(bullet => {
        return (
          <ListItem
            sx={{
              marginLeft: "5%",
            }}
          >
            <ListItemText primary={bullet} />
          </ListItem>
        )
      })}
    </>
  )
}

export default Education