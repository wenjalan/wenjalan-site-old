import { Typography } from "@mui/material"

interface HeaderProps {
  value: string
}

function Header(props: HeaderProps) {
  return (
    <Typography
      variant="h2"
      align="center"
    >
      {props.value}
    </Typography>
  )
}

export default Header