import React from "react";
import {Image as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Image = ({
    source, resize, onClick, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.border;
    delete props.width;
    delete props.height;

    if (typeof source === "object" && typeof source.default !== "undefined") {
        source = source.default;
    }

    return <img
        src={source}
        alt=""
        {...props}
    />
};

Image.propTypes = Spec.Props;

const StyledImage = styled(Image)`
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledImage;