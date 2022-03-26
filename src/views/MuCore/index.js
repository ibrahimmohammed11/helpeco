import { DataGrid } from "@material-ui/data-grid";
import React, { Fragment, useState, useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, title: "Snow", body: "Jon" },
  { id: 2, title: "Lannister", body: "Cersei" },
  { id: 3, title: "Lannister", body: "Jaime" },
  { id: 4, title: "Stark", body: "Arya" },
  { id: 5, title: "Targaryen", body: "Daenerys" },
  { id: 6, title: "Melisandre", body: null },
  { id: 7, title: "Clifford", body: "Ferrara" },
  { id: 8, title: "Frances", body: "Rossini" },
  { id: 9, title: "Roxie", body: "Harvey" },
];

export default function MuCore() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <Fragment>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Fragment>
  );
}
