import React, {forwardRef} from "react";
import {
    Container as ContainerSpec,
    Text as TextSpec,
    Input as Spec
} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";

const Input = forwardRef(({
    id, value, placeholder, focus, keyboard, length, multi, secure, capitalize,
    onChange, onEnter, children, ...props
}, ref) => {
    delete props.flex;
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;
    delete props.color;
    delete props.background;
    delete props.font;

    const type = buildType(secure);

    return <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={(event) => {
            onChange(event.target.value)
        }}
        onKeyPress={(event) => {
            if (!onEnter || event.charCode !== 13) {
                return;
            }

            onEnter(event.target.value)
        }}
        {...props}
    />
});

Input.propTypes = Spec.Props;

const buildType = (secure) => {
    switch (secure) {
        case true:
            return "password";
        default:
            return "text";
    }
};

const StyledInput = styled(Input)`
    ${props => ContainerSpec.compileFlex(props.flex)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}

    border: 0;
    &:focus{
      outline: none;
    }
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius({...props.border, fix: props.border && props.border.radius})}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}

    ${props => TextSpec.compileColor(props.color)}
    ::placeholder{
      ${props => TextSpec.compileColor(props.color)}
    }

    ${props => ContainerSpec.compileBackground(props.background)}

    ${props => TextSpec.compileFont(props.font)}
`;

export default StyledInput;
