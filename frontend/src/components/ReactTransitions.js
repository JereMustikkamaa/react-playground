import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const ReactTransitions = () => {
    const [active, setActive] = useState('')
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setActive('white')
        }, 1500)
    }, [])
    return (
        <div>
            <h1>react-transition-group</h1>
            <div className='text-content'>
                CSS transitions don't work when React adds or removes items from it's virtual dom. To use transitions when manipulating components you must use react-transition-group package.
                Wrap component with 'CSSTransition' and add props 'in', 'timeout' and 'classNames'. In is the condition when the transition will begin and classnames is base name for the css
                class the component will receive with suffixes, *-enter, -enter-active, -exit, -exit-active, -done

            </div>
            <div className='dropdown' onClick={() => setOpen(!open)}>
                Click this
                <CSSTransition
                    in={open}
                    timeout={1000}
                    classNames='dropdown'
                >
                    <div className='dropdown-content'>

                    </div>
                </CSSTransition>
            </div>


            <div className='rtg-main'>
                <CSSTransition
                    in={active === 'white'}
                    timeout={1500}
                    classNames="rtg"
                    unmountOnExit>
                    <div className='rtg-box' style={{ color: 'black', backgroundColor: 'white' }} onClick={() => setActive('black')} >
                        {/* this div will receive rtg-white-* classes 
                    * = enter, enter-active, exit, exit-active */}
                    Click this
                </div>
                </CSSTransition>
            </div>
            <div className='rtg-main'>
                <CSSTransition
                    in={active === 'black'}
                    timeout={1500}
                    classNames="rtg"
                    unmountOnExit>
                    <div className='rtg-box' style={{ color: 'white', backgroundColor: 'black' }} onClick={() => setActive('white')}>
                        Click this
                </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default ReactTransitions
