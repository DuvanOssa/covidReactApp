module.exports = {
    name: 'covid-react-app-ui',
    preset: '../../jest.config.js',
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: '../../coverage/libs/covid-react-app-ui',
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/__mocks__/fileMock.ts'
    }
};