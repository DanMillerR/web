import { auth, db } from 'fb/admin'
import { NextApiHandler } from 'next'

const In: NextApiHandler = async ({ query: { uid, password } }, res) => {
  if (!uid) return res.json({ code: 'input-uid' })
  if (!password) return res.json({ code: 'input-password' })

  const realPassword = (
    await db
      .doc('users/' + (uid as string))
      .get()
      .catch(() =>
        res.json({
          code: 'get-password-error',
        })
      )
  )?.get('password') as string

  if (!realPassword) return res.json({ code: 'user-not-exist' })

  if (realPassword === password)
    return res.json({
      token: await auth.createCustomToken(uid as string).catch(() =>
        res.json({
          code: 'create-token-error',
        })
      ),
    })

  res.json({ code: 'wrong-password' })
}

export default In
