import React from "react";
import styled from "styled-components";
import Tables from "../../../Shared/Components/Tables";

const TableSection = () => {
  const userData = [
    {
      id: 1,
      email: "sean@gmail.com",
      name: "sean",
    },
    {
      id: 2,
      email: "sean@gmail.com",
      name: "sean",
    },
  ];
  return (
    <StyledTableSection>
      <div className="container">
        <div className="row">
          {/* column one */}
          <div className="col-lg-6">
            <Tables
              data={userData}
              columns={["id", "email", "name"]}
              title="Top 10 Medicines"
              id="table1"
            />
          </div>
          {/* column two */}
          <div className="col-lg-6">
            <Tables
              data={userData}
              columns={["id", "email", "name"]}
              title="Top 10 Subscribers"
              id="table2"
            />
          </div>
        </div>
      </div>
    </StyledTableSection>
  );
};

const StyledTableSection = styled.div`
  margin: 2rem 0rem;
`;
export default TableSection;
