function getParticipants(handshakes) {
    if (handshakes == 0) return 0
    return Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2)
}