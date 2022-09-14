import { Stack, Divider, Button } from "@mui/material"

export interface NavbarItem {
  label: string
  href: string
}

export interface NavbarProps {
  items: NavbarItem[]
}

function Navbar(props: NavbarProps) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      divider={<Divider orientation="vertical" flexItem />}
    >
      {props.items.map(item =>
        <Button 
          variant="text"
          key={item.label}  
        >
          {item.label}
        </Button>
      )}
    </Stack>
  )
}

export default Navbar