import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";

const Header = ({
    start, center, end
}) => {
    return <Container
        flow="row"
        align={{
            main: "center",
            cross: "center"
        }}
    >
        <Container
            flex
            align={{
                cross: "flex-start"
            }}
        >
            {start}
        </Container>
        <Container
            flex
            align={{
                cross: "center"
            }}
        >
            {center}
        </Container>
        <Container
            flex
            align={{
                cross: "flex-end"
            }}
        >
            {end}
        </Container>
    </Container>
};

Header.propTypes = {
    start: PropTypes.element,
    center: PropTypes.element,
    end: PropTypes.element,
};

export default Header;