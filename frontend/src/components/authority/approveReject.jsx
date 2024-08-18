/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ApproveRejectComponent = ({ data, setData }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [comment, setComment] = useState("");
  const [actionType, setActionType] = useState("");

  const handleOpenDialog = (rowIndex, type) => {
    setSelectedRowIndex(rowIndex);
    setActionType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setComment("");
  };

  const handleAction = () => {
    const updatedData = data.map((row, index) =>
      index === selectedRowIndex ? { ...row, status: actionType, comment } : row
    );
    setData(updatedData);
    handleCloseDialog();
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
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ row }) => (
          <Grid container spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                startIcon={<CheckCircleIcon />}
                onClick={() => handleOpenDialog(row.index, "Approved")}
              >
                Approve
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                startIcon={<CancelIcon />}
                onClick={() => handleOpenDialog(row.index, "Rejected")}
              >
                Reject
              </Button>
            </Grid>
          </Grid>
        ),
      },
    ],
    [data]
  );

  return (
    <>
      <MaterialReactTable columns={columns} data={data} />
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{`Add a comment for ${actionType}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide a comment for this action.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Comment"
            type="text"
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAction} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApproveRejectComponent;
