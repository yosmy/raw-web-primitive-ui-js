import React from "react";
import {styled} from "@yosmy/style";
import {Layout as LayoutSpec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {compileFlow} from "../Container";

const Content = ({
    gradient, scroll, children, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.width;
    delete props.height;
    delete props.background;

    return <div
        {...props}
    >
        {children}
    </div>;
};

Content.propTypes = LayoutSpec.Content.Props;

const StyledContent = styled(Content)`
    ${props => compileFlow(props.flow)}
    ${props => ContainerSpec.compileAlign(props.align)}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
    
    ${props => ContainerSpec.compileBackground(props.background)}
`;

export default StyledContent;