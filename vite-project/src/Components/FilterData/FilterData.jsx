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
      <InputLabel id="simple-dropdown-label">Filter Date</InputLabel>
      <Select
        labelId="simple-dropdown-label"
        id="simple-dropdown"
        value={selectedValue}
        label="Select Option"
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="1">Day 1</MenuItem>
        <MenuItem value="2">Day 2</MenuItem>
        <MenuItem value="3">Day 3</MenuItem>
        <MenuItem value="4">Day 4</MenuItem>
        <MenuItem value="5">Day 5</MenuItem>
        <MenuItem value="6">Day 6</MenuItem>
        <MenuItem value="7">Day 7</MenuItem>
        <MenuItem value="8">Day 8</MenuItem>
        <MenuItem value="9">Day 9</MenuItem>
        <MenuItem value="10">Day 10</MenuItem>
        <MenuItem value="11">Day 11</MenuItem>
        <MenuItem value="12">Day 12</MenuItem>
        <MenuItem value="13">Day 13</MenuItem>
        <MenuItem value="14">Day 14</MenuItem>
        <MenuItem value="15">Day 15</MenuItem>
        <MenuItem value="16">Day 16</MenuItem>
        <MenuItem value="17">Day 17</MenuItem>
        <MenuItem value="18">Day 18</MenuItem>
        <MenuItem value="19">Day 19</MenuItem>
        <MenuItem value="20">Day 20</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterData;
