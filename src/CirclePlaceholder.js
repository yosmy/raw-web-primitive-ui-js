import React from "react";
import {styled} from "@yosmy/style";
import {CirclePlaceholder as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import ContentLoader from "react-content-loader";

export const CirclePlaceholder = ({
    size, ...props
}) => {
    delete props.margin;

    return <ContentLoader
        width={size}
        height={size}
        {...props}
    >
        <circle cx={size / 2} cy={size / 2} r={size / 2} />
    </ContentLoader>
}

CirclePlaceholder.propTypes = Spec.Props;

CirclePlaceholder.defaultProps = {
    size: 50
};

const StyledCirclePlaceholder = styled(CirclePlaceholder)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledCirclePlaceholder;