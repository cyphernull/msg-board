import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock

global.fetch = jest.fn().mockImplementation(() => {
  const res = new Promise((resolve, reject) => {
    resolve({
      text: () => {
        return new Promise((resolve, reject) => {
          resolve(
            JSON.stringify([
              {
                time: '14:25',
                email: 'sadf@rtd.com',
                text: 'heelo',
                timestamp: '1521181518',
                uuid: 'cc27f210-28e2-11e8-8238-517514c6d399'
              }
            ])
          )
        })
      },
      json: () => {
        return new Promise((resolve, reject) => {
          resolve([
            {
              time: '14:25',
              email: 'sadf@rtd.com',
              text: 'heelo',
              timestamp: '1521181518',
              uuid: 'cc27f210-28e2-11e8-8238-517514c6d399'
            }
          ])
        })
      }
    })
  })
  return res
})
