import animation from 'nanoanimation'

const hover = animation([
    { transform: 'translateY(0%)' },
    { transform: 'translateY(-10%)' },
    { transform: 'translateY(0%)' }
], {
    duration: 500
})

export {
    hover
}