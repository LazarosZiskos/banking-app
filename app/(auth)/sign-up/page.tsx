import Authform from "@/components/Authform";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <Authform type="sign-up" />
    </section>
  );
};

export default SignUp;
