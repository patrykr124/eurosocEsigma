//MENU ANIMATION

export const navbarAnimation = {
    visible: {y: 0}, hidden: {y: '-100%'}
}

export const navbarAnimationTransitio = {
    duration: 0.4, ease: 'easeInOut'
}

//HEADER

export const headerAnimation = {
    visible: {
        y: 0,
        transition: {
            duration: 2.5,
            type: 'spring',
            bounce: 0.4,
            ease: 'easeInOut'
        }
    },
    hidden: {
        y: '-100%',
    }
}
export const headerAnimationP = {
    visible: {
        y: 0,
        transition: {
            duration: 2.5,
            delay: 0.8,
            type: 'spring',
            bounce: 0.4,
            ease: 'easeInOut'
        }
    },
    hidden: {
        y: '-100%',
    }
}
export const headerAnimationButton = {
    visible: {
        y: 0,
        transition: {
            duration: 2.5,
            delay: 0.8,
            type: 'spring',
            bounce: 0.4,
            ease: 'easeInOut'
        }
    },
    hidden: {
        y: '150%',
    }
}


//SECTION

export const sectionAnimation = {
    visible: {
        y: 0,
        opacity: 100,
        transition: {
            duration: 0.8,
            delay: 0.2,
            ease: 'easeInOut'
        }
    },
    hidden: {
        opacity: 0,
        y:'20%'

    }
}

//SERVICES

export const servicesHeaderAnimation = {
    visible: {
        y: 0,
        transition: {
            duration: 2,
            delay: 0.2,
            type: 'spring',
            ease: 'easeInOut'
        }
    },
    hidden: {
        y: '-200%',
    }
}

export const servicesHeaderAnimation2 = {
    visible: {
        y: 0,
        transition: {
            duration: 2,
            delay: 0.8,
            type: 'spring',
            ease: 'easeInOut'
        }
    },
    hidden: {
        y: '-300%',
    }
}