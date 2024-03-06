function generateOTP() {
    return Math.floor(Math.random() * 899999 + 100000)
}

export { generateOTP }