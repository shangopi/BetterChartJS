import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { saveCSV } from "../../redux/csvhandler";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Drop(props) {
  const { setSelectedFile, selectedFile, routeToPage } = props;
  const dispatch = useDispatch();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "text/csv": [],
    },
  });

  const files = acceptedFiles.map((file) => {
    // console.log("File is: ", file);
    setSelectedFile(file);
    // dispatch(saveCSV(file));
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  return (
    <section className="container border">
      <div {...getRootProps({ className: "dropzone" })}>
        <input
          {...getInputProps()}
          onChange={(event) => {
            console.log("Event is: ", event);
            if (event?.target.files.length) {
              dispatch(saveCSV(event.target.files[0]));
            }
          }}
        />
        <div className="container py-2 px-0">
          <div
            style={{ border: "1px dashed" }}
            className="p-5 text-center bg-light"
          >
            Drag 'n' Drop a CSV file here
            <br />
            or
            <br />
            Click to select a CSV file
          </div>
        </div>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <div className="col offset-10 pb-3">
        <Link
          style={{ textDecoration: "none" }}
          to={{ pathname: "/charttype" }}
          state={{ data: selectedFile }}
          // onClick={routeToPage}
        >
          <Button variant="outline-dark">Submit</Button>
        </Link>
      </div>
    </section>
  );
}

export default Drop;
