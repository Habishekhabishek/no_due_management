/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Switch } from "@mui/material";

const FormEnableComponent = ({ data, setData }) => {
  const handleToggle = (rowIndex) => {
    // Update the enabled status in the data array
    const updatedData = data.map((row, index) =>
      index === rowIndex ? { ...row, enabled: !row.enabled } : row
    );
    setData(updatedData); // Set the updated data
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "esimid",
        header: "ESIM ID",
        size: 150,
      },
      {
        accessorKey: "studentname",
        header: "Student Name",
        size: 200,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 200,
      },
      {
        accessorKey: "year",
        header: "Year",
        size: 150,
      },
      {
        accessorKey: "semester",
        header: "Semester",
        size: 150,
      },
      {
        accessorKey: "enabled",
        header: "Enable/Disable",
        size: 150,
        Cell: ({ row }) => (
          <Switch
            checked={row.original.enabled}
            onChange={() => handleToggle(row.index)} // Toggle switch handler
          />
        ),
      },
    ],
    [data] // Dependencies for useMemo, updating when data changes
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default FormEnableComponent;
