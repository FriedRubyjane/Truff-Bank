import React, { FC } from 'react'
import Layout from '../../layout/Layout'
import Header from './Header'
import Accounts from './accounts/Accounts'
import ApplyNewProduct from './apply-new-products/ApplyNewProduct'
import Stories from './stories/Stories'

const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Stories />
			<Accounts />
			<ApplyNewProduct />
		</Layout>
	)
}

export default Home
