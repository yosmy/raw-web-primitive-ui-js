import React from "react";
import {Container as ContainerSpec, Progress as Spec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";
import ClipLoader from "react-spinners/ClipLoader";

const Progress = ({
    size, color, ...props
}) => {
    delete props.align;
    delete props.margin;

    return <ClipLoader
        loading={true}
        color={color}
        size={size}
        {...props}
    />
};

Progress.propTypes = Spec.Props;

Progress.defaultProps = {
    size: 10
};

const StyledProgress = styled(Progress)`
  ${props => ContainerSpec.compileAlign(props.align)}

  ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledProgress;