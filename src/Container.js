import React from "react";
import {styled} from "@yosmy/style";
import {Container as Spec} from "@yosmy/primitive-ui-spec"

const Container = ({
    background, gradient, onClick, style, children, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.flex;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;
    delete props.height;
    delete props.z;
    delete props.position;
    delete props.shadow;

    return <div
        onClick={onClick}
        style={style}
        {...props} // key
    >
        {children}
    </div>
}

const StyledContainer = styled(Container)`
    ${props => Spec.compileFlow(props.flow)}
    ${props => Spec.compileFlex(props.flex)}
    ${props => Spec.compileAlign(props.align)}

    ${props => Spec.compileWidth(props.width)}
    ${props => Spec.compileHeight(props.height)}

    ${props => Spec.compileMargin(props.margin)}
    ${props => Spec.compilePadding(props.padding)}

    ${props => Spec.compileBorderWidth(props.border)}
    ${props => Spec.compileBorderStyle(props.border)}
    ${props => Spec.compileBorderColor(props.border)}
    ${props => Spec.compileBorderRadius(props.border)}
    
    ${props => Spec.compileZ(props.z)}
    ${props => Spec.compilePosition(props.position)}
    ${props => Spec.compileShadow(props.shadow)}
`;

export default StyledContainer;
