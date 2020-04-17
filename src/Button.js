import React, {useRef} from "react";
import {styled} from "@yosmy/style";
import {Button as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {compileFlow, compileOnClick} from "./Container";

const Button = ({
    upload, onClick, children, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.background;
    delete props.width;
    delete props.height;

    const ref = useRef(null);

    return <button
        onClick={!upload
            ? () => {
                onClick();
            }
            : () => {
                ref.current.click();
            }
        }
        {...props}
    >
        {upload && <input type="file"
           ref={ref}
           onChange={(event) => {
               const fileUploaded = event.target.files[0];

               onClick(fileUploaded);
           }}
           style={{display:'none'}}
        />}
        {children}
    </button>
}

Button.propTypes = Spec.Props;

const StyledButton = styled(Button)`
    ${props => compileFlow(props.flow)}

    ${props => 
        ContainerSpec.compileAlign(props.align)
        || ContainerSpec.compileAlign(
            {
                main: "center",
                cross: "center"
            }
        )
    }

    ${props => ContainerSpec.compileMargin(props.margin)}

    ${props => ContainerSpec.compilePadding(props.padding)}

    ${props =>
        ContainerSpec.compileBorderWidth(props.border)
        || ContainerSpec.compileBorderWidth(0)
    }

    ${props =>
        ContainerSpec.compileBorderStyle(props.border)
        || ContainerSpec.compileBorderStyle({
            style: "solid"        
        })
    }
    
    ${props => ContainerSpec.compileBorderColor(props.border)}
    
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => 
        ContainerSpec.compileBackground(props.background)
        || ContainerSpec.compileBackground("transparent")
    }

    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}

    ${props => compileOnClick(props.onClick)}
`;

export default StyledButton;
