import PropTypes from "prop-types"
import { Container } from "./style"

export function ButtonText({ title, isActive = false, ...rest }) {
    return (
        <Container type="button" $isactive={isActive} {...rest}>
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string,
    isActive: PropTypes.bool,
}
