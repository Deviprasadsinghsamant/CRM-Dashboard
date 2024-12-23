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

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    Notes: "",
  });
  const [paymentForms, setPaymentForms] = useState([
    {
      orderId: 1,
      paymentId: "",
      paymentType: "",
      paymentDate: "",
      paymentMethod: "",
      amountReceived: "",
      notes: "",
    },
  ]);
  const handleAddPaymentForm = () => {
    setPaymentForms([...paymentForms, { id: Date.now() }]);
  };
  const handleRemovePaymentForm = (id) => {
    setPaymentForms(paymentForms.filter((form) => form.id !== id));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Grid item xs={12} md={12}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} px={2}>
        <Typography variant="h4" fontWeight="bold" mt={4} mb={3}>
          Payments Details
        </Typography>
        {/* <Button
          onClick={handleAddPaymentForm}
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
          + Add Payments Details
        </Button> */}
      </Box>

      {/* Form Section */}
      {paymentForms.length > 0 &&
        paymentForms.map((form, index) => (
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
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Order Id"
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
                  <MenuItem value="type1">id 1</MenuItem>
                  <MenuItem value="type2">id 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Payment Id" fullWidth />
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
                  <MenuItem value="type1">Full Payment</MenuItem>
                  <MenuItem value="type2">Part Payment</MenuItem>
                  <MenuItem value="type2">Advanced</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Payment Date"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Payment Method" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  label="Amount Received"
                  InputProps={{ inputProps: { min: 0 } }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Notes"
                  name="notes"
                  placeholder="Enter a description"
                  multiline
                  rows={6}
                  inputProps={{ maxLength: 150 }}
                  fullWidth
                  onChange={handleInputChange}
                  variant="outlined"
                />
                <Typography
                  variant="caption"
                  color="textSecondary"
                  style={{ float: "right", marginTop: "4px" }}
                >
                  {formData.description?.length || 0}/1500
                </Typography>
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
              <IconButton onClick={() => handleRemovePaymentForm(form.id)} color="error">
                <RemoveCircleIcon />
              </IconButton>
              <IconButton onClick={() => handleAddPaymentForm(form.id)} color="error">
                <AddCircleIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
    </Grid>
  );
};

export default PaymentForm;
