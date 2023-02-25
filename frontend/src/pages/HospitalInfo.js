import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { Data } from "../HospitalDB.js";
import { Pagination } from "@mui/material";
import "../App.css";

function HospitalInfo() {
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  const filteredData = Data.filter(
    (val) =>
      val.city.toLowerCase().includes(filterValue.toLowerCase()) ||
      val.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="container p-8">
      <h1 className="my-4 text-center">Hospitals Information</h1>
      <div className="mb-4 border-4 text-center">
        <input
          type="text"
          className="px-2 py-1 border-2 rounded"
          placeholder="Search by name or city"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {currentItems.map((val, k) => (
          <div id="hospitalDetails" key={k} className="mx-4">
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {val.name}
                  </Typography>
                  <Rating name="read-only" value={val.rating} readOnly />
                  <Typography
                    sx={{ fontSize: 16 }}
                    variant="body2"
                    gutterBottom
                  >
                    {val.type}
                  </Typography>
                  <Typography color="text.secondary">
                    Location : {val.address}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={val.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
                  </Button>
                </CardActions>
              </React.Fragment>
            </Card>
          </div>
        ))}
      </div>
      <div className="my-4">
        <Typography variant="body1" component="div" align="center">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="mb-8">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalInfo;
