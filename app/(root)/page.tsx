import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const isLoggedIn = {
    firstName: "Lazaros",
    lastName: "Ziskos",
    email: "ziskoslaz@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={isLoggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RESET TRANSACTIONS
      </div>
      <RightSidebar
        user={isLoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 550.5 }]}
      />
    </section>
  );
};

export default Home;
