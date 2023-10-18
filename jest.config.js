const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // nextJest 함수를 호출하여 Next,js app의 jest 구성을 생성한다.
  // 이를 통해 jest는 테스트 환경에서 next.config.js와 env 파일을 로드 할 수 있다.
  // next.js root 디렉토리를 나타낸다.
  dir: './',
})

// setupFilesAfterEnv는 jest 테스트 실행 전에 실행할 파일을 나타낸다.
// testEnvironment는 테스트 환경을 설정하는데, jest-environment-jsdom으로 설정하게 되면 가상 DOM 환경에서 테스트가 실행된다.
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
