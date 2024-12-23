import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs"; //ADDITION
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CustomerModal from "modals/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useOrderContext } from "../../../context/OrderContext";

const LogisticsForm = () => {
  const { orderId, generateOrderId } = useOrderContext();
  const [logisticsForms, setLogisticsForms] = useState([
    {
      orderId: 1,
      itemsDispatched: "",
      materialDispatchedDate: "",
      courierPartnerDetails: "",
      docketNumber: "",
      paymentType: "",
      amount: "",
    },
  ]);
  const handleAddLogisticsForm = () => {
    setLogisticsForms([...logisticsForms, { id: Date.now() }]);
  };
  const handleRemoveLogisticsForm = (id) => {
    setLogisticsForms(logisticsForms.filter((form) => form.id !== id));
  };
  return (
    <Grid item xs={12} md={12}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} px={2}>
        <Typography variant="h4" fontWeight="bold" mt={4} mb={3}>
          Logistics Details
        </Typography>
        {/* <Button
          onClick={handleAddLogisticsForm}
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "black",
            width: "200px",
            height: "47px",
            padding: "0 15px",
            fontSize: "13px",
            position: "relative",
            left: "25px",
          }}
        >
          + Add Logistics Details
        </Button> */}
      </Box>

      {/* Form Section */}
      {logisticsForms.length > 0 &&
        logisticsForms.map((form, index) => (
          <Box
            key={form.id}
            mb={4}
            border="1px solid #e0e0e0"
            borderRadius="8px"
            p={3}
            mx={2}
            bgcolor="#f9f9f9"
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Order ID"
                  name="orderId"
                  disabled
                  value={orderId || "Loading..."}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Material Dispatched Date"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Courier Partner Details" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Docket Number" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Payment Type"
                  fullWidth
                  select
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                      },
                      height: "40px !important",
                      display: "flex",
                      alignItems: "center",
                    },
                    "& .MuiSelect-select": {
                      padding: "0 10px",
                      height: "40px !important",
                      display: "flex",
                      alignItems: "center",
                    },
                  }}
                >
                  <MenuItem value="type1">To Pay</MenuItem>
                  <MenuItem value="type2">Paid</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  label="Amount"
                  InputProps={{ inputProps: { min: 0 } }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Items Dispatched" fullWidth multiline rows={4} />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                style={{
                  display: "flex-start",
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: "#fff",
                  textTransform: "none",
                  padding: "8px 24px",
                }}
              >
                Save
              </Button>
              <IconButton onClick={() => handleRemoveLogisticsForm(form.id)} color="error">
                <RemoveCircleIcon />
              </IconButton>
              <IconButton onClick={() => handleAddLogisticsForm(form.id)} color="error">
                <AddCircleIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
    </Grid>
  );
};

export default LogisticsForm;
