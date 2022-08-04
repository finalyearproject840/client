import React from 'react'
import styled from "styled-components";
import { colors } from '../../DefaultValues';
import { AiOutlineCopyright } from "react-icons/ai"
const CopyrightFooter = () => {
    return (
        <StyledCopyrightBox>
            <p className="lead text-center">Copyright {<AiOutlineCopyright />} 2022 | Online Pharmacy Platform</p>
        </StyledCopyrightBox>
    )
}

const StyledCopyrightBox = styled.div`
    .lead{font-size: 0.8rem;
        color: ${colors.black};
        font-weight: 700;
    }
`

export default CopyrightFooter
