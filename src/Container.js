import React, {forwardRef} from "react";
import {styled} from "@yosmy/style";
import {Container as Spec} from "@yosmy/primitive-ui-spec"

const Container = forwardRef(({
    onClick, children, ...props
}, ref) => {
    delete props.flow;
    delete props.align;
    delete props.flex;
    delete props.margin;
    delete props.padding;
    delete props.background;
    delete props.border;
    delete props.width;
    delete props.height;
    delete props.z;
    delete props.position;
    delete props.shadow;
    delete props.scroll;

    delete props.table;
    delete props.row;
    delete props.cell;

    return <div
        ref={ref}
        onClick={onClick}
        {...props}
    >
        {children}
    </div>
});

const compileFlow = (flow) => {
    let compilation = [];

    if (flow) {
        compilation.push(`display: flex;`);

        compilation.push(Spec.compileFlow(flow));
    }

    return compilation.join("");
};

const compileOnClick = (onClick) => {
    let compilation = [];

    if (onClick) {
        compilation.push(`cursor: pointer;`);
    }

    return compilation.join("");
};

const compileTable = (table) => {
    if (!table) {
        return "";
    }

    return "display: table;"
};

const compileRow = (row) => {
    if (!row) {
        return "";
    }

    return "display: table-row;"
};

const compileCell = (cell) => {
    if (!cell) {
        return "";
    }

    return "display: table-cell;"
};

const StyledContainer = styled(Container)`
    ${props => compileFlow(props.flow)}
    ${props => Spec.compileFlex(props.flex)}
    ${props => Spec.compileAlign(props.align)}

    ${props => Spec.compileWidth(props.width)}
    ${props => Spec.compileHeight(props.height)}

    ${props => Spec.compileMargin(props.margin)}
    ${props => Spec.compilePadding(props.padding)}
    
    ${props => Spec.compileBackground(props.background)}

    ${props => Spec.compileBorderWidth(props.border)}
    ${props => Spec.compileBorderStyle(props.border)}
    ${props => Spec.compileBorderColor(props.border)}
    ${props => Spec.compileBorderRadius(props.border)}
    
    ${props => Spec.compileZ(props.z)}
    ${props => Spec.compilePosition(props.position)}
    ${props => Spec.compileShadow(props.shadow)}
    
    ${props => Spec.compileScroll(props.scroll)}

    ${props => compileTable(props.table)}
    ${props => compileRow(props.row)}
    ${props => compileCell(props.cell)}

    ${props => compileOnClick(props.onClick)}
`;

export {compileFlow, compileOnClick};

export default StyledContainer;
