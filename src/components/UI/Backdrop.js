import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'

const BackdropComp = (props) => (
    <Backdrop open={props.open} onClick={props.clicked} />
)

export default BackdropComp
