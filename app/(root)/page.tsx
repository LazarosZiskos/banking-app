import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const isLoggedIn = {firstName: "Lazaros"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={isLoggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"

          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks = {1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      Dashboard
    </section>
  )
}

export default Home
