import React from "react";
import styled from "styled-components";
import Tables from "../../../Shared/Components/Tables";
import {useSelector} from "react-redux";
const TableSection = () => {
  const appStore = useSelector(state=>state.SupplierState);
  const {products} = appStore;
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
              data={products.data.slice(0,11)}
              columns={["_id", "name", "price"]}
              columnName={["ID", "Product Name", "Price"]}
              title="Top 10 Medicines"
              id="top-medicines"
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
