/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

// Sample data structure
const StatusComponent = ({ data }) => {
  // Define columns using useMemo to optimize performance
  const columns = useMemo(
    () => [
      {
        accessorKey: "departname",
        header: "Department Name",
        size: 200,
      },
      {
        accessorKey: "year",
        header: "Year",
        size: 150,
      },
      {
        accessorKey: "pending",
        header: "Pending",
        size: 100,
      },
      {
        accessorKey: "approved",
        header: "Approved",
        size: 100,
      },
      {
        accessorKey: "rejected",
        header: "Rejected",
        size: 100,
      },
    ],
    []
  );

  // Using useMaterialReactTable to create the table instance
  return <MaterialReactTable columns={columns} data={data} />;
};

export default StatusComponent;
