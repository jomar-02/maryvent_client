import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Example = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://maryvent-server.onrender.com/api/event")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 200,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "type",
        header: "Type",
        size: 80,
      },
      {
        accessorKey: "theme",
        header: "Theme",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 100,
      },
      {
        accessorKey: "contact",
        header: "Contact",
        size: 200,
      },
      {
        accessorKey: "venue",
        header: "Venue",
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: events,
  });

  return (
    <div style={{ marginInline: "auto", marginTop: 10, width: "90%" }}>
      <Typography variant="h5" sx={{ marginBottom: 2, display: "block" }}>
        List Of Events
      </Typography>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Example;
