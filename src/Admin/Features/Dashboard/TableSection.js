import React from "react";
import styled from "styled-components";
import Tables from "../../../Shared/Components/Tables";
import { useSelector } from "react-redux";

const TableSection = () => {
  const appStore = useSelector((state) => state.AdminState);
  const { suppliers, products } = appStore;

  return (
    <StyledTableSection>
      <div className="container">
        <div className="row">
          {/* column one */}
          <div className="col-lg-6">
            <Tables
              data={products.data.slice(0, 11)}
              columns={["name", "supplier_name", "created_at"]}
              columnName={["Product Name", "Uploaded by", "Uploaded on"]}
              title="Top 10 Medicines"
              id="top-medicines"
            />
          </div>
          {/* column two */}
          <div className="col-lg-6">
            <Tables
              data={suppliers.slice(0, 11)}
              columns={["organisation", "username", "created_at"]}
              columnName={["Organisation", "Name", "Created At"]}
              title="Top 10 Suppliers"
              id="top-suppliers"
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
