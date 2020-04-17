import React from "react";
import {styled} from "@yosmy/style";
import {Layout as LayoutSpec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";

const Content = ({
    gradient, scroll, style, children, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.height;
    delete props.background;

    children = <div
        style={StyleSheet.compose(style, {flex: 1})}
    >
        {children}
    </div>

    return children;
};

Content.propTypes = LayoutSpec.Content.Props;

const StyledContent = styled(Content)`
    ${props => ContainerSpec.compileAlign(props.align)}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => ContainerSpec.compileHeight(props.height)}
    
    ${props => ContainerSpec.compileBackground(props.background)}
`;

export default StyledContent;