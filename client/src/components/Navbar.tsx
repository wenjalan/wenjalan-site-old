import { Stack, Divider, Button } from "@mui/material"

export interface NavbarItem {
  label: string
  href: string
}

export interface NavbarProps {
  items: NavbarItem[]
}

const navItems: NavbarItem[] = [
  {
    label: "Awards & Certifications",
    href: "#"
  },
  {
    label: "Education",
    href: "#",
  },
  {
    label: "Experience",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Skills",
    href: "#"
  }
]

function Navbar() {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      divider={<Divider orientation="vertical" flexItem />}
    >
      {navItems.map(item =>
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