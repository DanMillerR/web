import { auth, db } from 'fb/admin'
import { NextApiHandler } from 'next'

const In: NextApiHandler = async ({ query: { uid, password } }, res) => {
  const realPassword = (await db.doc('users/' + uid).get()).get('password')

  if (!uid) return res.json({ message: 'input-uid' })
  if (!password) return res.json({ message: 'input-password' })
  if (!realPassword) return res.json({ message: 'user-not-exist' })

  if (realPassword === password)
    return res.json({
      token: await auth.createCustomToken(uid as string),
    })

  res.json({ message: 'smth-went-wrong' })
}

export default In
