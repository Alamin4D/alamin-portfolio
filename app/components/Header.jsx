import React from 'react'
import Logo from './Logo';

const Header = () => {
    return (
        <div className='2xl:hidden absolute z-40 top-0 right-0 left-0'>
            <div className='container mx-auto'>
                <div>
                    {/* logo */}
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Header;