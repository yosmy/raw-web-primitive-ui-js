import React from "react";
import {BufferList as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";
import Container from "./Container";

const BufferList = ({
    data, identifier, init, render, header, change, end, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.border;
    delete props.width;
    delete props.height;

    return <Container
        {...props}
    >
        {data.map((item, i) => {
            return render({
                item: item,
                index: i
            });
        })}
    </Container>
};

BufferList.propTypes = Spec.props;

const StyledBufferList = styled(BufferList)`
    ${props => ContainerSpec.compileAlign(props.align)}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}  
      
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledBufferList;
