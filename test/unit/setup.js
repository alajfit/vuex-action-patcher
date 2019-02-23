/* global jest */
process.env.JEST_TEST = true

// Spy on console log
global.console = {
    warn: jest.fn(),
    log: jest.fn(),
    error: jest.fn()
}