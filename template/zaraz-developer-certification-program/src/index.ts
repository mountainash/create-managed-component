import { Manager } from '@managed-components/types'

export default async function (manager: Manager) {
  manager.addEventListener('pageview', () => {
    // manager.addEventListener('pageview', ({ client }) => {
    // Check that the client is a browser
    // if (client.type === 'browser') { // another bug: https://github.com/managed-components/create-managed-component/issues/3
    console.info(new Date()) // nicer than the requested log
    // }
  })
}
