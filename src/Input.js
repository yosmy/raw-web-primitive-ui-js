import React from "react";
import {Container as ContainerSpec, Input as Spec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";

const Input = ({
    id, value, placeholder, focus, keyboard, length, multi, secure, capitalize,
    onChange, style, children, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;

    const type = buildType(secure);

    return <input
        type={type}
        value={value || ''}
        style={style}
        onChange={(event) => {
            onChange(event.target.value)
        }}
    />
};

Input.propTypes = Spec.Props;

const buildType = (secure) => {
    switch (secure) {
        case true:
            return 'password';
        default:
            return 'text';
    }
};

const StyledInput = styled(Input)`
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledInput;
