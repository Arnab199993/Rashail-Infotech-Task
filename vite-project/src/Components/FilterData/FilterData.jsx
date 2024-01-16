import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const FilterData = ({ handleDateChange }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedValue(selectedDate);
    handleDateChange(selectedDate);
  };

  return (
    <FormControl sx={{ width: "14rem", ml: "75%" }}>
      <InputLabel id="simple-dropdown-label">Date Filter</InputLabel>
      <Select
        labelId="simple-dropdown-label"
        id="simple-dropdown"
        value={selectedValue}
        label="Select Option"
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="1"> 1</MenuItem>
        <MenuItem value="2"> 2</MenuItem>
        <MenuItem value="3"> 3</MenuItem>
        <MenuItem value="4"> 4</MenuItem>
        <MenuItem value="5"> 5</MenuItem>
        <MenuItem value="6"> 6</MenuItem>
        <MenuItem value="7"> 7</MenuItem>
        <MenuItem value="8"> 8</MenuItem>
        <MenuItem value="9"> 9</MenuItem>
        <MenuItem value="10"> 10</MenuItem>
        <MenuItem value="11"> 11</MenuItem>
        <MenuItem value="12"> 12</MenuItem>
        <MenuItem value="13"> 13</MenuItem>
        <MenuItem value="14"> 14</MenuItem>
        <MenuItem value="15"> 15</MenuItem>
        <MenuItem value="16"> 16</MenuItem>
        <MenuItem value="17"> 17</MenuItem>
        <MenuItem value="18"> 18</MenuItem>
        <MenuItem value="19"> 19</MenuItem>
        <MenuItem value="20"> 20</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterData;
