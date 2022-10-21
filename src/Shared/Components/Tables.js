import React, { useEffect, useState } from "react";
import $ from "jquery";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../DefaultValues";
import { StyleTitle } from "../../Styles";
import moment from "moment/moment";
const Tables = (props) => {
  const [id, setId] = useState(props.id);
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#${id}`).DataTable();
      }, 1000);
    });
  }, []);
  return (
    <StyledTableContainer>
      <StyleTitle font={fonts.righteous} size={fontSize.n} color={colors.dark}>
        {props.title || ""}
      </StyleTitle>
      {props.data && (
        <div className="table-responsive">
          <table id={props.id} className="table table-hover">
            <thead>
              <tr className="tr text-dark">
                {props.columnName ? (
                  props.columnName.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))
                ) : (
                  <>
                    <th>id</th>
                    <th>Email</th>
                    <th>Name</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {props.data.map((result) => {
                const id = result.id || result._id;
                return (
                  <tr key={id}>
                    {props.columns.map((column) => {
                      return (
                        <td key={column} className="td">
                          {column === "created_at"
                            ? moment(new Date(result["created_at"])).fromNow()
                            : result[column]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled.div`
  background-color: ${colors.white};
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  .tr {
    color: ${colors.blue};
    font-family: ${fonts.barlow};
    font-size: ${fontSize.sm};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .td {
    font-size: ${fontSize.sm};
    color: ${colors.muted};
    letter-spacing: 1px;
    font-weight: 500;
    font-family: ${fonts.roboto};
  }
`;

export default Tables;
