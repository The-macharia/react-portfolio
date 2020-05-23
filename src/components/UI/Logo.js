import React from 'react'
import Logos from '../../assets/logo.png'

const styles = {
    padding: '1rem 1.5rem',
    width: '2rem',
    height: '2rem'
}

const Logo = () => <img src={Logos} style={styles} alt="Logo" />

export default Logo