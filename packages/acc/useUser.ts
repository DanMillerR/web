import { User } from 'firebase/auth'

// return user's data
export const useUser = (): [
  { u: User; uLoad: boolean; uErr: Error },
  {
    ud: {
      name: string
      email: string
      password: string
    }
    udLoad: boolean
    udErr: Error
  }
] => {
  const deadlined = 0
  const normal = 1
  const skipped = 2
  const fail = 3
  const done = 4
  // 0 - deadlined, 1 - normal, 2 - skipped, 3 - fail, 4 - done
  return [
    // @ts-ignore
    {},
    {
      // @ts-ignore
      tasks: {
        a: {
          id: 'a',
          state: fail,
          title: 'Dog',
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3G5corsUR1HRwSr0aDwxMgHaFJ%26pid%3DApi&f=1',
          text: 'Woof, woof!',
        },
        b: {
          subTitle: 'Woof woof woof gaf gaf waf wav',

          // state
          progress: 70,
          state: normal,
          // time
          timestamps: {
            create: new Date().toISOString(),
            start: new Date(new Date().getTime() + 60 * 60 * 100).toISOString(),
            update: new Date(
              new Date().getTime() + 2 * 60 * 60 * 100
            ).toISOString(),
            deadline: new Date(
              new Date().getTime() + 4 * 60 * 60 * 100
            ).toISOString(), // theoretically ends
            end: new Date(
              new Date().getTime() + 90 * 60 * 60 * 100
            ).toISOString(), // actually ends
          },
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3glv5sPFYWfb6bontr2w_QHaLG%26pid%3DApi&f=1',
          period: {
            schema: [3],
            mod: 'EVERY_X_DAYS',
          },
          subTasks: {
            dd: {
              id: 1,
              title: 'abc',
              subTasks: { x: { id: 1, title: 'a3e3' } },
            },
          },
          id: 'b',
          title: 'Lorem dolor sit ammet',
          text: 'from the order of the first six keys on the top left letter row of the keyboard (Q W E R T Y). The QWERTY design is based on a layout created for the Sholes and Glidden typewriter and sold to E. Remington and Sons in 1873. It became popular with the success of the Remington No. 2 of 1878, and remains in ubiquitous use. ',
          markers: {
            importantness: 5,
            urgency: 3,
            address: 'Moscow, 12',
            person: '3adn45sga',
          },
        },
        c: {
          id: 'c',
          title: 'x',
          text: 'afsdf',
          state: skipped,
        },
        d: {
          id: 'd',
          text: '1111',
          state: 4,
        },
      },
    },
  ]
}
