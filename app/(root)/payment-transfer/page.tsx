import HeaderBox from "@/components/HeaderBox";
import PaymentTranferForm from "@/components/PaymentTranferForm";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="pt-5 size-full">
        <PaymentTranferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
