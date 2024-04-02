import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../redux/slices/userSlice.ts'
import { RootState } from '../../../redux/store.ts'
import { CartIcon } from '../cart/CartIcon.tsx'
import styles from './Navigation.module.scss'
import { UserActions } from './UserActions.tsx'
import { NavLink } from './links/NavLink.tsx'

const Navigation = () => {
	const [open, setOpen] = useState(false)

	const user = useSelector((state: RootState) => state.user.user)
	const dispatch = useDispatch()

	const openNavigation = () => setOpen(!open)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	useEffect(() => {
		const auth = getAuth()

		const unsubscribe = onAuthStateChanged(auth, authUser =>
			authUser ? dispatch(setUser(authUser)) : dispatch(setUser(null))
		)

		return () => unsubscribe()
	}, [dispatch])

	return (
		<>
			<nav className={styles.nav} role='navigation'>
				<ul className={open ? `${styles.visible}` : ''}>
					<NavLink page='Головна' path='/' />
					<NavLink page='Про Нас' path='/about' />

					<UserActions user={user} />
				</ul>
			</nav>

			<div className={styles.headerRight}>
				<button
					type='button'
					className={
						open ? `${styles.burgerNav} ${styles.open}` : `${styles.burgerNav}`
					}
					onClick={openNavigation}
				>
					<span className={styles.burgerLine}></span>
				</button>
				<CartIcon />
			</div>

			<UserActions user={user} />
		</>
	)
}

export { Navigation }
