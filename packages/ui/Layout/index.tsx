import { Box } from "@mui/material"
import { FC } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout: FC = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Header />
    <Box sx={{ flexGrow: 1 }}>{children}</Box>
    <Footer />
  </Box>
)
