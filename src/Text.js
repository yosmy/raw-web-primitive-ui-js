import React from "react";
import {styled} from "@yosmy/style";
import {Text as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {compileOnClick} from "./Container";

const Text = ({
    onClick, children, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;
    delete props.background;
    delete props.wrap;
    delete props.color;
    delete props.font;
    delete props.line;

    const Tag = props.tag || "p";

    delete props.tag;

    return <Tag
        onClick={onClick}
        {...props}
    >
        {children}
    </Tag>
};

const StyledText = styled(Text)`
    ${props => Spec.compileTextAlign(props.align)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin({
        // Remove default html margin
        top: 0,
        bottom: 0,
        ...props.margin
    })}
    ${props => ContainerSpec.compilePadding(props.padding)}
    ${props => ContainerSpec.compileWidth(props.width)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}

    ${props => ContainerSpec.compileBorderRadius(props.border)}

    ${props => ContainerSpec.compileBackground(props.background)}

    ${props => Spec.compileColor(props.color)}
    
    ::placeholder {
      ${props => Spec.compileColor(props.color)}
    } 
    
    ${props => Spec.compileFont(props.font)}
    
    ${props => Spec.compileLine(props.line)}

    ${props => Spec.compileWrap(props.wrap)}

    ${props => compileOnClick(props.onClick)}
`;

StyledText.propTypes = Spec.Props;

export default StyledText;