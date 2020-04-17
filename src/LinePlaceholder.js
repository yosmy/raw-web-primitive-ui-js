import React from "react";
import {styled} from "@yosmy/style";
import {LinePlaceholder as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import ContentLoader from "react-content-loader";

export const LinePlaceholder = ({
    width, height, ...props
}) => {
    delete props.margin;

    return <ContentLoader
        width={width}
        height={height}
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
}

LinePlaceholder.propTypes = Spec.Props;

LinePlaceholder.defaultProps = {
    width: 100,
    height: 12
};

const StyledLinePlaceholder = styled(LinePlaceholder)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledLinePlaceholder;
