import React from "react";
import BaseModal from "react-modal";
import {Modal as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Modal = ({
    width, height, full, onClose,
    children, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.flex;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.background;

    let style;

    if (!full) {
        style = {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.80)'
            },
            content : {
                top : "50%",
                left : "50%",
                width: width,
                height: height,
                right : "auto",
                bottom : "auto",
                marginRight : "-50%",
                transform : "translate(-50%, -50%)"
            }
        };
    }

    return <BaseModal
        isOpen={true}
        onRequestClose={onClose}
        ariaHideApp={false} // Needed to avoid a warning related to screen readers
        className={props.className}
        style={style}
        {...props}
    >
        {children}
    </BaseModal>;
};

Modal.propTypes = Spec.Props;

const StyledModal = styled(Modal)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    outline: none;

    ${props => ContainerSpec.compileFlow(props.flow)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileFlex(props.flex)}
    
    ${props => ContainerSpec.compileBackground(props.background)}

    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}

    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
`;

export default StyledModal;