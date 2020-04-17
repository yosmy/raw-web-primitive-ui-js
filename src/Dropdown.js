import React from "react";
import {styled} from "@yosmy/style";
import {Dropdown as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";

const Dropdown = ({
    value: initialValue, data, onChange, ...props
}) => {
    delete props.margin;

    return <select
        onChange={(event) => {
            onChange(event.target.value);
        }}
        defaultValue={initialValue}
        {...props}
    >
        {data.map(({label, value}) => {
            return <option
                key={label.toLowerCase()}
                value={value}
            >
                {label}
            </option>;
        })}
    </select>;
};

Dropdown.propTypes = Spec.Props;

const StyledDropdown = styled(Dropdown)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledDropdown;