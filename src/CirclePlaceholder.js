import React from "react";
import {styled} from "@yosmy/style";
import {CirclePlaceholder as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import ContentLoader from 'react-content-loader';

export const CirclePlaceholder = ({
    style, ...props
}) => {
    delete props.margin;
    delete props.width;
    delete props.height;

    return <ContentLoader style={style}>
        <circle cx="25" cy="25" r="20" />
    </ContentLoader>
}

CirclePlaceholder.propTypes = Spec.Props;

const StyledCirclePlaceholder = styled(CirclePlaceholder)`
    ${props => ContainerSpec.compileMargin(props.margin)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledCirclePlaceholder;