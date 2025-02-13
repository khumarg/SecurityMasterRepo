import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import GetAllEquities from "./equities/GetAllEquities";
import GetAllBonds from './bonds/GetAllBonds';

const CardLayout = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 5, px: 2, overflowX: "auto", width: "100vw" }}>
      <Box sx={{ display: "flex", minWidth: "1200px", gap: 2 }}>
        <Card sx={{ minWidth: 600, boxShadow: 3, borderRadius: 2, flex: 1, overflow: "hidden" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              All Equities
            </Typography>
            <Paper sx={{ boxShadow: 1, borderRadius: 1, maxWidth: "100%", maxHeight: 400, overflow: "auto" }}>
              <GetAllEquities />
            </Paper>
          </CardContent>
        </Card>
        
        <Card sx={{ minWidth: 600, boxShadow: 3, borderRadius: 2, flex: 1, overflow: "hidden" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              All Bonds
            </Typography>
            <Paper sx={{ boxShadow: 1, borderRadius: 1, maxWidth: "100%", maxHeight: 400, overflow: "auto" }}>
              <GetAllBonds />
            </Paper>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CardLayout;
