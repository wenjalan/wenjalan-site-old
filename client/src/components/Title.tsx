import { Typography } from "@mui/material"

export interface TitleProps {
  value: string
}

function Title(props: TitleProps) {
  return (
    <Typography
      variant="h1"
      align="center"
    >
      {props.value}
    </Typography>
  )
}

export default Title