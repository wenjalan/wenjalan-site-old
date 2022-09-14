import { Typography } from "@mui/material"

export interface SubtitleProps {
  value: string
}

function Subtitle(props: SubtitleProps) {
  return (
    <Typography
      variant="subtitle1"
      align="center"
    >
      {props.value}
    </Typography>
  )
}

export default Subtitle