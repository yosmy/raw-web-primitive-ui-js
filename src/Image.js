import React from 'react';
import {Image as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Image = ({
    source, resize, onClick, style, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.margin;
    delete props.border;
    delete props.width;
    delete props.height;

    return <img
        src={source}
        alt=''
        style={style}
    />
};

Image.propTypes = Spec.Props;

const StyledImage = styled(Image)`
    ${props => ContainerSpec.compileFlex(props.flex)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledImage;