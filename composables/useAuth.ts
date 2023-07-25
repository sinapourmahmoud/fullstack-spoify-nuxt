export default () => {
  let useUser = useState("useUser", () => null);
  const client = useSupabaseAuthClient();
  const loginGoogle = async () => {
    let { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data);
  };

  const register = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await client.auth.signUp({
      email,
      password,
    });
    console.log(error);
    if (error) {
      alert("something went wrong");
    }
  };
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(data);
    if (error) {
      alert("something went wrong");
    }
  };

  const sendEmail = async (email: string) => {
    const { data, error } = await client.auth.resetPasswordForEmail(email);
    console.log(error, data);
  };
  const updatePassword = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await client.auth.updateUser({
      password,
    });
    console.log(error, data);
  };
  return {
    updatePassword,
    loginGoogle,
    sendEmail,
    login,
    register,
    useUser,
  };
};
