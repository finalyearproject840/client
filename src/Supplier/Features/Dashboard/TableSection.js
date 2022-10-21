import React from "react";
import styled from "styled-components";
import Tables from "../../../Shared/Components/Tables";
import { useSelector } from "react-redux";
const TableSection = () => {
  const appStore = useSelector((state) => state.SupplierState);
  const { products, subscribers } = appStore;
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
          <div className="col-lg-12">
            <Tables
              data={products.data.slice(0, 11)}
              columns={["name", "price", "quantity", "created_at"]}
              columnName={["Product Name", "price", "quantity", "Uploaded on"]}
              title="Top 10 Medicines"
              id="top-medicines"
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
