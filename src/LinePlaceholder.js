import React from "react";
import {styled} from "@yosmy/style";
import {LinePlaceholder as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import ContentLoader from 'react-content-loader';

export const LinePlaceholder = ({
    style, ...props
}) => {
    delete props.margin;
    delete props.width;
    delete props.height;

    return <ContentLoader style={style}>
        <rect x="0" y="0" rx="0" ry="0" width="100" height="10" />
    </ContentLoader>
}

LinePlaceholder.propTypes = Spec.Props;

const StyledLinePlaceholder = styled(LinePlaceholder)`
    ${props => ContainerSpec.compileMargin(props.margin)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledLinePlaceholder;
