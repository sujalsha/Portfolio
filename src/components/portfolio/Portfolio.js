import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      {info.portfolio.map((project, index) => (
        <Box key={index} sx={{ my: 4 }}>
          <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
        </Box>
      ))}
    </Box>
  );
};
