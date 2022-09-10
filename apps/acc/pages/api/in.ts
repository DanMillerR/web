import { auth, db } from 'fb/admin'
import { NextApiHandler } from 'next'

const In: NextApiHandler = async ({ query: { uid, password } }, res) => {
  const realPassword = (await db.doc('users/' + uid).get()).get('password')

  if (uid && password && realPassword && realPassword === password)
    res.json({ token: auth.createCustomToken(uid as string) })
}

export default In
