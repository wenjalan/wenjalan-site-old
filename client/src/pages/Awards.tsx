import { Box, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import awardJson from "../content/awards_certifications.json"

interface Award {
  title: string,
  description: string,
  date: string
}

function Awards() {
  return (
    <Container>
      <Stack>
        <Navbar />
        <Header value="Awards & Certifications" />
        <List>
          {awardJson.map(item => <ListAwardItem item={item} />)}
        </List>
      </Stack>
    </Container>
  )
}

interface ListAwardItemProps {
  item: Award
}

function ListAwardItem(props: ListAwardItemProps) {
  return (
    <ListItem>
      <ListItemText primary={props.item.title} secondary={props.item.description} />
      <ListItemText
        primary={
          <Typography align="right">
            {props.item.date}
          </Typography>
        } 
      />
    </ListItem>
  )
}

export default Awards