import React from "react";
import {Container as ContainerSpec, Json as Spec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";

const Json = ({
    children, ...props
}) => {
    delete props.margin;

    children = JSON.stringify(children, null, 2);

    return <pre
        {...props}
    >
        {children}
    </pre>;
};

Json.propTypes = Spec.Props;

const StyledJson = styled(Json)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledJson;