import { Stack, Divider, Button, Link } from "@mui/material"

export interface NavbarItem {
  label: string
  href: string
}

export interface NavbarProps {
  items: NavbarItem[]
}

const navItems: NavbarItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Awards & Certifications",
    href: "/awards",
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills",
    href: "/skills"
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
          {<Link href={item.href}>{item.label}</Link>}
        </Button>
      )}
    </Stack>
  )
}

export default Navbar