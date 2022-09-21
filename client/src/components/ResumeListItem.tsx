import { ListItem, ListItemText, Stack, Typography } from "@mui/material"

export interface ResumeItem {
  title: string
  subtitle: string
  date: string
  bullets: string[]
}

export interface ResumeListItemProps {
  item: ResumeItem
}

export function ResumeListItem(props: ResumeListItemProps) {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Stack direction="row">
              <Typography variant="h6">
                {props.item.title}
              </Typography>
              <Typography
                variant="h6"
                align="right"
                sx={{ flex: 1 }}
              >
                {props.item.date}
              </Typography>
            </Stack>
          }
          secondary={
            props.item.subtitle ?
              <Typography variant="body1">{props.item.subtitle}</Typography> :
              null
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